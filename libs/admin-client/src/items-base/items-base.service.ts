import {
  deleteFromApi,
  fetchFromApi,
  patchToApi,
  postToApi,
} from "../client.const";
import {
  AdminItemsBaseCreateParams,
  AdminItemsBaseCreateResponse,
  AdminItemsBaseDeleteByIdResponse,
  AdminItemsBaseGetAllResponse,
  AdminItemsBaseGetByIdResponse,
  AdminItemsBaseUpdateByIdParams,
  AdminItemsBaseUpdateByIdResponse,
} from "./items-base.types";

export class AdminItemsBaseService {
  public create(
    dto: AdminItemsBaseCreateParams
  ): Promise<AdminItemsBaseCreateResponse> {
    return postToApi("items-base", dto);
  }

  public getAll(): Promise<AdminItemsBaseGetAllResponse> {
    return fetchFromApi("items-base");
  }

  public getById(itemsBaseId: number): Promise<AdminItemsBaseGetByIdResponse> {
    return fetchFromApi(`items-base/${itemsBaseId}`);
  }

  public updateById(
    itemsBaseId: number,
    dto: AdminItemsBaseUpdateByIdParams
  ): Promise<AdminItemsBaseUpdateByIdResponse> {
    return patchToApi(`items-base/${itemsBaseId}`, dto);
  }

  public deleteById(
    itemsBaseId: number
  ): Promise<AdminItemsBaseDeleteByIdResponse> {
    return deleteFromApi(`items-base/${itemsBaseId}`);
  }
}

export const adminItemsBaseService: AdminItemsBaseService =
  new AdminItemsBaseService();
