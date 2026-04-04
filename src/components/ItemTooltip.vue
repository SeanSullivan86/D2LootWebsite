<script setup lang="ts">
import { ref, watch } from 'vue'
import { type D2Item } from '../model/D2Item'
import { itemTypes, uniqueItems } from '../model/globals'
import { itemCache, itemIdForTooltip, tooltipX, tooltipY, consumerIdForTooltip, isTouchOnly, destroyItemTooltipTouchscreen } from '../app-state'

const itemName = ref<string[]|null>(null)
const itemDescription = ref<string[]|null>(null)
const nameCssClass = ref<string|null>(null)
const item = ref<D2Item|null>(null)
const tooltipDiv = ref<HTMLDivElement|HTMLDialogElement|null>(null)
const extraDescriptionForEthAndSockets = ref<string|null>(null)
const damageDescription = ref<string|null>(null)
const bottomSectionHtml = ref<string|null>(null)

const consumerId = ref<string|null>(null)

function dmgString(dmgObject:any):string {
    return "<span class='blue'>" + dmgObject.min +
     "</span> to <span class='blue'>" + dmgObject.max + "</span>"
}

function parseEnhancedDamage(input: string): number | null {
  const match = input.match(/\+([1-9]\d*)% ENHANCED DAMAGE/);
  return match ? parseInt(match[1], 10) : null;
}

function closeDialog(event:MouseEvent) {
    console.log("close dialog");
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event);
    (tooltipDiv.value as HTMLDialogElement).close()
    destroyItemTooltipTouchscreen();
}

watch([itemIdForTooltip, tooltipX, tooltipY, consumerIdForTooltip], ([oldItemId, oldX, oldY, oldConsumerId]) => {


    if (itemIdForTooltip.value == null) {
        console.log("itemTooltip Watch with null itemId")
        itemName.value = null
        itemDescription.value = null
        if (tooltipDiv.value) {
            if (isTouchOnly.value) {
                (tooltipDiv.value as HTMLDialogElement).close()
            } else {
                tooltipDiv.value.classList.remove("visible")
            }
            
        }

        consumerId.value = null
        return;
    }
    console.log("itemTooltip Watch with non-null itemId")

    if (isTouchOnly.value) {
        console.log("calling showModal");
        (tooltipDiv.value as HTMLDialogElement).showModal();
    } else {
        tooltipDiv.value!.classList.add("visible")
    }

    item.value = itemCache.get(itemIdForTooltip.value)!

    consumerId.value = consumerIdForTooltip.value;

    itemName.value = item.value.name.toUpperCase().split(',').reverse();

    itemDescription.value = item.value.description.toUpperCase().split(',').reverse();

    damageDescription.value = null
    bottomSectionHtml.value = null

    let itemType = itemTypes.get(item.value.itemTypeCode)!

    if (item.value.quality == 'UNIQUE') {
        const uniqueItem = uniqueItems.get(item.value.name)
        if (uniqueItem) {
            itemName.value.push(uniqueItem.getItemType().name.toUpperCase() + " [ L" + uniqueItem.qlvl + " ]");
        }

        if (uniqueItem && uniqueItem.properties.length > 0) {
            let desc = "<span style='text-decoration: underline;'>Property Ranges</span>"
            for (const [index,propRange] of uniqueItem.properties.entries()) {
                desc += "<br />";
                desc += propRange.name;
                if (propRange.param) {
                    desc += "(" + propRange.param + ")"
                }
                desc += " : " + propRange.min + " - " + propRange.max;
            }
            bottomSectionHtml.value = desc;
        }
    }

    if (consumerId.value!.startsWith("RARE_WEAPONS|") || consumerId.value!.startsWith("FOOLS_WEAPON|")) {
        let dam = "";
        dam += "DAMAGE: " + dmgString(item.value.originalDmg);
        if (item.value.originalDmg_1h) {
            dam += "<br />";
            dam += "1-HANDED DAMAGE: " + dmgString(item.value.originalDmg_1h);
        }
        damageDescription.value = dam;

        if (! consumerId.value!.includes("NO_UPGRADE")) {
            damageDescription.value = "<span style='text-decoration: underline;'>ORIGINAL STATS</span><br />" + damageDescription.value 

            let ug = "<span style='text-decoration: underline;'>UPGRADED TO</span><br />";
            let statKey = "";
            if (consumerId.value!.includes("ELITE_SOCKETS_ZOD_4015") || consumerId.value!.startsWith("FOOLS_WEAPON|")) statKey = "upSocketZod4015";
            else if (consumerId.value!.includes("ELITE_SOCKETS_ZOD_OHM")) statKey = "upSocketZodOhm";
            else if (consumerId.value!.includes("ELITE_SOCKETS_ZOD")) statKey = "upSocketZod";
            if (consumerId.value!.includes("ETHEREAL")) statKey = statKey.replaceAll("Zod","") + "_eth";

            let handednessStr = "2-HANDED ";
            if (consumerId.value!.includes("ONE_HANDED") || consumerId.value!.includes("1_HANDED")) {
                let statKey1h = statKey + "_1h";
                if ((item.value as any)[statKey1h] != null) {
                    statKey = statKey1h;
                }
                handednessStr = "1-HANDED ";
            }

            let upgradedDamage = (item.value as any)[statKey]
            if (item.value.itemTypeCode != upgradedDamage.itemType) {
                ug += "<span class='yellow' style='font-weight:bold'>" + itemTypes.get(upgradedDamage.itemType)!.name + "</span><br />";
            }

            ug += (itemType.itemTypeTypeCode == "swor" ? handednessStr : "") + "DAMAGE: " + dmgString(upgradedDamage);

            if (upgradedDamage.sockets && upgradedDamage.sockets.length > 0) {
                let originalEd = parseEnhancedDamage(item.value.description.toUpperCase()) ?? 0;
                let edBonus = 0
                let iasBonus = 0
                for (const socketFiller of upgradedDamage.sockets) {
                    if (socketFiller == '15_40') { edBonus += 40; iasBonus += 15; }
                    if (socketFiller == 'ohm') { edBonus += 50; }
                }
                if (edBonus > 0) {
                    ug += "<br />" + originalEd + " + " + edBonus + " = <span class='blue'>" + (originalEd+edBonus) + "% ENHANCED DAMAGE</span>";
                }

                ug += "<br />Sockets: [" + upgradedDamage.sockets.join(" , ") + "]";
            }
            bottomSectionHtml.value = ug;
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
  
    <component id="itemTooltip" 
               ref="tooltipDiv" 
               :is="isTouchOnly ? 'dialog' : 'div'"
               v-bind:closedby="isTouchOnly ? 'none' : null"
               :class="{ nonTouch: (!isTouchOnly) }">
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
            
            <template v-if="bottomSectionHtml">
                <div style="width:90%;height:1px;margin:5px auto;background-color:white"></div>
                <div v-html="bottomSectionHtml"></div>
            </template>
        </template>
        <template v-if="isTouchOnly">
            <div class="closeButton" @click="closeDialog($event)" >Close</div>
        </template>
    </component>

</template>

<style scoped>

.closeButton {
    margin-top:8px;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    font-size: 1.5rem;
    font-weight: bold;
    color: darkred;
}

#itemTooltip {
    min-width: 220px;
    background-color: black;
    color: #f5f0e8;
    padding: 10px;

    border: 1px solid white;
    text-align: center;
}

#itemTooltip::backdrop {
  /* background-color: rgba(255, 0, 0, 0.5); */
  backdrop-filter: blur(3px);            /* Blurs the content behind */
}

#itemTooltip.nonTouch {
    position: fixed;
    z-index: 1000;
    pointer-events: none;
    display: none;
}

#itemTooltip.nonTouch.visible {
    display: block;
}


</style>
