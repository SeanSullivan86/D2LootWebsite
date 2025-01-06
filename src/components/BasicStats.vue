<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { websocket, makeWebsocketRequestExpectingResponse, uuidv4 } from '../item-state'
import { type D2Item } from '../model/D2Item'
import { ITEM_QUALITY_NAMES } from '../model/globals'

const recentItemsByQuality = ref<D2Item[]|null>(null)
const itemCountsByQuality = ref<number[]|null>(null)

interface HomePageRequest {
    _type : "HomePageRequest",
    requestId : string
}

interface HomePageResponse {
    _type : "HomePageResponse",
    recentItemsByQuality : D2Item[],
    itemCountsByQuality : number[]
}

//const items = computed<D2TopNItem[]>(() => {
//  return []
//})

onMounted(() => {

  loadBasicStats();
});

async function loadBasicStats() {
  console.log("start of loadBasicStats");
    const request:HomePageRequest = {
      requestId : uuidv4(),
      _type : "HomePageRequest",
    }

    let response = await makeWebsocketRequestExpectingResponse(request);
    console.log("Response in loadBasicStats : " + response);
    recentItemsByQuality.value = response.recentItemsByQuality;
    itemCountsByQuality.value = response.itemCountsByQuality;
}

</script>

<template>
  
  <template v-if="itemCountsByQuality">

    <table class="basicStatsTable">
      <thead>
        <tr>
          <th>Quality</th>
          <template v-for="qualityId in [4,5,6,7]">
            <th>{{ ITEM_QUALITY_NAMES[qualityId] }}</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Latest Item</td>
          <template v-for="qualityId in [4,5,6,7]">
            <td valign="top">
              <template v-if="recentItemsByQuality![qualityId] != null">
                <D2Item :item="recentItemsByQuality![qualityId]" />
              </template>
            </td>  
          </template>
        </tr>
        <tr>
          <td>Item Count</td>
          <template v-for="qualityId in [4,5,6,7]">
            <td>
              {{ itemCountsByQuality[qualityId] }}
            </td>  
          </template>
        </tr>
      </tbody>
    </table>

  </template>


</template>

<style scoped>

.basicStatsTable {
  border-collapse:collapse;
}

.basicStatsTable td {
  border: 1px solid #888;
  padding: 2px 5px;
}

.basicStatsTable th {
  border: 1px solid #888;
  padding: 2px 5px;
}


</style>
