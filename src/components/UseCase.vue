<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { websocket, makeWebsocketRequestExpectingResponse, uuidv4 } from '../item-state'
import { D2TopNItem, type D2Item } from '../model/D2Item'
import { ITEM_QUALITY_NAMES } from '../model/globals'
import { DATA_CACHE } from '../app-state'

const categories = ref<string[]|undefined>(undefined)
const selectedCategory = ref<string|undefined>(undefined)
const itemCategoryState = ref<ItemCategoryState|undefined>(undefined)

const props = defineProps<{
  useCase: string
}>()

interface UseCaseAndCategoryNamesRequest {
    _type : "UseCaseAndCategoryNamesRequest",
    requestId : string
}

interface UseCaseAndCategoryNamesResponse {
    _type : "UseCaseAndCategoryNamesResponse",
    requestId : string,
    categoryNamesByUseCase: Map<string, string[]>
}

interface ItemCategoryState {
    items: D2TopNItem[],
    maxRank: number,
    maxSequenceNumber: number,
    pendingRequestId ?: string
}
// I already have the top ${maxRankAlreadyFetched} items, as of
// sequenceNumber = ${maxSequenceNumberAlreadyFetched}
// Send whatever additional items I need so that I'll have the complete topN
// as of whatever the current sequenceNumber is for the topN on the server
interface TopNItemsRequest {
    _type : "TopNItemsRequest",
    requestId : string,
    useCase: string,
    category: string,
    n: number,
    maxRankAlreadyFetched: number,
    maxSequenceNumberAlreadyFetched: number,
}

interface TopNItemsResponse {
    _type : "TopNItemsResponse",
    requestId: string,
    diffToFillTopN: D2TopNItem[],
    n: number
}

//const items = computed<D2TopNItem[]>(() => {
//  return []
//})

onMounted(() => {
  fetchCategories();
});

async function fetchCategories() {
  console.log("start of fetchCategories");
    const request:UseCaseAndCategoryNamesRequest = {
      requestId : uuidv4(),
      _type : "UseCaseAndCategoryNamesRequest",
    }

    let untypedResponse = await makeWebsocketRequestExpectingResponse(request);
    const response: UseCaseAndCategoryNamesResponse = {
        _type : "UseCaseAndCategoryNamesResponse",
        requestId : untypedResponse.requestId,
        categoryNamesByUseCase : new Map(Object.entries(untypedResponse.categoryNamesByUseCase))
    }

    console.log("Response in fetchCategories : " + response);
    categories.value = response.categoryNamesByUseCase.get(props.useCase)!;
}

function getCacheKey(useCase:string, category:string) {
  return `UseCaseCategoryState|${useCase}|${category}`;
}

function updateSelectedCategory(newCategory: string) {
  selectedCategory.value = newCategory

  const cacheKey = getCacheKey(props.useCase, newCategory);
  if (!DATA_CACHE.has(cacheKey)) {
    DATA_CACHE.set(cacheKey, {
          items: [],
          maxRank: 0,
          maxSequenceNumber: 0
    });
  }
  itemCategoryState.value = DATA_CACHE.get(cacheKey);

  refreshDataForSelectedCategory();
}
    
async function refreshDataForSelectedCategory() {
  const request: TopNItemsRequest = {
        _type: "TopNItemsRequest",
        requestId: uuidv4(),
        useCase: props.useCase,
        category: selectedCategory.value!,
        n: 10,
        maxRankAlreadyFetched: itemCategoryState.value!.maxRank,
        maxSequenceNumberAlreadyFetched: itemCategoryState.value!.maxSequenceNumber
    };

    itemCategoryState.value!.pendingRequestId = request.requestId;

    let response:TopNItemsResponse = await makeWebsocketRequestExpectingResponse(request);

    if (itemCategoryState.value!.pendingRequestId === undefined) {
        console.error("Got a TopNItemsResponse, but there's no pending request: " + response);
        return;
    }
    if (itemCategoryState.value!.pendingRequestId != response.requestId) {
      console.error("Got a TopNItemsResponse, but itemCategoryState has a different requestId")
      return;
    }

    if (response.diffToFillTopN.length == 0) {
        console.log("No new items for top n");
        itemCategoryState.value!.pendingRequestId = undefined;
        return;
    }

    let maxSequenceNumberInResponse = 0;
    response.diffToFillTopN.forEach(item => {
        itemCategoryState.value!.items.push(item);
        if (item.sequenceNumber > maxSequenceNumberInResponse) maxSequenceNumberInResponse = item.sequenceNumber;
    });
    itemCategoryState.value!.items.sort((a,b) => {
        let diff = b.score - a.score;
        if (diff == 0) {
            return b.sequenceNumber - a.sequenceNumber;
        }
        return diff;
    })

    while (itemCategoryState.value!.items.length > response.n) {
        itemCategoryState.value!.items.pop();
    }
    itemCategoryState.value!.maxRank = response.n;
    itemCategoryState.value!.pendingRequestId = undefined;
    itemCategoryState.value!.maxSequenceNumber = Math.max(itemCategoryState.value!.maxSequenceNumber, maxSequenceNumberInResponse);

}

</script>

<template>
  <div style="border:1px solid #888; border-radius:5px; margin: 10px 0px; padding: 3px;">
    <div style="color: white; margin:8px 0px;">{{ props.useCase }}</div>
    <template v-if="categories">

      <div class="category-list" v-if="categories.length > 0">
        Categories : 
        <template v-for="category in categories">
          <span class="category-link" :class="{ selected : category == selectedCategory}" @click="updateSelectedCategory(category)">{{ category }}</span>
        </template>
      
      </div>

      <template v-if="selectedCategory">
        <table class="d2-item-table">
          <tr>
            <th>Score</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
          <template v-for="item in itemCategoryState?.items" :key="item.id">
            <D2ItemRow :item="item" />
          </template>
        </table>
      </template>
    

    </template>
  </div>
</template>

<style scoped>
table.d2-item-table {
  border-collapse: collapse;
}
table.d2-item-table :deep(td) {
  background-color: #222;
  color: white;
  text-align: left;
  border: 1px solid #888;
  padding: 2px;
}

table.d2-item-table th {
  background-color: #222;
  color: white;
  border: 1px solid #888;
  padding: 2px 5px;
}

.category-link {
  margin-right: 10px;
  margin-bottom: 2px;
  padding: 0px 3px;
  cursor: pointer;
  display: inline-block;
  border: 1px dotted #888;
  color: white;
  background-color: #444;
}

.category-link.selected {
  background-color: #8888ff;
}

.category-list {
  text-align: left;
  margin-bottom: 5px;
}

</style>
