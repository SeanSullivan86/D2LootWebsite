<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { isNarrowWindow, itemCache, setSnapshotData } from './app-state'

const isLoaded = ref<number>(0)
const selectedDropContext = ref<string>("ALL")
const snapshotId = ref<string|null>(null)

onMounted(() => {
  loadData()
})

async function loadData() {
  const response = await fetch("https://pub-94fd7d16758c49eba2a7a4a7052b96d5.r2.dev/ITEM_SNAPSHOT.json.gz");

  if (!response.ok) {
    throw new Error("Failed to get item data snapshot");
  }
  const decompressedStream = response.body!.pipeThrough(new DecompressionStream("gzip"));
  const responseJson = await new Response(decompressedStream).json();

  for (const itemId in responseJson.itemsById) {
    itemCache.set(Number(itemId), responseJson.itemsById[itemId]); 
  }
  setSnapshotData(responseJson)
  snapshotId.value = responseJson.id

  isLoaded.value = 1
}

const rwUpgradeOption = ref<string>("ELITE_SOCKETS_ZOD_4015")
const rwHandednessOption = ref<string>("TWO_HANDED")
const rwEtherealOption = ref<string>("CAN_BE_MADE_LONG_LASTING")
const rwScoringOption = ref<string>("DPS")

const rwConsumerName = computed(() => "RARE_WEAPONS|" + rwScoringOption.value + "|" +
  rwUpgradeOption.value + "|" + rwHandednessOption.value + "|" + rwEtherealOption.value);

const rwdcDamageOption = ref<string>("MAX_DMG|ELITE_SOCKETS_ZOD_OHM")
const rwdcEtherealOption = ref<string>("CAN_BE_MADE_LONG_LASTING")

const rwdcConsumerName = computed(() => "RARE_WEAPON_SCORES|" + rwdcDamageOption.value + "|TWO_HANDED|" + rwdcEtherealOption.value);

</script>

<template>


<template v-if="isLoaded">

  <div class="text-description" style="margin:5px 8px">
    I modded Diablo 2 (LOD 1.14d) so that when a monster gets killed, it keeps generating items in an
    infinite loop. This is running in parallel for a few different monster types to get a variety
    of loot. This website shows the best items that have been generated. Here's how many items 
    it's made so far...
  </div>


  <StatsAcrossDropSources :snapshotId="snapshotId!"/>

  <div class="text-description" style="margin:5px 8px">
    By default, the rest of this webpage will show the items dropped by all the monsters, mixed together.
    If you want to just see the items dropped by 1 of the monsters, choose here
  </div>
  

  <div :class="['select-drop-context', isNarrowWindow ? 'narrow' : '']" style="margin-left:8px;">
    <input type="radio" id="DC_L85_NORMAL_MOB" value="L85_NORMAL_MOB" v-model="selectedDropContext">
    <label for="DC_L85_NORMAL_MOB">Normal Mob (Level 85 Area)</label>

    <input type="radio" id="DC_L85_UNIQUE_MOB" value="L85_UNIQUE_MOB" v-model="selectedDropContext">
    <label for="DC_L85_UNIQUE_MOB">Unique Mob (Level 85 Area)</label>
 
    <input type="radio" id="DC_HELL_BAAL" value="HELL_BAAL" v-model="selectedDropContext">
    <label for="DC_HELL_BAAL">Hell Baal</label>

    <input type="radio" id="DC_ALL" value="ALL" v-model="selectedDropContext">
    <label for="DC_ALL">All 3 Combined</label>
  </div>

  <TogglingSectionHeader title="<span class='yellow'>Rare</span> Caster Amulets">
    <TopN :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" consumer-id="RARE_CASTER_AMULETS"  />
  </TogglingSectionHeader>
  
  <TogglingSectionHeader title="<span class='yellow'>Rare</span> Caster Circlets">
    <TopN :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" consumer-id="RARE_CASTER_CIRCLETS"  />
  </TogglingSectionHeader>
  
  <TogglingSectionHeader title="<span class='yellow'>Rare</span> Caster Boots">
    <TopN :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" consumer-id="RARE_CASTER_BOOTS"  />
  </TogglingSectionHeader>  

  <TogglingSectionHeader title="<span class='yellow'>Rare</span> Caster Rings">
    <TopN :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" consumer-id="RARE_CASTER_RINGS"  />
  </TogglingSectionHeader>
  

  <TogglingSectionHeader title="Item Counts by Type and Quality">
    <ItemGrid :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" consumer-id="ITEM_COUNTS_BY_TYPE_AND_QUALITY"  />
  </TogglingSectionHeader>
  
  <TogglingSectionHeader title="Counts of <span class='set-green'>Sets</span> and <span class='gold'>Uniques</span> by name">
    <ItemGrid :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" consumer-id="COUNTS_OF_SET_AND_UNIQUES_BY_NAME"  />
  </TogglingSectionHeader>
  
  <TogglingSectionHeader title="<span class='gold'>Unique</span> Items (perfect roll hunt)">
    <PerfectUniques :drop-context="selectedDropContext!" :snapshotId="snapshotId!"/>
  </TogglingSectionHeader>
  
  <TogglingSectionHeader title="Assorted good <span class='blue'>Magic</span> Items">
    <AssortedMagicItems :drop-context="selectedDropContext!" :snapshotId="snapshotId!"/>
  </TogglingSectionHeader>
  
<TogglingSectionHeader title="High Damage <span class='yellow'>Rare</span> Weapons">
  <div class="rareWeaponFormSection"> 
    <span class="text-description">When evaluating these high-end Rare weapons, it makes sense to consider how good they'd be if properly upgraded, rather than just what they were when they dropped. For example, it would be common to upgrade these items to Elite (using the Cube recipe), add a socket to them if possible using Larzuk quest, putting a Zod rune in them if ethereal but not already self-repairing, and putting additional jewels/runes in them to further enhance their damage. So, you can choose to view which items would be best after applying some upgrades to them. Choose which upgrades you want:</span>
    <br />
    <input type="radio" id="RW_ELITE_SOCKETS_ZOD_4015" value="ELITE_SOCKETS_ZOD_4015" v-model="rwUpgradeOption" />
    <label for="RW_ELITE_SOCKETS_ZOD_4015">Upgrade to Elite. Add socket if possible. Add Zod rune if needed to make ethereal item long-lasting. Fill remaining slots with 40%ED/15ias jewels.</label>
    <br />
    <input type="radio" id="RW_ELITE_SOCKETS_ZOD_OHM" value="ELITE_SOCKETS_ZOD_OHM" v-model="rwUpgradeOption" />
    <label for="RW_ELITE_SOCKETS_ZOD_OHM">Upgrade to Elite. Add socket if possible. Add Zod rune if needed to make ethereal item long-lasting. Fill remaining slots with Ohm runes (50% ED).</label>
    <br />
    <input type="radio" id="RW_NO_UPGRADE" value="NO_UPGRADE" v-model="rwUpgradeOption" />
    <label for="RW_NO_UPGRADE">Do not upgrade/socket the item.</label>
  </div>

  <div class="rareWeaponFormSection"> 
    <span class="text-description">Do you need the items to be long-lasting (repairable) or is ethereal ok (like for a mercenary)?</span>
    <br />
    <input type="radio" id="RW_CAN_BE_MADE_LONG_LASTING" value="CAN_BE_MADE_LONG_LASTING" v-model="rwEtherealOption" />
    <label for="RW_CAN_BE_MADE_LONG_LASTING">Only include items that are repairable or indestructible or can be fixed with a Zod rune to become indestructible.</label>
    <br />
    <input type="radio" id="RW_ETHEREAL" value="ETHEREAL" v-model="rwEtherealOption" />
    <label for="RW_ETHEREAL">Only include ethereal items, and don't put Zod runes in them.</label>
  </div>

  <div class="rareWeaponFormSection"> 
    <span class="text-description">Limit to either 1-handed or 2-handed items.</span>
    <br />
    <input type="radio" id="RW_TWO_HANDED" value="TWO_HANDED" v-model="rwHandednessOption" />
    <label for="RW_TWO_HANDED">Two Handed</label>
    <br />
    <input type="radio" id="RW_ONE_HANDED" value="ONE_HANDED" v-model="rwHandednessOption" />
    <label for="RW_ONE_HANDED">One Handed. This will include 2-handed swords as well, and use the damage a barbarian would do when swinging them 1-handed.</label>
  </div>

  <div class="rareWeaponFormSection"> 
    <span class="text-description">Do you want to score/rank the items by their maximum damage per hit, average damage per hit, or approximate DPS (damage per second)?</span>
    <br />
    <input type="radio" id="RW_DPS" value="DPS" v-model="rwScoringOption" />
    <label for="RW_DPS">Damage per second. Assumes 40 IAS from non-weapon sources.</label>
    <br />
    <input type="radio" id="RW_MAX_DMG" value="MAX_DMG" v-model="rwScoringOption" />
    <label for="RW_MAX_DMG">Max Damage</label>
    <br />
    <input type="radio" id="RW_AVG_DMG" value="AVG_DMG" v-model="rwScoringOption" />
    <label for="RW_AVG_DMG">Average Damage</label>
  </div>

  <CategorizedTopN :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" :consumer-id="rwConsumerName"  />
</TogglingSectionHeader>

<TogglingSectionHeader title="Rare Weapon Damage Charts (2-handed)">
  <div class="rareWeaponFormSection"> 
    <span class="text-description">This is mostly showing that if you want to have a high-damage rare weapon it has to be Ethereal, and if you want
      the very, very highest damage weapons they'll need to have 2 sockets and/or be self-repairing as well (so you don't need to use a zod rune
      on one of the sockets). <br /><br />
      Choose a chart:</span>
    <br />
    <input type="radio" id="RWDC_ELITE_SOCKETS_ZOD_4015" value="DPS|ELITE_SOCKETS_ZOD_4015" v-model="rwdcDamageOption" />
    <label for="RWDC_ELITE_SOCKETS_ZOD_4015">Upgrade to Elite. Add socket if possible. Add Zod rune if needed to make ethereal item long-lasting. Fill remaining slots with 40%ED/15ias jewels. Graphs the frequency of different DPS amounts.</label>
    <br />
    <input type="radio" id="RWDC_ELITE_SOCKETS_ZOD_OHM" value="MAX_DMG|ELITE_SOCKETS_ZOD_OHM" v-model="rwdcDamageOption" />
    <label for="RWDC_ELITE_SOCKETS_ZOD_OHM">Upgrade to Elite. Add socket if possible. Add Zod rune if needed to make ethereal item long-lasting. Fill remaining slots with Ohm runes (50% ED). Graphs the frequency of different Max Damage amounts.</label>
  </div>

  <div class="rareWeaponFormSection"> 
    <span class="text-description">Do you need the items to be long-lasting (repairable) or is ethereal ok (like for a mercenary)?</span>
    <br />
    <input type="radio" id="RWDC_CAN_BE_MADE_LONG_LASTING" value="CAN_BE_MADE_LONG_LASTING" v-model="rwdcEtherealOption" />
    <label for="RWDC_CAN_BE_MADE_LONG_LASTING">Only include items that are repairable or indestructible or can be fixed with a Zod rune to become indestructible.</label>
    <br />
    <input type="radio" id="RWDC_ETHEREAL" value="ETHEREAL" v-model="rwdcEtherealOption" />
    <label for="RWDC_ETHEREAL">Only include ethereal items, and don't put Zod runes in them.</label>
  </div>

  <WeaponScoresChart :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" :consumer-id="rwdcConsumerName"  />
</TogglingSectionHeader>

<TogglingSectionHeader title="<span class='yellow'>Rare</span> 'Fools' Weapons (2-handed)">
    <CategorizedTopN :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" consumer-id="FOOLS_WEAPON|2_HANDED"  />
</TogglingSectionHeader>

<TogglingSectionHeader title="<span class='yellow'>Rare</span> 'Fools' Weapons (1-handed)">
    <CategorizedTopN :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" consumer-id="FOOLS_WEAPON|1_HANDED"  />
</TogglingSectionHeader>

<TogglingSectionHeader title="Cold Sorc Orbs">
  <CategorizedTopN :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" consumer-id="COLD_SORC_ORBS"  />
</TogglingSectionHeader>

<TogglingSectionHeader title="Fire Sorc Orbs">
  <CategorizedTopN :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" consumer-id="FIRE_SORC_ORBS"  />
</TogglingSectionHeader>

<TogglingSectionHeader title="Lightning Sorc Orbs">
  <CategorizedTopN :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" consumer-id="LIGHTNING_SORC_ORBS"  />
</TogglingSectionHeader>

<TogglingSectionHeader title="Game Bug Exposed : Cruel/Godly twice as common as expected">
  <AffixFrequencyBug :drop-context="selectedDropContext!" :snapshotId="snapshotId!"/>
</TogglingSectionHeader>

<TogglingSectionHeader title="Game Bug Exposed : Gold Find doesn't always work on Act Bosses">
  <GoldBug :snapshotId="snapshotId!"/>
</TogglingSectionHeader>

<TogglingSectionHeader title="Game Bug Exposed : Illegal +Skills mods on Barbarian helms">
  <IllegalStaffmodsBug :drop-context="selectedDropContext!" :snapshotId="snapshotId!"/>
</TogglingSectionHeader> 

<TogglingSectionHeader title="<span class='yellow'>Rare</span> Melee Jewels">
    <TopN :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" consumer-id="RARE_MELEE_JEWELS"  />
</TogglingSectionHeader>

<TogglingSectionHeader title="Wind Druid (Tornado) Pelts">
    <CategorizedTopN :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" consumer-id="WIND_DRUID_PELTS"  />
</TogglingSectionHeader>

<!--
<TogglingSectionHeader title="Tri-Resistance Boots">
  <TopN :drop-context="selectedDropContext!" :snapshot-id="snapshotId!" consumer-id="TRI_RES_BOOTS"  />
</TogglingSectionHeader>  


-->

<TogglingSectionHeader title="<span style='color:white'>FAQ<span>">
    <div class="faq-question">How much MF did the character have when it killed the monster?</div>
    <div class="faq-answer">+300% Magic Find</div>

    <div class="faq-question">How fast does the game generate items?</div>
    <div class="faq-answer">The items with more modifiers take longer to generate. On my PC, it loops through dropping
      Baal's items about 2200 times per second. But Baal drops ~5 items so that's more than 10,000 items per second.
      The Level 85 normal monster does it's item-dropping routine about 70,000 times per second, but that often doesn't
      result in any item being dropped, and if there was an item it's probably normal quality without any affixes to
      choose/roll.
    </div>

    <div class="faq-question">What else did you have to change in the game to make this work?</div>
    <div class="faq-answer">
      Disabled the check that prevents the same Unique item from spawning more than once in the same game.
      <br /><br />
      Disabled the code where it needs to find an empty spot on the ground to put the item.
      <br /><br />
      Deleted each item after it gets created so memory doesn't fill up.
      <br /><br />
      Disabled the check that prevents multiple instances of the game from running on the same PC.
      <br /><br />
      There was a slow memory leak (less than 1 byte per item on average). I replaced the game's pooled memory allocator with a simple one that
      does nothing when free(...) is called on a specific pointer, but has a freeAll() operation, so after each 
      time 'killing' the monster, I can reliably free all the memory that had been allocated by the game's 
      item generation process. Maybe the game had some additional memory cleanup funtionality that wasn't getting
      called because I took over the game's main game loop thread.
      <br /><br />
      Each item in a game is given a sequential id number when it is loaded into the game. Since there's a 32bit
      integer keeping track of the next id number to assign, it eventually overflows after 4+ billion items and wraps
      back to 0, and then the item ids being assigned collide with other item ids in the game (like the items my
      character is wearing, for example) and the game crashes. I just made it so when this counter got close to
      overflowing, I reset it back to 1 billion. I don't need the items to have actual unique ids, since I'm
      deleting them right after they get created anyway.

    </div>

    <div class="faq-question">Can I see the code?</div>
    <div class="faq-answer">
      There's a few different applications working together:<br /><br />

      1. The "mod" to Diablo 2. This code gets injected into the running Diablo 2 game process. When injected, it modifies 
      the part of the game code that handles item drops, to make it redirect to my code, which then calls the item drop 
      code repeatedly. The item data is sent over a local TCP port to the "aggregator" app.
      <a target="_blank" href="https://github.com/SeanSullivan86/D2InjectedLootDropLooper">Code</a>
      <br /><br />
      2. A small app that's just responsible for injecting the previous app into the Diablo 2 game process, using Windows
      Process/Memory manipulation APIs. <a target="_blank" href="https://github.com/SeanSullivan86/D2DLLInjector">Code</a>
      <br /><br />
      3. The "aggregator" app. It listens to the item data being streamed over different TCP ports from each of the modded
      game instances. Currently I'm running 5 game instances (2 killing Baal, 2 killing L85 Unique mob, 1 killing L85 normal mob).
      This looks at all the items and records all the statistics about the items (item counts, top items meeting certain criteria,
      all the categories you see on this page). Every hour it saves a snapshot of the statistics to cloud storage, where it can 
      then be retrieved by the web app. <a target="_blank" href="https://github.com/SeanSullivan86/D2LootListener">Code</a>
      <br /><br />
      4. This website. It retrieves the data file from cloud storage and shows all these views of the items.
      <a target="_blank" href="https://github.com/SeanSullivan86/D2LootWebsite">Code</a>

    </div>

</TogglingSectionHeader>




</template> <!-- end v-if="isLoaded" -->
   
  
<ItemTooltip />


</template>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin-top: 10px;
}

.faq-question::before {
  content: "\2022"; /* bullet point */
  margin-right: 8px; 
}

.faq-question {
  color: white;
}

.faq-answer {
  color: #888;
  margin-top:4px;
  margin-left: 15px;
  margin-bottom: 8px;
}

input[type="radio"]:checked + label {
  text-decoration: underline;
}

.rareWeaponFormSection {
  margin-bottom: 5px;
}

.select-drop-context {
  display: inline-block;
  border: 2px solid #555555;
  overflow: hidden;
  font-size: 0;
}

.select-drop-context input[type="radio"] {
  display: none;
}

.select-drop-context label {
  display: inline-block;
  padding: 12px 24px;
  font-size: 15px;
  letter-spacing: 0.05em;
  cursor: pointer;
  background: #1a1a1a;
  color: #aaaaaa;
  border-right: 2px solid #555555;
  user-select: none;
  transition: background 0.15s, color 0.15s;
}

.select-drop-context.narrow label {
  width: 95%;
  border-bottom: 1px solid #aaa;
}

.select-drop-context label:last-of-type {
  border-right: none;
}

.select-drop-context input[type="radio"]:checked + label {
  background: #f0ede8;
  color: #1a1a1a;
}

.select-drop-context label:hover {
  background: #2a2a2a;
  color: #dddddd;
}

.select-drop-context input[type="radio"]:checked + label:hover {
  background: #f0ede8;
  color: #1a1a1a;
}

</style>
