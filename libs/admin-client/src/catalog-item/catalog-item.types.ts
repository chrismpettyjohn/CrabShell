export interface AdminCatalogItemWire {
  id: number;
  publicName: string;
}

export interface AdminCatalogItemCreateParams {
  publicName: string;
}

export type AdminCatalogItemCreateResponse = AdminCatalogItemWire;

export type AdminCatalogItemUpdateByIdParams =
  Partial<AdminCatalogItemCreateParams>;

export type AdminCatalogItemUpdateByIdResponse = boolean;

export type AdminCatalogItemGetAllResponse = AdminCatalogItemWire[];

export type AdminCatalogItemGetByIdResponse = AdminCatalogItemWire;

export type AdminCatalogItemDeleteByIdResponse = boolean;
