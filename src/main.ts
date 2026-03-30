import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import {
    ModuleRegistry,
    NumberAxisModule,
    ScatterSeriesModule,
    LogAxisModule,
    LegendModule,
    LineSeriesModule,
    AreaSeriesModule
} from 'ag-charts-community';

import AffixFrequencyBug from './components/AffixFrequencyBug.vue';
import AssortedMagicItems from './components/AssortedMagicItems.vue';
import CategorizedTopN from './components/CategorizedTopN.vue';
import D2Item from './components/D2Item.vue';
import D2ItemRow from './components/D2ItemRow.vue';
import GoldBug from './components/GoldBug.vue';
import IllegalStaffmodsBug from './components/IllegalStaffmodsBug.vue';
import ItemGrid from './components/ItemGrid.vue';
import ItemTooltip from './components/ItemTooltip.vue';
import PerfectUniques from './components/PerfectUniques.vue';
import StatsAcrossDropSources from './components/StatsAcrossDropSources.vue';
import TogglingSectionHeader from './components/TogglingSectionHeader.vue';
import TopN from './components/TopN.vue';
import WeaponScoresChart from './components/WeaponScoresChart.vue';

ModuleRegistry.registerModules([
    NumberAxisModule,
    ScatterSeriesModule,
    LogAxisModule,
    LegendModule,
    LineSeriesModule,
    AreaSeriesModule
]);

const app = createApp(App);

app.component('AffixFrequencyBug', AffixFrequencyBug);
app.component('AssortedMagicItems', AssortedMagicItems);
app.component('CategorizedTopN', CategorizedTopN);
app.component('D2Item', D2Item);
app.component('D2ItemRow', D2ItemRow);
app.component('GoldBug', GoldBug);
app.component('IllegalStaffmodsBug', IllegalStaffmodsBug);
app.component('ItemGrid', ItemGrid);
app.component('ItemTooltip', ItemTooltip);
app.component('PerfectUniques', PerfectUniques);
app.component('StatsAcrossDropSources', StatsAcrossDropSources);
app.component('TogglingSectionHeader', TogglingSectionHeader);
app.component('TopN', TopN);
app.component('WeaponScoresChart', WeaponScoresChart);

app.mount('#app');
