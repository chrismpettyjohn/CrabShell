import {
  deleteFromApi,
  fetchFromApi,
  patchToApi,
  postToApi,
} from "../client.const";
import {
  AdminRankCreateParams,
  AdminRankCreateResponse,
  AdminRankDeleteByIdResponse,
  AdminRankGetAllResponse,
  AdminRankGetByIdResponse,
  AdminRankUpdateByIdParams,
  AdminRankUpdateByIdResponse,
} from "./rank.types";

export class AdminRankService {
  public create(dto: AdminRankCreateParams): Promise<AdminRankCreateResponse> {
    return postToApi("ranks", dto);
  }

  public getAll(): Promise<AdminRankGetAllResponse> {
    return fetchFromApi("ranks");
  }

  public getById(rankId: number): Promise<AdminRankGetByIdResponse> {
    return fetchFromApi(`ranks/${rankId}`);
  }

  public updateById(
    rankId: number,
    dto: AdminRankUpdateByIdParams
  ): Promise<AdminRankUpdateByIdResponse> {
    return patchToApi(`ranks/${rankId}`, dto);
  }

  public deleteById(rankId: number): Promise<AdminRankDeleteByIdResponse> {
    return deleteFromApi(`ranks/${rankId}`);
  }
}

export const adminRankService: AdminRankService = new AdminRankService();
