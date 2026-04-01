<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { snapshotData, arraySum } from '../app-state'
import { uniqueItems } from '../model/globals';

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

    rowCount.value = consumerSnapshot.rowValues.length;
    columnCount.value = consumerSnapshot.columnValues.length;
    columnNames.value = [...consumerSnapshot.columnValues]

    let newRows:ItemGridRow[] = []

    for (const [index, rowName] of consumerSnapshot.rowValues.entries()) {
      newRows.push({
        rowName: rowHtml(rowName),
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

function rowHtml(rowName:string):string {
  if (props.consumerId == "COUNTS_OF_SET_AND_UNIQUES_BY_NAME") {
    if (rowName.includes(",")) { // Set item
      const parts = rowName.split(",");
      if (parts.length != 2) throw ("Unexpected rowName : " + rowName)
      return "<span class='set-green'>" + parts[1] + " (" + parts[0] + ")</span>";
    } else { // unique item
      const uniqueItem = uniqueItems.get(rowName)
      if (!uniqueItem) return rowName;
      return "<span class='gold'>" + rowName + " (" + uniqueItem.getItemType().name + ") [ L" + uniqueItem.qlvl + " ]</span>";
    }
  }
  if (rowName.endsWith(" Rune")) {
    return "<span class='orange'>" + rowName + "</span>"
  }
  return rowName;
}
  

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
                    <tr><th v-html="row.rowName"></th>
                    
                        <template v-for="(count, columnIndex) in row.counts">
                            <td>{{ count.toLocaleString() }}</td>
                        </template>
                    
                        <td>{{ rowTotals[rowIndex].toLocaleString() }}</td>
                    </tr>
                </template>
                <tr><th>Total</th>
                    <template v-for="(columnName, columnIndex) in columnNames">
                        <td>{{ columnTotals[columnIndex].toLocaleString() }}</td>
                    </template>
                    <th></th>
                </tr>
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
  /* border-spacing: 0; */
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
