
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
    stats? : any,
    originalDmg?:any,
    originalDmg_1h?:any,
    upSocket4015_eth?:any,
    upSocket4015_eth_1h?:any,
    upSocketOhm_eth?:any,
    upSocketOhm_eth_1h?:any,
    upSocketZod?:any,
    upSocketZod_1h?:any,
    upSocketZod4015?:any,
    upSocketZod4015_1h?:any,
    upSocketZodOhm?:any,
    upSocketZodOhm_1h?:any,
    upSocket_eth?:any,
    upSocket_eth_1h?:any
}

export interface D2TopNItem {
    item: D2Item,
    score: number,
}