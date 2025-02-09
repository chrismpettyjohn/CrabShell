import {
  deleteFromApi,
  fetchFromApi,
  patchToApi,
  postToApi,
} from "../client.const";
import {
  AdminCatalogPageCreateParams,
  AdminCatalogPageCreateResponse,
  AdminCatalogPageDeleteByIdResponse,
  AdminCatalogPageGetAllResponse,
  AdminCatalogPageGetByIdResponse,
  AdminCatalogPageUpdateByIdParams,
  AdminCatalogPageUpdateByIdResponse,
} from "./catalog-page.types";

export class AdminCatalogPageService {
  public create(
    dto: AdminCatalogPageCreateParams
  ): Promise<AdminCatalogPageCreateResponse> {
    return postToApi("catalog-pages", dto);
  }

  public getAll(): Promise<AdminCatalogPageGetAllResponse> {
    return fetchFromApi("catalog-pages");
  }

  public getById(
    catalogPageId: number
  ): Promise<AdminCatalogPageGetByIdResponse> {
    return fetchFromApi(`catalog-pages/${catalogPageId}`);
  }

  public updateById(
    catalogPageId: number,
    dto: AdminCatalogPageUpdateByIdParams
  ): Promise<AdminCatalogPageUpdateByIdResponse> {
    return patchToApi(`catalog-pages/${catalogPageId}`, dto);
  }

  public deleteById(
    catalogPageId: number
  ): Promise<AdminCatalogPageDeleteByIdResponse> {
    return deleteFromApi(`catalog-pages/${catalogPageId}`);
  }
}

export const adminCatalogPageService: AdminCatalogPageService =
  new AdminCatalogPageService();
