<script setup lang="ts">
import { ref, computed, onRenderTriggered, watch } from 'vue'
import { arraySum, snapshotData, createItemTooltip, moveItemTooltip, destroyItemTooltip } from '../app-state'


const props = defineProps<{
  snapshotId: string,
  dropContext: string
}>()


const staffmodFrequencies = ref<any[]>([])

watch(
  [() => props.snapshotId, () => props.dropContext],
  ([newSnapshotId, newDropContext], [oldSnapshotId, oldDropContext]) => {
    const consumerSnapshot = snapshotData.dropContexts[props.dropContext].consumersById["STAFFMOD_TRACKER"]
    let skillNamesById = consumerSnapshot.skillNamesById;

    let x = [];
    for (const [key, value] of Object.entries(consumerSnapshot.countsBySkillId)) {
      x.push({ skillName : skillNamesById[key], frequency : Number(value)})
    }

    x.sort((a,b) => a.frequency - b.frequency);
    staffmodFrequencies.value = x;
  }, { immediate: true }
);  


</script>

<template>

    <div class="text-description" style="margin-bottom:8px;">
        This bug is more widely known than the others, but I'm including it here just to demonstrate how
        rare the "illegal" +Skill modifiers are. Barbarian Helms can spawn with bonuses to individual
        Barbarian skills, but some of the skills are configured to be not allowed. 
        <br /><br />
        The game's code randomly selects a Barbarian skill and sees if it's a legal one. If not, it
        selects another random skill. If 6 attempts all fail that way, the game gives up and lets 
        the chosen skill be added to the them. This bug was apparently fixed in D2R.
        <br /><br />
        The table below shows how frequent all of the individual skill bonuses are. Note how
        comparitively rare the Barbarian combat skills are, due to them being "illegal" still
        possible due to this coding bug / quirk. The same bug also applies to the Holy Shield skill
        showing up as a bonus on Scepters. Note: some skills that can show up as bonuses on items 
        don't show up at all in this table because these are all high ilvl items, so they won't 
        generate with low-level skills.
    </div>
    
    <template v-if="staffmodFrequencies.length > 0">
        <table class="itemGrid">
            <thead>
                <tr><th>Skill</th>
                    <th>Item Count with bonus to that skill</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="freq in staffmodFrequencies">
                    <tr>
                        <td>{{ freq.skillName }}</td>
                        <td>{{ freq.frequency.toLocaleString() }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    

    </template>
    <div class="text-description">
        <br />
        Even less likely is for one of these items to have MULTIPLE "illegal" skills added to it.
        The table below shows the items with the most combined "illegal" +skills on them.
        <br /><br />
    </div>

    <TopN :drop-context="dropContext!" :snapshot-id="snapshotId!" consumer-id="ILLEGAL_BARB_STAFFMODS" />
 

</template>

<style scoped>
table.itemGrid {
  border-collapse: collapse;
}
table.itemGrid td {
  background-color: #222;
  color: white;
  text-align: right;
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
