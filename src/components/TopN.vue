<script setup lang="ts">
import { ref, computed, onRenderTriggered, watch } from 'vue'
import { itemCache, snapshotData } from '../app-state'
import { D2TopNItem } from '../model/D2Item'

const props = defineProps<{
  snapshotId: string,
  dropContext: string,
  consumerId: string
}>()

const items = ref<D2TopNItem[]>([])

const explanation = computed(() => {
  if (props.consumerId.startsWith("RARE_CASTER_")) {
    return "Ranked/Scored by assigning weights to the main attributes that are typically good for caster gear"
  } else if (props.consumerId == "TRI_RES_BOOTS") {
    return "Score is simply the sum of the resistances on the boots. See the other 'Rare Boots' categories to see some boots that have good resistances along with other good stats. This list here is just for maxing resistance only."
  }
  return ""
})


watch(
  [() => props.snapshotId, () => props.dropContext, () => props.consumerId],
  ([newSnapshotId, newDropContext, newConsumerId], [oldSnapshotId, oldDropContext, oldConsumerId]) => {

    const consumerSnapshot = snapshotData.dropContexts[props.dropContext].consumersById[props.consumerId]

    let n = consumerSnapshot.stats.topItemIds.length;

    let newItems:D2TopNItem[] = [];
    for (let i = 0; i < n; i++) {
        newItems.push({
            item: itemCache.get(consumerSnapshot.stats.topItemIds[i])!,
            score: consumerSnapshot.stats.topScores[i]
        })
    }

    items.value = newItems;
  }, { immediate: true }
);

</script>

<template>
  
    <template v-if="explanation != ''">
      <div class="explanation">{{ explanation }}</div>
    </template>

    <table class="d2-item-table">
      <thead>
      <tr>
        <th>Score</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <template v-for="item in items" :key="item.item.id">
        <D2ItemRow :item="item" :consumer-id="props.consumerId" />
      </template>
      </tbody>
    </table>

</template>

<style scoped>

.explanation {
  color: #888;
}

table.d2-item-table {
  border-collapse: collapse;
}
table.d2-item-table :deep(td) {
  background-color: #222;
  color: white;
  text-align: left;
  border: 1px solid #888;
  padding: 2px;
}

table.d2-item-table th {
  background-color: #222;
  color: white;
  border: 1px solid #888;
  padding: 2px 5px;
}

</style>
