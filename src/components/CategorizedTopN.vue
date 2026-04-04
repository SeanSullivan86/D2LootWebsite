<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { itemCache, snapshotData, isNarrowWindow } from '../app-state'
import { D2TopNItem } from '../model/D2Item'
import { friendlyItemTypeTypeName } from '../model/globals'

const props = defineProps<{
  snapshotId: string,
  dropContext: string,
  consumerId: string
}>()


const selectedCategory = ref<string|null>(null)

const itemsByCategory = ref<Map<string,D2TopNItem[]>>(new Map())
const categories = ref<string[]>([])

const isRareWeapons = computed(() => {
  return props.consumerId.startsWith("RARE_WEAPONS|")
});

const isRareOrFoolsWeapons = computed(() => {
  return props.consumerId.startsWith("RARE_WEAPONS|") || props.consumerId.startsWith("FOOLS_WEAPON|")
});

const explanation = computed(() => {
  if (props.consumerId == "COLD_SORC_ORBS") {
    return "Sorceress Orbs grouped by item Quality. Points are given for generic Caster attributes, + to Cold Skills, Blizzard, Frozen Orb and Cold Mastery."
  } else if (props.consumerId == "FIRE_SORC_ORBS") {
    return "Sorceress Orbs grouped by item Quality. Points are given for generic Caster attributes, + to Fire Skills, Fire Ball, Meteor and Fire Mastery."
  } else if (props.consumerId == "LIGHTNING_SORC_ORBS") {
    return "Sorceress Orbs grouped by item Quality. Points are given for generic Caster attributes, + to Lightning Skills, Lightning, Chain Lightning, and Lightning Mastery."
  } else if (props.consumerId.startsWith("FOOLS_WEAPON|")) {
    return "The magic prefix \"Fool's\" is especially valuable to some characters because of the huge bonus to attack rating. This shows the highest damage Rare \"Fool's\" weapons, ranked by DPS. It also assumes any such weapon will get upgraded to Elite, socketed with Larzuk quest if not yet socketed, have a Zod rune added to it if necessary, and any remaining sockets filled with (+15% IAS, +40% ED) jewels. Yes, those runes and jewels are expensive, but these top-end weapons are significantly more rare, so it would make sense that someone finding one would upgrade it fully. I want to compare the items at their max potential, not how they originally dropped.";
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
          @click="updateSelectedCategory(category)">{{ isRareOrFoolsWeapons ? friendlyItemTypeTypeName(category) : category }}</span>
      </template>
    
    </div>

    <table class="d2-item-table">
      <template v-if="!isNarrowWindow">
        <thead> 
        <tr>
          <th>Score</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
        </thead>
      </template>
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
  background-color: #1b1b1b;
  color: white;
  text-align: left;
  border: 1px solid #888;
  padding: 2px;
}

table.d2-item-table th {
  background-color: #1b1b1b;
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
