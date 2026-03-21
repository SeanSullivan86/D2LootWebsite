<script setup lang="ts">
import { ref, computed, onRenderTriggered, watch } from 'vue'
import { arraySum, snapshotData, createItemTooltip, moveItemTooltip, destroyItemTooltip } from '../app-state'
import type { AgChartOptions } from "ag-charts-types";
import { AgCharts } from "ag-charts-vue3";

const props = defineProps<{
  snapshotId: string
}>()

const chartOptions = ref<AgChartOptions|null>(null)


watch(
  [() => props.snapshotId],
  ([newSnapshotId], [oldSnapshotId]) => {
    const consumerSnapshot = snapshotData.dropContexts["HELL_BAAL"].consumersById["GOLD"]
    let chartData = [];
    for (const [key, value] of Object.entries(consumerSnapshot.stats.scoreDistribution)) {
      chartData.push({ goldAmount : Number(key), frequency : Number(value)})
    }

    chartOptions.value = {
      data: chartData,
      title: {
        text: "Frequency of different Gold Pile Sizes (Hell Baal, +160% Gold Find)",
      },
      axes: {
        x: {
            type: 'number',
            min: 0, max: 13000,
            interval: { step: 2000 },
            title: { text: 'Gold Pile Size' },
            label: {
              formatter: function (params) {
                return (params.value as number).toLocaleString()
              }
            }
        },
        y: {
            type: 'number',
            title: { text: 'Times Occurred' },
            label: {
              formatter: function (params) {
                return (params.value as number).toLocaleString()
              },
            }
        },
    },
      series: [{ type: "scatter", xKey: "goldAmount", yKey: "frequency" }],
    }

  }, { immediate: true }
);  


</script>

<template>

    <div class="text-description">
        Increased Gold Find does not always work properly on Act Bosses. In particular,
        if the gold is the 6th item that a monster drops, the player's Gold Find is not applied.
        
        This bug would apply to any monster than can drop 6 items, but Act Bosses are the only 
        ones that can, in the unmodded game.
        <br /><br />
        The chart below shows the frequency of different size gold piles dropped by Hell
        Baal. The character killing Baal had +160% Gold Find. Normally, Baal can drop
        gold piles that are multiples of 8, between 792 and 4744. The chart shows the effects
        of this bug, where USUALLY the Gold Find is applied, resuluting in gold piles with 
        sizes betwewen 2059 and 12334. But occassionally you still still gold piles uniformly
        distributed from the original 792-4744 range.
    </div>
    <template v-if="chartOptions != null">
        <ag-charts :options="chartOptions"> </ag-charts>
    </template>
    

</template>

<style scoped>
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
