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
    const consumerSnapshot = snapshotData.dropContexts[props.dropContext].consumersById["MAGIC_ITEMS"]

    let n = consumerSnapshot.categories.length;
    let newRows = [];
    
    for(let i = 0; i < n; i++) {
        newRows.push({
            name : consumerSnapshot.categories[i],
            count : consumerSnapshot.counts[i][0],
            perfectCount : consumerSnapshot.counts[i][1],
            itemId : consumerSnapshot.exampleItems[i][0],
            perfectItemId : consumerSnapshot.exampleItems[i][1]
        })
    }

    rows.value = newRows;

  }, { immediate: true }
);  


</script>

<template>

    <template v-if="rows.length > 0">
        <table class="itemGrid">
            <thead>
                <tr><th>Category</th>
                    <th>Count Found</th>
                    <th>Count Found (Perfect Stats)</th>
                    <th>Example Item</th>
                    <th>Perfect Item</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(row, rowIndex) in rows">
                    <tr><td>{{ row.name }}</td>
                        <td>{{ row.count ? row.count.toLocaleString() : "" }}</td>
                        <td>{{ row.perfectCount ? row.perfectCount.toLocaleString() : "" }}</td>
                        <template v-if="row.itemId != null">
                            <td style="text-align:center;text-decoration: underline; color:blue;" @mouseenter="createItemTooltip(row.itemId, 'MAGIC_ITEMS', $event)" @mouseleave="destroyItemTooltip" @mousemove="moveItemTooltip">
                                See Item
                            </td>
                        </template>
                        <template v-else>
                            <td></td>
                        </template>
                        <template v-if="row.perfectItemId != null">
                            <td style="text-align:center;text-decoration: underline;color:blue;" @mouseenter="createItemTooltip(row.perfectItemId, 'MAGIC_ITEMS', $event)" @mouseleave="destroyItemTooltip" @mousemove="moveItemTooltip">
                                See Item
                            </td>
                        </template>
                        <template v-else>
                            <td></td>
                        </template>
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
