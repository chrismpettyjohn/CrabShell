import {
  deleteFromApi,
  fetchFromApi,
  patchToApi,
  postToApi,
} from "../client.const";
import {
  AdminCatalogItemCreateParams,
  AdminCatalogItemCreateResponse,
  AdminCatalogItemDeleteByIdResponse,
  AdminCatalogItemGetAllResponse,
  AdminCatalogItemGetByIdResponse,
  AdminCatalogItemUpdateByIdParams,
  AdminCatalogItemUpdateByIdResponse,
} from "./catalog-item.types";

export class AdminCatalogItemService {
  public create(
    dto: AdminCatalogItemCreateParams
  ): Promise<AdminCatalogItemCreateResponse> {
    return postToApi("catalog-items", dto);
  }

  public getAll(): Promise<AdminCatalogItemGetAllResponse> {
    return fetchFromApi("catalog-items");
  }

  public getById(
    catalogItemId: number
  ): Promise<AdminCatalogItemGetByIdResponse> {
    return fetchFromApi(`catalog-items/${catalogItemId}`);
  }

  public updateById(
    catalogItemId: number,
    dto: AdminCatalogItemUpdateByIdParams
  ): Promise<AdminCatalogItemUpdateByIdResponse> {
    return patchToApi(`catalog-items/${catalogItemId}`, dto);
  }

  public deleteById(
    catalogItemId: number
  ): Promise<AdminCatalogItemDeleteByIdResponse> {
    return deleteFromApi(`catalog-items/${catalogItemId}`);
  }
}

export const adminCatalogItemService: AdminCatalogItemService =
  new AdminCatalogItemService();
