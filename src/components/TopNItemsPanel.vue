<script setup lang="ts">
import { ref, computed, onRenderTriggered } from 'vue'
import { D2ItemData, D2TopNItem, ItemCategoryState, topNItemsByUseCase, categoriesByUseCase, updateSelectedCategory, selectedPath, selectedCategory } from '../item-state'


const items = computed<D2TopNItem[]>(() => {

/*  console.log("Computed Items")
  console.log(selectedPath.value)
  console.log(selectedCategory.value)
  console.log(topNItemsByUseCase.value) */
  if (selectedPath.value != null && selectedCategory.value != null && topNItemsByUseCase.value.has(selectedPath.value)) {
    const itemsForUseCase: Map<string, ItemCategoryState> = topNItemsByUseCase.value.get(selectedPath.value)!
    if (itemsForUseCase.has(selectedCategory.value)) {
      return itemsForUseCase.get(selectedCategory.value)!.items
    } 
  }
  return []
})

const categories = computed<string[]>(() => {
  if (selectedPath.value != null && categoriesByUseCase.value.has(selectedPath.value)) {
    console.log("Computed categories : " + categoriesByUseCase.value.get(selectedPath.value)!);
    return categoriesByUseCase.value.get(selectedPath.value)!
  }
   /* console.log("Computed Categories Empty")
  console.log(selectedPath.value)
  console.log(categoriesByUseCase.value)
  console.log(categoriesByUseCase.value.keys) */
  return []
})

onRenderTriggered((event) => {
  console.log('Render TopNItemsPanel...')
  console.log(event)
})
</script>

<template>
  
  <div>{{ selectedPath }} | {{ selectedCategory }}</div>

  <div class="category-list" v-if="categories.length > 0">
    Categories : 
    <template v-for="category in categories">
      <span class="category-link" @click="updateSelectedCategory(category)">{{ category }}</span>
    </template>
  
  </div>

  <table class="d2-item-table">
    <tr>
      <th>Score</th>
      <th>Name</th>
      <th>Description</th>
    </tr>
    <template v-for="item in items" :key="item.id">
      <D2ItemRow :item="item" />
    </template>
  </table>

</template>

<style scoped>

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
  border: 1px dotted #444;
  color: #444;
}

.category-list {
  text-align: left;
}

</style>
