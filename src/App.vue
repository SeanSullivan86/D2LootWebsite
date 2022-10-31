<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MenuNode from './components/MenuNode.vue'
import TopNItemsPanel from './components/TopNItemsPanel.vue'
import { handleWebsocketMessage, makeTopNItemsRequest, createStateForUseCase, menu, MenuTree, selectedPath, selectedCategory, 
  makeUseCaseAndCategoryNamesRequest, websocket, WebSocketWrapper } from './item-state'



interface MenuItem {
  useCase: string
  category: string
}



let nextId = 0


onMounted(() => {
  console.log("Start of onMounted hook in App.vue")
  
  let connection = new WebSocket('ws://localhost:8025/ws/loot')
  connection.onmessage = (event) => {
    console.log(event.data);
    handleWebsocketMessage(event.data);
  }
  connection.onopen = (event) => {
    console.log('Websocket connection opened')
    console.log(event)
    websocket.connection = connection
    makeUseCaseAndCategoryNamesRequest(connection!)
  }

  connection.onerror = (event) => {
    console.log('Websocket connection error')
    console.log(event)
  }
  

  /*
  const timer = setInterval(() => {
    let nodeId = String(Math.floor(Math.random() * 20) + 1)
    if (!items.value.has(nodeId)) {
      items.value.set(nodeId, [])
    }
    let rand = Math.random()
    let newVal = { content: 'SomeValue' + rand, score: rand, id: ++nextId }
    let vals = items.value.get(nodeId)

    if (vals.length == 5) {
      if (newVal.score > vals[4].score) {
        vals.push(newVal)
        vals.sort((a, b) => b.score - a.score)
        vals.pop()
      }
    } else {
      vals.push(newVal)
      vals.sort((a, b) => b.score - a.score)
    }
  }, 10000000) */
})


</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>
          <template v-for="treeNode in menu">
            <MenuNode
              :nodeData="treeNode"
              :selectedPath="selectedPath"
            />
          </template>
        </el-aside>
        <el-main>
          <TopNItemsPanel />
        </el-main>
      </el-container>
    </el-container>
  </div> 
</template>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
