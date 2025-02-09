export enum CatalogVisibility {
  Visible = "1",
  Hidden = "0",
}

export interface AdminCatalogPageWire {
  id: number;
  parentId?: number;
  captionSave?: string;
  publicName?: string;
  pageLayout?: string;
  iconColor?: number;
  iconImage?: number;
  minRank?: number;
  orderNum?: number;
  visible?: CatalogVisibility;
  enabled?: CatalogVisibility;
  clubOnly?: CatalogVisibility;
  vipOnly?: CatalogVisibility;
  pageHeadline?: string;
  pageTeaser?: string;
  pageSpecial?: string;
  pageText1?: string;
  pageText2?: string;
  pageTextDetails?: string;
  pageTextTeaser?: string;
  roomId?: number;
  includes?: string;
}

export interface AdminCatalogPageCreateParams {
  parentId?: number;
  captionSave?: string;
  publicName: string;
  pageLayout?: string;
  iconColor?: number;
  iconImage?: number;
  minRank?: number;
  orderNum?: number;
  visible?: CatalogVisibility;
  enabled?: CatalogVisibility;
  clubOnly?: CatalogVisibility;
  vipOnly?: CatalogVisibility;
  pageHeadline?: string;
  pageTeaser?: string;
  pageSpecial?: string;
  pageText1?: string;
  pageText2?: string;
  pageTextDetails?: string;
  pageTextTeaser?: string;
  roomId?: number;
  includes?: string;
}

export type AdminCatalogPageCreateResponse = AdminCatalogPageWire;

export type AdminCatalogPageUpdateByIdParams =
  Partial<AdminCatalogPageCreateParams>;

export type AdminCatalogPageUpdateByIdResponse = boolean;

export type AdminCatalogPageGetAllResponse = AdminCatalogPageWire[];

export type AdminCatalogPageGetByIdResponse = AdminCatalogPageWire;

export type AdminCatalogPageDeleteByIdResponse = boolean;
