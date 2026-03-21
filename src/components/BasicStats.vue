<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { type D2Item } from '../model/D2Item'
import { ITEM_QUALITY_NAMES } from '../model/globals'
import { itemCache, snapshotData } from '../app-state'

const recentItemsByQuality = ref<D2Item[]|null>(null)
const itemCountsByQuality = ref<number[]|null>(null)

const props = defineProps<{
  snapshotId: string,
  dropContext: string,
}>()

onMounted(() => {
  console.log("Start of onMounted hook in BasicStats")
})

watch(
  () => props.snapshotId,
  (newSnapshotId, oldSnapshotId) => {

    recentItemsByQuality.value = snapshotData.dropContexts[props.dropContext].consumersById["BASIC_STATS"].mostRecentItemIdsByQuality.map((itemId: number) => {
      if (itemId == null) return null
      return itemCache.get(itemId);
    })
  itemCountsByQuality.value = snapshotData.dropContexts[props.dropContext].consumersById["BASIC_STATS"].countsByQuality;
  }, { immediate: true }
);

</script>

<template>
  
  <template v-if="itemCountsByQuality">
    
    <table class="basicStatsTable">
      <thead>
        <tr>
          <th>Quality</th>
          <template v-for="qualityId in [4,5,6,7]">
            <th>{{ ITEM_QUALITY_NAMES[qualityId] }}</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Latest Item</td>
          <template v-for="qualityId in [4,5,6,7]">
            <td valign="top">
              <template v-if="recentItemsByQuality![qualityId] != null">
                <D2Item :item="recentItemsByQuality![qualityId]" />
              </template>
            </td>  
          </template>
        </tr>
        <tr>
          <td>Item Count</td>
          <template v-for="qualityId in [4,5,6,7]">
            <td>
              {{ itemCountsByQuality[qualityId] }}
            </td>  
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
}

.basicStatsTable th {
  border: 1px solid #888;
  padding: 2px 5px;
}


</style>
