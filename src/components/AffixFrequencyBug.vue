<script setup lang="ts">
import { ref, watch } from 'vue'
import { arraySum, snapshotData, isNarrowWindow } from '../app-state'


const props = defineProps<{
  snapshotId: string,
  dropContext: string
}>()


const itemCounts = ref<number[]>([])
const itemSum = ref<number>(0)

watch(
  [() => props.snapshotId, () => props.dropContext],
  ([newSnapshotId, newDropContext], [oldSnapshotId, oldDropContext]) => {
    const consumerSnapshot = snapshotData.dropContexts[props.dropContext].consumersById["RARE_ENHANCED_DAMAGE_WEAPONS"]

    itemCounts.value = (consumerSnapshot.counts.slice(4) as any[][]).map(x => x[0])
    itemSum.value = arraySum(itemCounts.value)

  }, { immediate: true }
);  


</script>

<template>

    <div class="text-description">
        Many online sources show the relative frequencies of the different prefixes and suffixes that
        can roll on magic and rare items. These frequencies were datamined from the game's config files
        and usually correctly represent what happens in the game.
        <br /><br />
        HOWEVER, the game's code has a bug that when it assembles the list of all the available
        affixes for a particular item, the very last affix in the list gets an extra 1 added to it's relative
        frequency. The order of this list assembled in memory is the same as the order in the datamined config
        files. For high-level rare weapons and rare armor, the last affixes in the config file are the special
        variants of the "Cruel" (+201-300% Enhanced Damage) and "Godly" (+101-200% Enhanced Damage) prefixes 
        that were added in a later version of LOD that are allowed to spawn on Rare items. The original Cruel
        and Godly prefixes could only spawn on magic items. So in a later patch, in order to make it possible
        for more powerful rare items to spawn, they created these additional Cruel/Godly suffixes and gave them
        a frequency of 1 (the lowest possible), and stuck them at the end of the config file. But, because of the
        bug where the last available affix for an item gets an extra 1 added to it's frequency, these items
        are actually twice as common as perhaps intended.
        <br /><br />
        The table below contains data drawn from rare weapon spawns that had over 50% enhanced damage, showing
        that the actual relative frequencies are impacted by this bug. Items with any +Attack Rating on them
        were excluded, to avoid cases where some of the Enhanced Damage on the rare weapon might have been
        coming from the Prefixes like "Master's", which grants bonuses to both Enhanced Damage and Attack Rating,
        and can spawn on the same item that has one of the straight Enhanced Damage bonuses.
    </div>
    
    <template v-if="itemCounts.length > 0">
        <table class="itemGrid">
            <thead>
                <tr><th>Item Prefix</th>
                    <th>Frequency (according to online sources and the game's config files)</th>
                    <th>Frequency (after accounting for the bug)</th>
                    <th>Item Counts and Ratios Actually Found</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="white-space:nowrap">Massive<template v-if="isNarrowWindow"><br /></template> (+ 51-65% dmg)</td>
                    <td>7</td>
                    <td>7</td>
                    <td> {{ itemCounts[0].toLocaleString() }} 
                    <br /><span class="text-description">[{{ (itemCounts[0] / itemSum * 28).toFixed(3) }} / 28]</span></td>
                </tr>
                <tr>
                    <td style="white-space:nowrap">Savage<template v-if="isNarrowWindow"><br /></template> (+ 66-80% dmg)</td>
                    <td>7</td>
                    <td>7</td>
                    <td> {{ itemCounts[1].toLocaleString() }} 
                    <br /><span class="text-description">[{{ (itemCounts[1] / itemSum * 28).toFixed(3) }} / 28]</span></td>
                </tr>
                <tr>
                    <td style="white-space:nowrap">Merciless<template v-if="isNarrowWindow"><br /></template> (+ 81-100% dmg)</td>
                    <td>6</td>
                    <td>6</td>
                    <td> {{ itemCounts[2].toLocaleString() }} 
                    <br /><span class="text-description">[{{ (itemCounts[2] / itemSum * 28).toFixed(3) }} / 28]</span></td>
                </tr>
                <tr>
                    <td style="white-space:nowrap">Ferocious<template v-if="isNarrowWindow"><br /></template> (+ 101-200% dmg)</td>
                    <td>6</td>
                    <td>6</td>
                    <td> {{ itemCounts[3].toLocaleString() }} 
                    <br /><span class="text-description">[{{ (itemCounts[3] / itemSum * 28).toFixed(3) }} / 28]</span></td>
                </tr>
                <tr>
                    <td style="white-space:nowrap">Cruel<template v-if="isNarrowWindow"><br /></template> (+ 201-300% dmg)</td>
                    <td style="color:red;font-weight:bold">1</td>
                    <td style="color:green;font-weight:bold">2</td>
                    <td> {{ itemCounts[4].toLocaleString() }} 
                    <br /><span class="text-description">[{{ (itemCounts[4] / itemSum * 28).toFixed(3) }} / 28]</span></td>
                </tr>
            </tbody>
        </table>
    

    </template>

</template>

<style scoped>
table.itemGrid {
  border-collapse: collapse;
}
table.itemGrid td {
  background-color: #222;
  color: white;
  text-align: center;
  border: 1px solid #888;
  padding: 2px;
}

table.itemGrid th {
  background-color: #222;
  color: white;
  border: 1px solid #888;
  padding: 2px 5px;
}


</style>
