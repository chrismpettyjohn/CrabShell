export interface AdminItemsBaseWire {
  id: number;
  spriteId: number;
  publicName: string;
  itemName: string;
  type: string;
  width: number;
  length: number;
  stackHeight: number;
  allowStack: boolean;
  allowSit: boolean;
  allowLay: boolean;
  allowWalk: boolean;
  allowGift: boolean;
  allowTrade: boolean;
  allowRecycle: boolean;
  allowMarketplaceSell: boolean;
  allowInventoryStack: boolean;
  interactionType: string;
  interactionModesCount: number;
  vendingIds: string;
  multiheight: string;
  customParams: string;
  effectIdMale: number;
  effectIdFemale: number;
  clothingOnWalk: string;
}

export type AdminItemsBaseCreateParams = Omit<AdminItemsBaseWire, "id">;
export type AdminItemsBaseCreateResponse = AdminItemsBaseWire;
export type AdminItemsBaseUpdateByIdParams = Partial<AdminItemsBaseWire>;
export type AdminItemsBaseUpdateByIdResponse = boolean;
export type AdminItemsBaseGetAllResponse = AdminItemsBaseWire[];
export type AdminItemsBaseGetByIdResponse = AdminItemsBaseWire;
export type AdminItemsBaseDeleteByIdResponse = boolean;
