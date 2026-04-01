<script setup lang="ts">
import { ref, watch } from 'vue'
import { snapshotData } from '../app-state'
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

    let scoreType = "UNKNOWN";
    if (newConsumerId.includes("|DPS|")) scoreType = "DPS";
    if (newConsumerId.includes("|MAX_DMG|")) scoreType = "Max Damage";

    const consumerSnapshot = snapshotData.dropContexts[newDropContext].consumersById[newConsumerId];

    const allCategories = Object.keys(consumerSnapshot.categories);
    let scoreObjects:any = {};
    for (const [category, categoryObj] of Object.entries(consumerSnapshot.categories)) {
      for (const [score, freq] of Object.entries((categoryObj as any).scoreDistribution as any)) {
        let scoreObject:any = null;
        let floorScore = Math.floor(Number(score)/25)*25;
        if (scoreObjects[floorScore.toString()] == undefined) {
          scoreObject = { score: Number(floorScore), total: 0 };
          scoreObjects[floorScore.toString()] = scoreObject;
        } else {
          scoreObject = scoreObjects[floorScore.toString()];
        }
        scoreObject[category] = (scoreObject[category] ?? 0) + Number(freq);
        scoreObject.total += Number(freq);
      }
    }

    let chartData:any[] = Object.values(scoreObjects);
    chartData.sort((a,b) => a.score - b.score);

    const chartSeries:any[] = [];
    //allCategories.forEach(category => { chartSeries.push({ type: "area", xKey: "score", yKey: category, stacked: true, normalizedTo: 1 }) });
    allCategories.forEach(category => { chartSeries.push({ type: "line", xKey: "score", yKey: category }) });

    chartOptions.value = {
      data: chartData,
      title: {
        text: scoreType + " Distribution", spacing: 10
      },
      legend: {
        position: 'bottom', spacing: 5, maxHeight: 150
      },
      tooltip: {
        mode: 'shared'
      },
      padding: {
        left: 5, bottom: 5, top: 5, right: 5
      },
      axes: {
        x: {
            type: 'number',
            // min: 0, max: 13000,
            // interval: { step: 100 },
            title: { text: scoreType, spacing: 2 },
            label: {
              formatter: function (params) {
                return (params.value as number).toLocaleString()
              }
            }
        },
        y: {
            type: 'log',
            base: 10,
            title: { text: 'Item Count', spacing: 2 },
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

    <template v-if="chartOptions != null">
        <ag-charts :options="chartOptions" style="height: 500px;"> </ag-charts>
    </template>
    

</template>

<style scoped>


</style>
