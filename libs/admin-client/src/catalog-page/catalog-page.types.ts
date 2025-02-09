export interface AdminCatalogPageWire {
  id: number;
  publicName: string;
}

export interface AdminCatalogPageCreateParams {
  publicName: string;
}

export type AdminCatalogPageCreateResponse = AdminCatalogPageWire;

export type AdminCatalogPageUpdateByIdParams =
  Partial<AdminCatalogPageCreateParams>;

export type AdminCatalogPageUpdateByIdResponse = boolean;

export type AdminCatalogPageGetAllResponse = AdminCatalogPageWire[];

export type AdminCatalogPageGetByIdResponse = AdminCatalogPageWire;

export type AdminCatalogPageDeleteByIdResponse = boolean;
