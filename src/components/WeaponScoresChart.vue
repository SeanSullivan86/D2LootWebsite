<script setup lang="ts">
import { ref, computed, onRenderTriggered, watch } from 'vue'
import { arraySum, snapshotData, createItemTooltip, moveItemTooltip, destroyItemTooltip } from '../app-state'
import type { AgChartOptions } from "ag-charts-types";
import { AgCharts } from "ag-charts-vue3";

const props = defineProps<{
  snapshotId: string,
  dropContext: string,
  consumerId: string
}>()

const chartOptions = ref<AgChartOptions|null>(null)


watch(
  [() => props.snapshotId, () => props.dropContext, () => props.consumerId],
  ([newSnapshotId, newDropContext, newConsumerId], [oldSnapshotId, oldDropContext, oldConsumerId]) => {

    const consumerSnapshot = snapshotData.dropContexts[newDropContext].consumersById[newConsumerId];

    const allCategories = Object.keys(consumerSnapshot.categories);
    let scoreObjects:any = {};
    for (const [category, categoryObj] of Object.entries(consumerSnapshot.categories)) {
      for (const [score, freq] of Object.entries((categoryObj as any).scoreDistribution as any)) {
        let scoreObject:any = null;
        if (scoreObjects[score] == undefined) {
          scoreObject = { score: Number(score), total: 0 };
          scoreObjects[score] = scoreObject;
        } else {
          scoreObject = scoreObjects[score];
        }
        scoreObject[category] = Number(freq);
        scoreObject.total += Number(freq);
      }
    }

    let chartData:any[] = Object.values(scoreObjects);
    chartData.sort((a,b) => a.score - b.score);

    const chartSeries:any[] = [];
    allCategories.forEach(category => { chartSeries.push({ type: "scatter", xKey: "score", yKey: category }) });

    console.log(chartSeries);
    chartOptions.value = {
      data: chartData,
      title: {
        text: "2-handed Rare Weapon Damage",
      },
      legend: {
        position: 'bottom', 
      },
      axes: {
        x: {
            type: 'number',
            // min: 0, max: 13000,
            // interval: { step: 2000 },
            title: { text: 'Max Damage' },
            label: {
              formatter: function (params) {
                return (params.value as number).toLocaleString()
              }
            }
        },
        y: {
            type: 'log',
            base: 10,
            title: { text: 'Times Occurred' },
            label: {
              formatter: function (params) {
                return (params.value as number).toLocaleString()
              }
            }
        },
    },
      series: chartSeries,
    }

  }, { immediate: true }
);  


</script>

<template>

    <div class="text-description">
        Weapon scores...
    </div>
    <template v-if="chartOptions != null">
        <ag-charts :options="chartOptions" style="height: 500px;"> </ag-charts>
    </template>
    

</template>

<style scoped>


</style>
