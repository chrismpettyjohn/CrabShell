import {
  deleteFromApi,
  fetchFromApi,
  patchToApi,
  postToApi,
} from "../client.const";
import {
  AdminBadgeCreateParams,
  AdminBadgeCreateResponse,
  AdminBadgeDeleteByCodeResponse,
  AdminBadgeGetAllResponse,
  AdminBadgeGetByCodeResponse,
  AdminBadgeUpdateByCodeParams,
  AdminBadgeUpdateByCodeResponse,
} from "./badge.types";

export class AdminBadgeService {
  public create(
    dto: AdminBadgeCreateParams
  ): Promise<AdminBadgeCreateResponse> {
    return postToApi("badges", dto);
  }

  public getAll(): Promise<AdminBadgeGetAllResponse> {
    return fetchFromApi("badges");
  }

  public getByCode(badgeCode: string): Promise<AdminBadgeGetByCodeResponse> {
    return fetchFromApi(`badges/${badgeCode}`);
  }

  public updateByCode(
    badgeCode: string,
    dto: AdminBadgeUpdateByCodeParams
  ): Promise<AdminBadgeUpdateByCodeResponse> {
    return patchToApi(`badges/${badgeCode}`, dto);
  }

  public deleteByCode(
    badgeCode: string
  ): Promise<AdminBadgeDeleteByCodeResponse> {
    return deleteFromApi(`badges/${badgeCode}`);
  }
}

export const adminBadgeService: AdminBadgeService = new AdminBadgeService();
