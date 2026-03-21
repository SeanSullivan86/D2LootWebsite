<script setup lang="ts">
import { ref, computed, onRenderTriggered, watch } from 'vue'
import { itemCache, snapshotData } from '../app-state'
import { D2TopNItem } from '../model/D2Item'

const props = defineProps<{
  snapshotId: string,
  dropContext: string,
  consumerId: string
}>()


const selectedCategory = ref<string|null>(null)

const itemsByCategory = ref<Map<string,D2TopNItem[]>>(new Map())
const categories = ref<string[]>([])

const isRareWeapons = computed(() => {
  return (props.consumerId.startsWith("RARE_WEAPONS|"))
});

const explanation = computed(() => {
  if (props.consumerId == "COLD_SORC_ORBS") {
    return "Sorceress Orbs grouped by item Quality. Points are given for generic Caster attributes, + to Cold Skills, Blizzard, Frozen Orb and Cold Mastery."
  } else if (props.consumerId == "FIRE_SORC_ORBS") {
    return "Sorceress Orbs grouped by item Quality. Points are given for generic Caster attributes, + to Fire Skills, Fire Ball, Meteor and Fire Mastery."
  } else if (props.consumerId == "LIGHTNING_SORC_ORBS") {
    return "Sorceress Orbs grouped by item Quality. Points are given for generic Caster attributes, + to Lightning Skills, Lightning, Chain Lightning, and Lightning Mastery."
  }
  return ""
})


watch(
  [() => props.snapshotId, () => props.dropContext, () => props.consumerId],
  ([newSnapshotId, newDropContext, newConsumerId], [oldSnapshotId, oldDropContext, oldConsumerId]) => {

    const consumerSnapshot = snapshotData.dropContexts[props.dropContext].consumersById[props.consumerId]

    categories.value = Object.keys(consumerSnapshot.categories)

    itemsByCategory.value.clear()

    for (const [index, category] of categories.value.entries()) {
      let catData = consumerSnapshot.categories[category]
      let n = catData.topItemIds.length
      let itemsInCategory:D2TopNItem[] = []
      for (let i = 0; i < n; i++) {
        itemsInCategory.push({
          item: itemCache.get(catData.topItemIds[i])!,
          score: catData.topScores[i]
        })
      }
      itemsByCategory.value.set(category, itemsInCategory)
    }

    selectedCategory.value = categories.value[0]

  }, { immediate: true }
);

function updateSelectedCategory(newCategory:string) {
  selectedCategory.value = newCategory
}

</script>

<template>
  
    <template v-if="explanation != ''">
      <div class="explanation">{{ explanation }}</div>
    </template>


    <div class="category-list" v-if="categories.length > 0">
      Categories : 
      <template v-for="category in categories">
        <span class="category-link" 
          :class="{ active: category == selectedCategory }"
          @click="updateSelectedCategory(category)">{{ category }}</span>
      </template>
    
    </div>

    <table class="d2-item-table">
      <thead> 
      <tr>
        <th>Score</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <template v-for="item in itemsByCategory.get(selectedCategory!)" :key="item.item.id">
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

.category-link {
  margin-right: 10px;
  margin-bottom: 2px;
  padding: 0px 3px;
  cursor: pointer;
  display: inline-block;
  border: 1px dotted #888;
  color: #888;
}

.category-link.active {
  color: white;
  border: 1px solid white;
}

.category-list {
  color: #888;
  text-align: left;
  border-top: 1px solid #ddd;
  padding: 5px;
  margin-top:5px;
}



</style>
