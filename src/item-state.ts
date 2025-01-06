import { ref } from 'vue';
import type { Ref } from 'vue';
import { D2Item , D2TopNItem} from './model/D2Item';

export interface WebSocketWrapper {
    connection : WebSocket | null
}

export const websocket : WebSocketWrapper = {connection: null}
export const websocketRequestQueue : Map<string,any> = new Map();

export function sendAllQueuedUpWebsocketRequests() {
    websocketRequestQueue.forEach((request, requestId) => {
        console.log("Sending queued websocket request : " + requestId);
        websocket.connection!.send(JSON.stringify(request));
    });
    websocketRequestQueue.clear();
}

export interface MenuTree {
    nodeName: string
    children?: MenuTree[]
    path?:string
}
  
export const menu = ref<MenuTree[]>([
    {
      nodeName: 'Rare Weapons',
      children: [
        { nodeName: '1 handed : Highest DPS' },
        { nodeName: '1 or 2 handed : Highest DPS' },
      ],
    }
])

function buildMenuPaths(path: string, treeNode: MenuTree) {
  let newPath = path;
  if (newPath != "") newPath += "|";
  newPath += treeNode.nodeName
  treeNode.path = newPath;
  console.log(treeNode.nodeName + " : " + newPath)

  if (treeNode.children !== undefined) {
    treeNode.children.forEach(child => {
        buildMenuPaths(newPath, child)
    })
  }
}
menu.value.forEach(menuItem => buildMenuPaths("", menuItem))



export const categoriesByUseCase = ref<Map<string, string[]>>(new Map())

export const selectedPath = ref<string|null>(null)
export const selectedCategory = ref<string|null>(null)

export function updateSelectedUseCase(newId: string) {
  console.log('New selected node id: ' + newId)
  selectedPath.value = newId
  selectedCategory.value = null
}

export function updateSelectedCategory(newCategory: string) {
    selectedCategory.value = newCategory
    if (websocket.connection != null) {
      createStateForUseCase(selectedPath.value!, newCategory);
      makeTopNItemsRequest(websocket.connection, selectedPath.value!, newCategory);
    }
}




// useCase -> category -> ItemCategoryState
export const topNItemsByUseCase: Ref<Map<string, Map<string, ItemCategoryState>>> = ref(new Map<string, Map<string, ItemCategoryState>>());

export function createStateForUseCase(useCase: string, category: string) {
    let state = topNItemsByUseCase.value
    if (!state.has(useCase)) {
        state.set(useCase, new Map())
    }
    if (!state.get(useCase)?.has(category)) {
        state.get(useCase)?.set(category, {
            items: [],
            maxRank: 0,
            maxSequenceNumber: 0
        })
    }
}

export interface ItemCategoryState {
    items: D2TopNItem[],
    maxRank: number,
    maxSequenceNumber: number,
    pendingRequest ?: TopNItemsRequest,
}
// I already have the top ${maxRankAlreadyFetched} items, as of
// sequenceNumber = ${maxSequenceNumberAlreadyFetched}
// Send whatever additional items I need so that I'll have the complete topN
// as of whatever the current sequenceNumber is for the topN on the server
export interface TopNItemsRequest {
    _type : "TopNItemsRequest",
    useCase: string,
    category: string,
    n: number,
    maxRankAlreadyFetched: number,
    maxSequenceNumberAlreadyFetched: number,
}

export interface TopNItemsResponse {
    _type : "TopNItemsResponse",
    request: TopNItemsRequest,
    diffToFillTopN: D2TopNItem[],
    n: number
}



export function makeTopNItemsRequest(connection: WebSocket, useCase: string, category: string) {
    let state = topNItemsByUseCase.value;
    const itemCategoryState = state.get(useCase)!.get(category)!;
    if (itemCategoryState.pendingRequest !== undefined) {
        console.error("There's already a pending request for useCase " + useCase + " , category " + category);
        return;
    }
    const request: TopNItemsRequest = {
        _type: "TopNItemsRequest",
        useCase: useCase,
        category: category,
        n: 10,
        maxRankAlreadyFetched: itemCategoryState.maxRank,
        maxSequenceNumberAlreadyFetched: itemCategoryState.maxSequenceNumber
    };

    itemCategoryState.pendingRequest = request;

    console.log("Sending request : " + request);
    connection.send(JSON.stringify(request))
}

function handleTopNItemsResponse(response: TopNItemsResponse) {
    let state = topNItemsByUseCase.value;
    const itemCategoryState = state.get(response.request.useCase)!.get(response.request.category)!;

    if (itemCategoryState.pendingRequest === undefined) {
        console.error("Got a TopNItemsResponse, but there's no pending request: " + response);
        return;
    }
    if (response.diffToFillTopN.length == 0) {
        console.log("No new items for top n");
        itemCategoryState.pendingRequest = undefined;
        return;
    }

    let maxSequenceNumberInResponse = 0;
    response.diffToFillTopN.forEach(item => {
        itemCategoryState.items.push(item);
        if (item.sequenceNumber > maxSequenceNumberInResponse) maxSequenceNumberInResponse = item.sequenceNumber;
    });
    itemCategoryState.items.sort((a,b) => {
        let diff = b.score - a.score;
        if (diff == 0) {
            return b.sequenceNumber - a.sequenceNumber;
        }
        return diff;
    })

    while (itemCategoryState.items.length > response.n) {
        itemCategoryState.items.pop();
    }
    itemCategoryState.maxRank = response.n;
    itemCategoryState.pendingRequest = undefined;
    itemCategoryState.maxSequenceNumber = Math.max(itemCategoryState.maxSequenceNumber, maxSequenceNumberInResponse);

}


export interface UseCaseAndCategoryNamesRequest {
    _type : "UseCaseAndCategoryNamesRequest",
}

export interface UseCaseAndCategoryNamesResponse {
    _type : "UseCaseAndCategoryNamesResponse",
    categoryNamesByUseCase: Map<string, string[]>
}

export function makeUseCaseAndCategoryNamesRequest(connection: WebSocket) {
    const request: UseCaseAndCategoryNamesRequest = {
        _type: "UseCaseAndCategoryNamesRequest",
    };

    console.log("Sending request : " + JSON.stringify(request));
    connection.send(JSON.stringify(request))
}

function handleUseCaseAndCategoryNamesResponse(untypedResponse: any) {
    const response: UseCaseAndCategoryNamesResponse = {
        _type : "UseCaseAndCategoryNamesResponse",
        categoryNamesByUseCase : new Map(Object.entries(untypedResponse.categoryNamesByUseCase))
    }

    categoriesByUseCase.value = response.categoryNamesByUseCase;
}


export function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}

export const pendingRequests = ref<Map<string, PromiseWithResolvers<any>>>(new Map())

export function makeWebsocketRequestExpectingResponse(request: any):Promise<any> {
    const requestId = request.requestId
    let promiseWithResolvers = Promise.withResolvers<any>();
    pendingRequests.value.set(requestId, promiseWithResolvers);

    if (websocket.connection != null ) {
        websocket.connection.send(JSON.stringify(request));
    } else {
        console.log("Enqueuing request since websocket isn't available right now : " + requestId);
        websocketRequestQueue.set(requestId, request);
    }
    

    setTimeout(() => {
        let promiseWithResolvers = pendingRequests.value.get(requestId)
        if (promiseWithResolvers) {
            promiseWithResolvers.reject("Error: No response within 4 seconds")
            pendingRequests.value.delete(requestId);
            websocketRequestQueue.delete(requestId);
        }
    }, 4000);

    return promiseWithResolvers.promise;
}

export function handleWebsocketMessage(message: string) {
    console.log("Start of handleWebsocketMessage : " + message);
    let messageObject = JSON.parse(message);

    if (messageObject.requestId) {
        let promiseWithResolvers = pendingRequests.value.get(messageObject.requestId)
        if (promiseWithResolvers) {
            promiseWithResolvers.resolve(messageObject)
            pendingRequests.value.delete(messageObject.requestId);
        } else {
            console.warn("No pending request for requestId: " + messageObject.requestId)
        }
    }

    /*
    if (messageObject._type == "TopNItemsResponse") {
        handleTopNItemsResponse(messageObject);
    } else if (messageObject._type == "UseCaseAndCategoryNamesResponse") {
        handleUseCaseAndCategoryNamesResponse(messageObject);
    } */
}