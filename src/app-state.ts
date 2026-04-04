import { ref } from 'vue';
import { D2Item } from './model/D2Item';


export const isNarrowWindow = ref(window.innerWidth < 768)
window.addEventListener('resize', () => {
  isNarrowWindow.value = window.innerWidth < 768
})
export const isTouchOnly = ref(window.matchMedia("(any-hover: none)").matches);


export const DATA_CACHE:Map<string,any> = new Map();

export const itemCache:Map<number,D2Item> = new Map()
export let snapshotData:any = null;

export function setSnapshotData(newData:any) {
    snapshotData = newData
    snapshotData.dropContexts["ALL"] = snapshotData.aggregatesOverAllDropContexts;
}

export const dataSummary = ref<string|null>(null)

export const consumerData:Map<string,any> = new Map()

export const LATEST_SNAPSHOT_ID = ref<string|null>(null)



export function createItemTooltip(itemId:number, consumerId:string, event:any) {
  console.log("createItemTooltip")
  console.log(event)
  if (isTouchOnly.value && event.type != 'click') return;
  if (itemId == null || itemId == undefined) return;
  itemIdForTooltip.value = itemId
  consumerIdForTooltip.value = consumerId;
  tooltipX.value = event.clientX
  tooltipY.value = event.clientY
}

export function destroyItemTooltip() {
  if (isTouchOnly.value) return;
  itemIdForTooltip.value = null
}

export function destroyItemTooltipTouchscreen() {
  itemIdForTooltip.value = null
}

export function moveItemTooltip(event:any) {
  if (isTouchOnly.value) return;
  tooltipX.value = event.clientX
  tooltipY.value = event.clientY
}

export const itemIdForTooltip = ref<number|null>(null)
export const consumerIdForTooltip = ref<string|null>(null)
export const tooltipX = ref<number|null>(null)
export const tooltipY = ref<number|null>(null)

export function arraySum(input:number[]) {
    return input.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}