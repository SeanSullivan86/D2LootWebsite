<script setup lang="ts">
import { ref, computed } from 'vue'


const props = defineProps<{
  title: string
}>()

const isOpen = ref<boolean>(false)

const toggleButtonContent = computed(() => {
  if (isOpen.value === false) return "+";
  return "-";
})

</script>

<template>
  
    <div class="collapsibleSection">
        <div @click="isOpen = !isOpen" class="section-header">
            <span class="toggle-icon">{{ toggleButtonContent }}</span>
            <div class="sectionTitle" v-html="title"></div>
        </div>
        <div v-if="isOpen">
            <slot></slot>
        </div>
    </div>

</template>

<style scoped>



.collapsibleSection {
  margin: 8px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #888;
}

.sectionTitle {
  display:inline;
  font-size: 1.8rem;
  font-weight: bold;
  color: darkred;
}

.section-header {
    display: block;
    padding: 0px;
    cursor: pointer;
    width: 100%;
    text-align: left;
    font-size: 1rem;
    margin-bottom: 8px;
}

.toggle-icon {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border: 3px solid red;
    color:red;
    border-radius: 50%;
    text-align: center;
    line-height: 0.75;
    font-size: 1.8rem;
    font-weight: bold;
    font-family: monospace;
    margin-right: 12px;
}

</style>
