<script setup lang="ts">

import { ref, computed } from 'vue'

const props = defineProps<{
  item: any
}>()

const fixedDescription = computed(() => {
  return props.item.name.toUpperCase().split(',').reverse();
})

const fixedName = computed(() => {
  return props.item.description.toUpperCase().split(',').reverse();
})

const nameCssClass = computed(() => {
      if (props.item.quality == 'RARE') return 'yellow';
      return 'black';
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
