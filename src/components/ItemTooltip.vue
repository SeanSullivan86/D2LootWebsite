<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { type D2Item } from '../model/D2Item'
import { ITEM_QUALITY_NAMES, itemTypes, ItemType } from '../model/globals'
import { itemCache, snapshotData, itemIdForTooltip, tooltipX, tooltipY, consumerIdForTooltip, isTouchOnly } from '../app-state'

const itemName = ref<string[]|null>(null)
const itemDescription = ref<string[]|null>(null)
const nameCssClass = ref<string|null>(null)
const item = ref<D2Item|null>(null)
const tooltipDiv = ref<HTMLDivElement|null>(null)
const extraDescriptionForEthAndSockets = ref<string|null>(null)
const damageDescription = ref<string|null>(null)
const upgradeDescription = ref<string|null>(null)

const consumerId = ref<string|null>(null)

onMounted(() => {
  console.log("Start of onMounted hook in BasicStats")
})

function dmgString(dmgObject:any):string {
    return "<span class='blue'>" + dmgObject.min +
     "</span> to <span class='blue'>" + dmgObject.max + "</span>"
}

watch([itemIdForTooltip, tooltipX, tooltipY, consumerIdForTooltip], ([oldItemId, oldX, oldY, oldConsumerId]) => {

    if (itemIdForTooltip.value == null) {
        itemName.value = null
        itemDescription.value = null
        if (tooltipDiv.value) {
            tooltipDiv.value.classList.remove("visible")
        }
        if (isTouchOnly.value) {
            tooltipDiv.value?.hidePopover();
        }
        consumerId.value = null
        return;
    }

    if (isTouchOnly.value) {
        tooltipDiv.value?.showPopover();
    }

    tooltipDiv.value!.classList.add("visible")

    item.value = itemCache.get(itemIdForTooltip.value)!

    consumerId.value = consumerIdForTooltip.value;

    itemName.value = item.value.name.toUpperCase().split(',').reverse();

    itemDescription.value = item.value.description.toUpperCase().split(',').reverse();

    damageDescription.value = null
    upgradeDescription.value = null
    if (consumerId.value!.startsWith("RARE_WEAPONS|")) {
        let dam = "";
        dam += "DAMAGE: " + dmgString(item.value.originalDmg);
        if (item.value.originalDmg_1h) {
            dam += "<br />";
            dam += "1-HANDED DAMAGE: " + dmgString(item.value.originalDmg_1h);
        }
        damageDescription.value = dam;

        if (! consumerId.value!.includes("NO_UPGRADE")) {
            let ug = "<span style='text-decoration: underline;'>UPGRADED TO</span><br />";
            let statKey = "";
            if (consumerId.value!.includes("ELITE_SOCKETS_ZOD_4015")) statKey = "upSocketZod4015";
            else if (consumerId.value!.includes("ELITE_SOCKETS_ZOD_OHM")) statKey = "upSocketZodOhm";
            else if (consumerId.value!.includes("ELITE_SOCKETS_ZOD")) statKey = "upSocketZod";
            if (consumerId.value!.includes("ETHEREAL")) statKey = statKey.replaceAll("Zod","") + "_eth";
            if (consumerId.value!.includes("ONE_HANDED")) {
                let statKey1h = statKey + "_1h";
                if ((item.value as any)[statKey1h] != null) {
                    statKey = statKey1h;
                }
            }

            let upgradedDamage = (item.value as any)[statKey]
            if (item.value.itemTypeCode != upgradedDamage.itemType) {
                ug += "<span class='yellow' style='font-weight:bold'>" + itemTypes.get(upgradedDamage.itemType)!.name + "</span><br />";
            }

            ug += "DAMAGE: " + dmgString(upgradedDamage);
            if (upgradedDamage.sockets && upgradedDamage.sockets.length > 0) {
                ug += "<br />Sockets: [" + upgradedDamage.sockets.join(" , ") + "]";
            }
            upgradeDescription.value = ug;
        }
        
        
    }
    // "RARE_WEAPONS|MAX_DMG|ELITE_SOCKETS_ZOD_OHM|TWO_HANDED|CAN_BE_MADE_LONG_LASTING"
    // "RARE_WEAPONS|MAX_DMG|ELITE_SOCKETS_ZOD_4015|TWO_HANDED|ETHEREAL"
    // "RARE_WEAPONS|DPS|NO_UPGRADE|TWO_HANDED|ETHEREAL"

    extraDescriptionForEthAndSockets.value = null
    let ethDescription = ""
    if (item.value.ethereal) {
        ethDescription += "ETHEREAL (CANNOT BE REPAIRED)"
    }
    if (item.value.sockets > 0) {
        if (ethDescription != "") {
            ethDescription += ", "
        }
        ethDescription += "SOCKETED (" + item.value.sockets + ")"
    }
    if (ethDescription != "") {
        extraDescriptionForEthAndSockets.value = ethDescription;
    }
    

    if (item.value.quality == 'RARE') nameCssClass.value = 'yellow';
    else if (item.value.quality == 'SET') nameCssClass.value = 'set-green';
    else if (item.value.quality == 'MAGIC') nameCssClass.value = 'blue';
    else if (item.value.quality == 'UNIQUE') nameCssClass.value = 'gold';
    else nameCssClass.value = 'white';

    if (isTouchOnly.value) {

    } else {
        const pw = tooltipDiv.value!.offsetWidth  || 280;
        const ph = tooltipDiv.value!.offsetHeight || 200;

        let x = tooltipX.value! + 16;
        let y = tooltipY.value! + 16;

        if (x + pw > window.innerWidth  - 10) x = tooltipX.value! - pw - 16
        if (y + ph > window.innerHeight - 10) y = tooltipY.value! - ph - 16;

        tooltipDiv.value!.style.left = x + 'px';
        tooltipDiv.value!.style.top  = y + 'px';  
    }
    
      


}, { immediate: true });

</script>

<template>
  
    <div id="itemTooltip" ref="tooltipDiv" :popover="isTouchOnly ? 'auto' : null">
        <template v-if="itemName">
            <template v-for="line in itemName">
                <div :class="nameCssClass" style="font-weight:bold">{{ line }}</div>
            </template>
            <div style="width:90%;height:1px;margin:5px auto;background-color:white"></div>
            <template v-if="damageDescription">
                <div v-html="damageDescription"></div>
            </template>
            <template v-for="line in itemDescription">
                <div class="blue">{{ line }}</div>
            </template>
            <template v-if="extraDescriptionForEthAndSockets">
                <div class="blue">{{ extraDescriptionForEthAndSockets }}</div>
            </template>
            <div style="width:90%;height:1px;margin:5px auto;background-color:white"></div>
            <template v-if="upgradeDescription">
                <div v-html="upgradeDescription"></div>
            </template>
        </template>
    </div>

</template>

<style scoped>

#itemTooltip {
    position: fixed;
    pointer-events: none;
    z-index: 1000;
    display: none;

    min-width: 220px;
    background-color: #222;
    color: #f5f0e8;
    padding: 10px;

    border: 1px solid white;
    text-align: center;
}

#itemTooltip.visible {
    display: block;
}


</style>
