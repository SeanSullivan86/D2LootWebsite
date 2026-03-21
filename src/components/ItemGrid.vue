<script setup lang="ts">
import { ref, computed, onRenderTriggered, watch } from 'vue'
import { itemCache, snapshotData, arraySum } from '../app-state'
import { D2TopNItem } from '../model/D2Item'

const props = defineProps<{
  snapshotId: string,
  dropContext: string,
  consumerId: string
}>()

interface ItemGridRow {
    rowName:string
    counts:number[]
}

const rows = ref<ItemGridRow[]>([])
const rowCount = ref<number>(0)
const rowTotals = ref<number[]>([])

const columnNames = ref<string[]>([])    
const columnCount = ref<number>(0)
const sortColumn = ref<number>(-1)
const columnTotals = ref<number[]>([])

// input
// rowValues
// columnValues
// counts (matrix)

watch(
  [() => props.snapshotId, () => props.dropContext, () => props.consumerId],
  ([newSnapshotId, newDropContext, newConsumerId], [oldSnapshotId, oldDropContext, oldConsumerId]) => {
    const consumerSnapshot = snapshotData.dropContexts[props.dropContext].consumersById[props.consumerId]
    console.log(props.consumerId)
    console.log(newConsumerId)
    console.log(consumerSnapshot)

    rowCount.value = consumerSnapshot.rowValues.length;
    columnCount.value = consumerSnapshot.columnValues.length;
    columnNames.value = [...consumerSnapshot.columnValues]

    let newRows:ItemGridRow[] = []

    for (const [index, rowName] of consumerSnapshot.rowValues.entries()) {
      newRows.push({
        rowName: rowName,
        counts: [...consumerSnapshot.counts[index]]
      })
    }
    

    newRows.sort((a,b) => {
        if (sortColumn.value == -1) {
            return arraySum(a.counts) - arraySum(b.counts);
        }
        return a.counts[sortColumn.value] - b.counts[sortColumn.value];
    })

    let newRowTotals:number[] = []
    for (const [index, row] of newRows.entries()) {
        newRowTotals.push(arraySum(row.counts))
    }

    let newColumnTotals:number[] = []
    for (let col = 0; col < columnCount.value; col++) {
        let sum = 0
        for (let row = 0; row < rowCount.value; row++) {
            sum += newRows[row].counts[col]
        }
        newColumnTotals.push(sum)
    }

    rowTotals.value = newRowTotals
    columnTotals.value = newColumnTotals

    rows.value = newRows;

  }, { immediate: true }
);



const sectionTitle = computed(() => {
  if (props.consumerId == "COUNTS_OF_SET_AND_UNIQUES_BY_NAME") {
    return "Unique and Set Item Counts"
  }
  return props.consumerId
})

const explanation = computed(() => {
  if (props.consumerId == "COUNTS_OF_SET_AND_UNIQUES_BY_NAME") {
    return ""
  }
  return ""
})

  

</script>

<template>
    <template v-if="rows.length > 0">
        <table class="itemGrid">
            <thead>
                <tr><th></th>
                    <template v-for="columnName in columnNames">
                        <th>{{ columnName }}</th>
                    </template>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(row, rowIndex) in rows">
                    <tr><th>{{ row.rowName }}</th>
                    
                        <template v-for="(count, columnIndex) in row.counts">
                            <td>{{ count }}</td>
                        </template>
                    
                        <td>{{ rowTotals[rowIndex] }}</td>
                    </tr>
                </template>
                <tr><th>Total</th>
                    <template v-for="(columnName, columnIndex) in columnNames">
                        <td>{{ columnTotals[columnIndex] }}</td>
                    </template>
                    <th></th>
                </tr>
            </tbody>
        </table>
    

    </template>
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
