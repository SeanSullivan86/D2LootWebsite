<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MenuNode from './components/MenuNode.vue'
import TopNItemsPanel from './components/TopNItemsPanel.vue'
import { handleWebsocketMessage, makeTopNItemsRequest, createStateForUseCase, menu, MenuTree, selectedPath, selectedCategory, 
  makeUseCaseAndCategoryNamesRequest, websocket, WebSocketWrapper, sendAllQueuedUpWebsocketRequests } from './item-state'
import BasicStats from './components/BasicStats.vue'



interface MenuItem {
  useCase: string
  category: string
}



let nextId = 0


onMounted(() => {
  console.log("Start of onMounted hook in App.vue")
  
  //let connection = new WebSocket('ws://localhost:8025/ws/loot')
  let connection = new WebSocket('ws://76.146.194.243:8025/ws/loot')

  connection.onmessage = (event) => {
    console.log(event.data);
    handleWebsocketMessage(event.data);
  }
  connection.onopen = (event) => {
    console.log('Websocket connection opened')
    console.log(event)
    websocket.connection = connection
    sendAllQueuedUpWebsocketRequests();
    //makeUseCaseAndCategoryNamesRequest(connection!)
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

    <BasicStats />
  
    <UseCase useCase="Rare Weapons|1 or 2 handed : Highest DPS" />

    <UseCase useCase="Tri-Res Boots" />

    <UseCase useCase="Three Socket Magic Circlets" />

    <UseCase useCase="Illegal Barb Staffmods" />

    <UseCase useCase="Rare Melee Jewels" />

    <UseCase useCase="Wind Druid Pelts" />

    <UseCase useCase="Magic Skill/IAS Javelins" />

    <ItemGrid gridName="Item Counts by Item Type and Quality" />

    <ItemGrid gridName="Counts of Set and Unique Items by Name" />


  <!--
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
  </div> -->
</template>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 10px;
}
</style>
