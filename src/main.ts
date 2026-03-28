import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import {
    ModuleRegistry,
    NumberAxisModule,
    ScatterSeriesModule,
    LogAxisModule,
    LegendModule,
    LineSeriesModule
} from 'ag-charts-community';

ModuleRegistry.registerModules([
    NumberAxisModule,
    ScatterSeriesModule,
    LogAxisModule,
    LegendModule,
    LineSeriesModule
]);

createApp(App).mount('#app')
