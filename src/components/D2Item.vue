<script setup lang="ts">

import { ref, computed } from 'vue'
import { D2Item } from '../model/D2Item';

const props = defineProps<{
  item: D2Item
}>()

const fixedDescription = computed(() => {
  return props.item.description.toUpperCase().split(',').reverse();
})

const fixedName = computed(() => {
  return props.item.name.toUpperCase().split(',').reverse();
})

const nameCssClass = computed(() => {
      if (props.item.quality == 'RARE') return 'yellow';
      if (props.item.quality == 'SET') return 'set-green';
      if (props.item.quality == 'MAGIC') return 'blue';
      if (props.item.quality == 'UNIQUE') return 'gold';
      return 'white';
})

</script>

<template>
  <div class="itembox">
    <template v-for="line in fixedName">
      <div :class="nameCssClass">{{ line }}</div>
    </template>
    <template v-for="line in fixedDescription">
      <div class="blue">{{ line }}</div>
    </template>
  </div>
</template>

<style scoped>
.itembox {
  background-color: #222;
  padding: 10px;
}


</style>
