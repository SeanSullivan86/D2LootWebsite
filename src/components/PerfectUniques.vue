<script setup lang="ts">
import { ref, watch } from 'vue'
import { snapshotData, createItemTooltip, moveItemTooltip, destroyItemTooltip } from '../app-state'


const props = defineProps<{
  snapshotId: string,
  dropContext: string
}>()

const rows = ref<any[]>([])

watch(
  [() => props.snapshotId, () => props.dropContext],
  ([newSnapshotId, newDropContext], [oldSnapshotId, oldDropContext]) => {
    const consumerSnapshot = snapshotData.dropContexts[props.dropContext].consumersById["PERFECT_UNIQUES_TRACKER"]

    let newRows:any[] = Object.values(consumerSnapshot.statsByName);

    newRows.sort((a,b) => {
        return b.possibleRolls - a.possibleRolls;
    })

    rows.value = newRows;

  }, { immediate: true }
);  

function formatPercentage(num:number) {
  return (Math.floor(num*10000)/100.0) + "%";
}

</script>

<template>
    <div style="color: white; margin:8px 0px;">Are we ever going to see a 100% perfect Tomb Reaver? Probably not ...</div>
    <template v-if="rows.length > 0">
        <table class="itemGrid">
            <thead>
                <tr><th>Name</th>
                    <th>Possible Rolls</th>
                    <th>Ethereal Count Found</th>
                    <th>Non-Ethereal Count Found</th>
                    <th colspan="2">Max %Perfect Ethereal</th>
                    <th colspan="2">Max %Perfect Non-Ethereal</th>
                    <th>Perfect Ethereal Count Found</th>
                    <th>Perfect Non-Ethereal Count Found</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(row, rowIndex) in rows">
                    <tr><td>{{ row.name }}</td>
                        <td>{{ row.possibleRolls.toLocaleString() }}</td>
                        <td>{{ row.ethCount.toLocaleString() }}</td>
                        <td>{{ row.nonEthCount.toLocaleString() }}</td>
                        <td style="border-right:0px" 
                          @click="createItemTooltip(row.bestEthItemId, 'PERFECT_UNIQUES_TRACKER', $event)" 
                          @mouseenter="createItemTooltip(row.bestEthItemId, 'PERFECT_UNIQUES_TRACKER', $event)" 
                          @mouseleave="destroyItemTooltip" @mousemove="moveItemTooltip">
                           <template v-if="row.ethCount > 0">{{ formatPercentage(row.maxEthPerfection) }} </template>
                        </td>
                        <td style="border-left:0px;" 
                          @click="createItemTooltip(row.bestEthItemId, 'PERFECT_UNIQUES_TRACKER', $event)" 
                          @mouseenter="createItemTooltip(row.bestEthItemId, 'PERFECT_UNIQUES_TRACKER', $event)" 
                          @mouseleave="destroyItemTooltip" @mousemove="moveItemTooltip">
                          <template v-if="row.ethCount > 0">
                            <span style="color:#0080fe;font-size:0.8rem;text-decoration:underline;cursor:pointer;">See Item</span>
                          </template>
                        </td>
                        <td style="border-right:0px" 
                          @click="createItemTooltip(row.bestItemId, 'PERFECT_UNIQUES_TRACKER', $event)" 
                          @mouseenter="createItemTooltip(row.bestItemId, 'PERFECT_UNIQUES_TRACKER', $event)" 
                          @mouseleave="destroyItemTooltip" @mousemove="moveItemTooltip">
                          <template v-if="row.nonEthCount > 0">{{ formatPercentage(row.maxPerfection) }} </template>
                        </td>
                        <td style="border-left:0px;" 
                          @click="createItemTooltip(row.bestItemId, 'PERFECT_UNIQUES_TRACKER', $event)"
                          @mouseenter="createItemTooltip(row.bestItemId, 'PERFECT_UNIQUES_TRACKER', $event)" 
                          @mouseleave="destroyItemTooltip" @mousemove="moveItemTooltip">
                          <template v-if="row.nonEthCount > 0">
                            <span style="color:#0080fe;font-size:0.8rem;text-decoration:underline;cursor:pointer;">See Item</span>
                          </template>
                        </td>
                        <td>{{ row.perfectEthCount.toLocaleString() }}</td>
                        <td>{{ row.perfectCount.toLocaleString() }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </template>
</template>

<style scoped>

table.itemGrid thead th {
  z-index: 2;
  position: sticky;
  top: -1px;
  box-shadow: inset 0 -1px 0 #ccc; 
}

table.itemGrid {
  border-collapse: collapse;
}
table.itemGrid td {
  background-color: #222;
  color: white;
  text-align: right;
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
