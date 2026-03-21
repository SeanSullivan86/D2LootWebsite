import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import {
    ModuleRegistry,
    NumberAxisModule,
    ScatterSeriesModule,
} from 'ag-charts-community';

ModuleRegistry.registerModules([
    NumberAxisModule,
    ScatterSeriesModule,
]);

createApp(App).mount('#app')
