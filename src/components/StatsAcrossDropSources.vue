<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { type D2Item } from '../model/D2Item'
import { ITEM_QUALITY_NAMES } from '../model/globals'
import { itemCache, snapshotData, arraySum } from '../app-state'

interface StatsForDropContext {
    kills:number,
    uniqueItems:number,
    setItems:number,
    rareItems:number,
    magicItems:number,
    superiorItems:number,
    normalItems:number,
    lowQualityItems:number,
    totalItems:number,
}

const dropContextNames = ref<string[]>([])
const statsByDropContext = ref<Map<string,StatsForDropContext>>(new Map())


const props = defineProps<{
  snapshotId: string
}>()



watch(
  () => props.snapshotId,
  (newSnapshotId, oldSnapshotId) => {

    dropContextNames.value = Object.keys(snapshotData.dropContexts);
    statsByDropContext.value.clear();

    for (const [index, dropContextName] of dropContextNames.value.entries()) {
        let basicStats = snapshotData.dropContexts[dropContextName].consumersById["BASIC_STATS"];
        statsByDropContext.value.set(dropContextName, {
            kills: basicStats.totalIterations,
            uniqueItems: basicStats.countsByQuality[7],
            setItems: basicStats.countsByQuality[5],
            rareItems: basicStats.countsByQuality[6],
            magicItems: basicStats.countsByQuality[4],
            superiorItems: basicStats.countsByQuality[3],
            normalItems: basicStats.countsByQuality[2],
            lowQualityItems: basicStats.countsByQuality[1],
            totalItems: arraySum(basicStats.countsByQuality)
        });
    }
  }, { immediate: true }
);

</script>

<template>
  
  <template v-if="dropContextNames.length > 0">
    
    <table class="basicStatsTable" style="margin-left: 8px;">
      <thead>
        <tr>
          <th></th>
          <template v-for="dropContextName in dropContextNames">
            <th>{{ dropContextName }}</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Kills</td>
          <template v-for="dropContextName in dropContextNames">
            <td>{{ statsByDropContext.get(dropContextName)!.kills.toLocaleString() }}</td>
          </template>
        </tr>
        <tr>
          <td>Unique Items</td>
          <template v-for="dropContextName in dropContextNames">
            <td>{{ statsByDropContext.get(dropContextName)!.uniqueItems.toLocaleString() }}</td>
          </template>
        </tr>
        <tr>
          <td>Set Items</td>
          <template v-for="dropContextName in dropContextNames">
            <td>{{ statsByDropContext.get(dropContextName)!.setItems.toLocaleString() }}</td>
          </template>
        </tr>        
        <tr>
          <td>Rare Items</td>
          <template v-for="dropContextName in dropContextNames">
            <td>{{ statsByDropContext.get(dropContextName)!.rareItems.toLocaleString() }}</td>
          </template>
        </tr>        
        <tr>
          <td>Magic Items</td>
          <template v-for="dropContextName in dropContextNames">
            <td>{{ statsByDropContext.get(dropContextName)!.magicItems.toLocaleString() }}</td>
          </template>
        </tr>
        <tr>
          <td>Superior Items</td>
          <template v-for="dropContextName in dropContextNames">
            <td>{{ statsByDropContext.get(dropContextName)!.superiorItems.toLocaleString() }}</td>
          </template>
        </tr>
        <tr>
          <td>Normal Items</td>
          <template v-for="dropContextName in dropContextNames">
            <td>{{ statsByDropContext.get(dropContextName)!.normalItems.toLocaleString() }}</td>
          </template>
        </tr>
        <tr>
          <td>Low-Quality Items</td>
          <template v-for="dropContextName in dropContextNames">
            <td>{{ statsByDropContext.get(dropContextName)!.lowQualityItems.toLocaleString() }}</td>
          </template>
        </tr>
        <tr>
          <td>Total Items</td>
          <template v-for="dropContextName in dropContextNames">
            <td>{{ statsByDropContext.get(dropContextName)!.totalItems.toLocaleString() }}</td>
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
  text-align: right;
}

.basicStatsTable th {
  border: 1px solid #888;
  padding: 2px 5px;
}


</style>
