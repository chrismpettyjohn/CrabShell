import { fetchFromApi } from "../client.const";
import { AdminUserNameChangeLogResponse } from "./user-name-change-log.types";

export class AdminUserNameChangeLogService {
  public getAll(): Promise<AdminUserNameChangeLogResponse> {
    return fetchFromApi("users/name-change-logs");
  }

  public getByUserId(userId: number): Promise<AdminUserNameChangeLogResponse> {
    return fetchFromApi(`users/${userId}/name-change-logs`);
  }

  public getByUsername(
    username: string
  ): Promise<AdminUserNameChangeLogResponse> {
    return fetchFromApi(`users/${username}/name-change-logs`);
  }
}

export const adminUserNameChangeLogService: AdminUserNameChangeLogService =
  new AdminUserNameChangeLogService();
