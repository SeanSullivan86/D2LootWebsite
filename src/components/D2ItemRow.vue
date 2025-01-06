<script setup lang="ts">

import { ref, computed } from 'vue'
import { D2Item, D2TopNItem } from '../model/D2Item'
const props = defineProps<{
  item: any
}>()

const data = computed<D2TopNItem>(() => {
  return props.item
})

const itemDescriptionElements = computed(() => {
  return data.value.item.description.toUpperCase().split(',').reverse()
    .filter(x => x.trim() != "")
})

const fixedName = computed(() => {
    if (data.value.item.quality == "RARE") return data.value.item.itemTypeName.toUpperCase();
    return data.value.item.name.toUpperCase().split(",").reverse().join(" ");
  return 
})

const nameCssClass = computed(() => {
      if (data.value.item.quality == 'RARE') return 'yellow';
      return 'black';
})

</script>

<template>
  <tr>
    <td class="item-score-cell">{{ data.score }}</td>
    <td :class='[nameCssClass, "item-name-cell"]'>{{ fixedName }}</td>
    <td>
        <template v-if="data.item.ethereal">
          <span class="ethereal-tag">ETHEREAL</span>
        </template>
        <template v-if="data.item.sockets > 0">
          <span class="sockets-tag">{{data.item.sockets}} socket<template v-if="data.item.sockets > 1">s</template></span>
        </template>
        <template v-for="descriptionElement in itemDescriptionElements">
          <span class="blue item-description-element">{{ descriptionElement }}</span>
        </template>
    </td>
  </tr>
</template>

<style scoped>


table.d2-item-table td.item-score-cell {
    text-align: center;
}

table.d2-item-table td.item-name-cell {
    text-align: center;
    white-space: nowrap;
}

table.d2-item-table td.yellow {
    color: #ffff00;
    font-weight: bold;
}

.item-description-element {
    
}

.item-description-element:not(:last-of-type) {
    padding-right: 4px;
    margin-right: 4px;
    border-right: 2px solid #444;
}

.ethereal-tag {
    background-color: #444;
    color: #888;
    margin: 1px 6px 1px 0px;
    padding: 0px 4px;
    border-radius: 3px;
    font-weight: bold;
}

.sockets-tag {
    background-color: #444;
    color: #888;
    margin: 1px 6px 1px 0px;
    padding: 0px 4px;
    border-radius: 3px;
    font-weight: bold;
}



</style>
