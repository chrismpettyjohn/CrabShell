import {
  deleteFromApi,
  fetchFromApi,
  patchToApi,
  postToApi,
} from "../client.const";
import {
  AdminUserDeleteByIdResponse,
  AdminUserGetAllResponse,
  AdminUserGetByIdResponse,
  AdminUserUpdateByIdParams,
  AdminUserUpdateByIdResponse,
  AdminUserGetByUsernameResponse,
  AdminUserUpdateByUsernameParams,
  AdminUserUpdateByUsernameResponse,
} from "./user.types";

export class AdminUserService {
  public getAll(): Promise<AdminUserGetAllResponse> {
    return fetchFromApi("users");
  }

  public getById(userId: number): Promise<AdminUserGetByIdResponse> {
    return fetchFromApi(`users/${userId}`);
  }

  public getByUsername(
    username: string
  ): Promise<AdminUserGetByUsernameResponse> {
    return fetchFromApi(`users/${username}`);
  }

  public updateById(
    userId: number,
    dto: AdminUserUpdateByIdParams
  ): Promise<AdminUserUpdateByIdResponse> {
    return patchToApi(`users/${userId}`, dto);
  }

  public updateByUsername(
    username: string,
    dto: AdminUserUpdateByUsernameParams
  ): Promise<AdminUserUpdateByUsernameResponse> {
    return patchToApi(`users/${username}`, dto);
  }

  public deleteById(userId: number): Promise<AdminUserDeleteByIdResponse> {
    return deleteFromApi(`users/${userId}`);
  }
}

export const adminUserService: AdminUserService = new AdminUserService();
