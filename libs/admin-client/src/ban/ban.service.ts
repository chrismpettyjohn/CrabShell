import {
  deleteFromApi,
  fetchFromApi,
  patchToApi,
  postToApi,
} from "../client.const";
import {
  AdminBanCreateParams,
  AdminBanCreateResponse,
  AdminBanDeleteByIdResponse,
  AdminBanGetAllResponse,
  AdminBanUpdateByIdParams,
  AdminBanUpdateByIdResponse,
} from "./ban.types";

export class AdminBanService {
  public create(dto: AdminBanCreateParams): Promise<AdminBanCreateResponse> {
    return postToApi("bans", dto);
  }

  public getAll(): Promise<AdminBanGetAllResponse> {
    return fetchFromApi("bans");
  }

  public updateById(
    banId: string,
    dto: AdminBanUpdateByIdParams
  ): Promise<AdminBanUpdateByIdResponse> {
    return patchToApi(`bans/${banId}`, dto);
  }

  public deleteById(banId: string): Promise<AdminBanDeleteByIdResponse> {
    return deleteFromApi(`bans/${banId}`);
  }
}

export const adminBanService: AdminBanService = new AdminBanService();
