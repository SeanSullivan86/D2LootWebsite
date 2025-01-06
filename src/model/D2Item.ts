
export interface D2Item {
    defense: number,
    description: string,
    dropIteration: number,
    ethereal : boolean,
    gold: number,
    id: number,
    illegalStaffmods? : any,
    itemTypeCode: string,
    itemTypeName: string,
    name: string,
    quality: string,
    skillBonuses? : any,
    sockets: number,
    stats? : any
}

export interface D2TopNItem {
    item: D2Item,
    score: number,
    sequenceNumber: number
}