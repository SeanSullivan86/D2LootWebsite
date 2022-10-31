<script setup lang="ts">
import { ref, computed } from 'vue'
import { updateSelectedUseCase } from '../item-state'

const emit = defineEmits(['set-selected-menu-node-id'])

interface MenuTree {
    nodeName: string
    children?: MenuTree[]
    path?:string,
}

const props = defineProps<{
  nodeData: MenuTree
  selectedPath: string | null
}>()

const isSelected = computed(() => {
  return props.nodeData.path == props.selectedPath
})

const isLeaf = computed(() => {
  return props.nodeData.children === undefined
})



function setSelectedIfLeaf() {
  if (isLeaf.value) {
    updateSelectedUseCase(props.nodeData.path!)
  }
}
</script>

<template>
  <div class="menu-node">
    <div :class="['menu-node-title', { 'selected-menu-node': isSelected }]" @click="setSelectedIfLeaf">
      {{ nodeData.nodeName }}
    </div>

    <div class="child-menu-nodes" v-if="!isLeaf">
      <template v-for="child in nodeData.children">
        <MenuNode
          :nodeData="child"
          :selectedPath="selectedPath"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.menu-node {
}

.child-menu-nodes {
  margin-left: 10px;
}

.menu-node-title {
  padding: 1px 3px;
  text-align: left;
  border: 1px solid red;
}

.selected-menu-node {
  background: #ccc;
}
</style>
