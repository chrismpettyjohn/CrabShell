import { fetchFromApi } from "../client.const";
import { AdminUserPublicMessageLogResponse } from "./user-public-message-log.types";

export class AdminUserPublicMessageLogService {
  public getAll(): Promise<AdminUserPublicMessageLogResponse> {
    return fetchFromApi("users/public-message-logs");
  }

  public getByUserId(
    userId: number
  ): Promise<AdminUserPublicMessageLogResponse> {
    return fetchFromApi(`users/${userId}/public-message-logs`);
  }

  public getByUsername(
    username: string
  ): Promise<AdminUserPublicMessageLogResponse> {
    return fetchFromApi(`users/${username}/public-message-logs`);
  }
}

export const adminUserPublicMessageLogService: AdminUserPublicMessageLogService =
  new AdminUserPublicMessageLogService();
