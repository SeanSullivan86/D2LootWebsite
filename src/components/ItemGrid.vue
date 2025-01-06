<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { websocket, makeWebsocketRequestExpectingResponse, uuidv4 } from '../item-state'
import { D2TopNItem, type D2Item } from '../model/D2Item'
import { ITEM_QUALITY_NAMES } from '../model/globals'
import { DATA_CACHE } from '../app-state'

const itemGridState = ref<ItemGridState|undefined>(undefined)

const props = defineProps<{
  gridName: string
}>()

interface ItemGridCounts {
    rowNames : string[],
    columnNames : string[],
    counts : number[][],
    rowTotals : number[],
    columnTotals : number[]
}


interface ItemGridCountsRequest {
    _type : "ItemGridCountsRequest",
    requestId : string,
    gridName : string
}

interface ItemGridCountsResponse {
    _type : "ItemGridCountsResponse",
    requestId : string,
    counts: ItemGridCounts
}

interface ItemGridState {
    counts?: ItemGridCounts,
    pendingRequestId ?: string
}

onMounted(() => {

    itemGridState.value = {
        counts: undefined,
        pendingRequestId: undefined,
    }

    refreshData();
});

function getCacheKey(gridName:string) {
  return `ItemGridCounts|${gridName}`;
}

    
async function refreshData() {
  const request: ItemGridCountsRequest = {
        _type: "ItemGridCountsRequest",
        requestId: uuidv4(),
        gridName: props.gridName
    };
    console.log(request);

    itemGridState.value!.pendingRequestId = request.requestId;

    let response:ItemGridCountsResponse = await makeWebsocketRequestExpectingResponse(request);

    if (itemGridState.value!.pendingRequestId === undefined) {
        console.error("Got a ItemGridCountsResponse, but there's no pending request: " + response);
        return;
    }
    if (itemGridState.value!.pendingRequestId != response.requestId) {
      console.error("Got a ItemGridCountsResponse, but itemGridState has a different requestId")
      return;
    }

    itemGridState.value = {
        counts : response.counts,
        pendingRequestId : undefined
    }

    DATA_CACHE.set(getCacheKey(props.gridName), itemGridState.value!);

}

</script>

<template>
  <div style="border:1px solid #888; border-radius:5px; margin: 10px 0px; padding: 3px;">
    <div style="color: white; margin:8px 0px;">{{ props.gridName }}</div>
    <template v-if="itemGridState?.counts">
        <table class="itemGrid">
            <thead>
                <tr><th></th>
                    <template v-for="columnName in itemGridState.counts.columnNames">
                        <th>{{ columnName }}</th>
                    </template>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(rowName, rowIndex) in itemGridState.counts.rowNames">
                    <tr><th>{{ rowName }}</th>
                    
                        <template v-for="(columnName, columnIndex) in itemGridState.counts.columnNames">
                            <td>{{ itemGridState.counts.counts[rowIndex][columnIndex] }}</td>
                        </template>
                    
                        <td>{{ itemGridState.counts.rowTotals[rowIndex] }}</td>
                    </tr>
                </template>
                <tr><th>Total</th>
                    <template v-for="(columnName, columnIndex) in itemGridState.counts.columnNames">
                        <td>{{ itemGridState.counts.columnTotals[columnIndex] }}</td>
                    </template>
                    <th></th>
                </tr>
            </tbody>
        </table>
    

    </template>
  </div>
</template>

<style scoped>
table.itemGrid {
  border-collapse: collapse;
}
table.itemGrid td {
  background-color: #222;
  color: white;
  text-align: left;
  border: 1px solid #888;
  padding: 2px;
}

table.itemGrid th {
  background-color: #222;
  color: white;
  border: 1px solid #888;
  padding: 2px 5px;
}


</style>
