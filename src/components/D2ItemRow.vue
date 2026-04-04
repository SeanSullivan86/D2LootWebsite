<script setup lang="ts">

import { computed } from 'vue'
import { D2TopNItem } from '../model/D2Item'
import { itemTypes } from '../model/globals'
import { createItemTooltip, moveItemTooltip, destroyItemTooltip, isNarrowWindow } from '../app-state'

const props = defineProps<{
  consumerId: string,
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
    if (data.value.item.quality == "RARE") {
      return itemTypes.get(data.value.item.itemTypeCode)!.name
    } 
    return data.value.item.name.toUpperCase().split(",").reverse().join(" ");
  return 
})

const nameCssClass = computed(() => {
      if (data.value.item.quality == 'RARE') return 'yellow';
      if (data.value.item.quality == 'MAGIC') return 'blue';
      return 'black';
})



</script>

<template>
  <tr @mouseenter="createItemTooltip(data.item.id, props.consumerId, $event)"
      @click="createItemTooltip(data.item.id, props.consumerId, $event)" @mouseleave="destroyItemTooltip" @mousemove="moveItemTooltip">
    <template v-if="!isNarrowWindow">
      <td class="item-score-cell">{{ data.score }}</td>
      <td :class='[nameCssClass, "item-name-cell"]'>{{ fixedName }}</td>
    </template>
    <td>
        <template v-if="isNarrowWindow">
          {{ data.score }} | <span :class="nameCssClass">{{ fixedName }}</span> | 
        </template>
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

table.d2-item-table td.blue {
    color: #4169e1;
}

table.d2-item-table tr {
  cursor:pointer;
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
