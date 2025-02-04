import {
  deleteFromApi,
  fetchFromApi,
  patchToApi,
  postToApi,
} from "../client.const";
import {
  AdminUserCreateParams,
  AdminUserCreateResponse,
  AdminUserDeleteByIdResponse,
  AdminUserGetAllResponse,
  AdminUserGetByIdResponse,
  AdminUserUpdateByIdParams,
  AdminUserUpdateByIdResponse,
} from "./user.types";

export class AdminUserService {
  public create(dto: AdminUserCreateParams): Promise<AdminUserCreateResponse> {
    return postToApi("users", dto);
  }

  public getAll(): Promise<AdminUserGetAllResponse> {
    return fetchFromApi("users");
  }

  public getById(userId: number): Promise<AdminUserGetByIdResponse> {
    return fetchFromApi(`users/${userId}`);
  }

  public updateById(
    userId: number,
    dto: AdminUserUpdateByIdParams
  ): Promise<AdminUserUpdateByIdResponse> {
    return patchToApi(`users/${userId}`, dto);
  }

  public deleteById(userId: number): Promise<AdminUserDeleteByIdResponse> {
    return deleteFromApi(`users/${userId}`);
  }
}

export const adminUserService: AdminUserService = new AdminUserService();
