import { fetchFromApi } from "../client.const";
import { AdminUserPrivateMessageLogResponse } from "./user-private-message-log.types";

export class AdminUserPrivateMessageLogService {
  public getAll(): Promise<AdminUserPrivateMessageLogResponse> {
    return fetchFromApi("users/private-message-logs");
  }

  public getByUserId(
    userId: number
  ): Promise<AdminUserPrivateMessageLogResponse> {
    return fetchFromApi(`users/${userId}/private-message-logs`);
  }

  public getByUsername(
    username: string
  ): Promise<AdminUserPrivateMessageLogResponse> {
    return fetchFromApi(`users/${username}/private-message-logs`);
  }
}

export const adminUserPrivateMessageLogService: AdminUserPrivateMessageLogService =
  new AdminUserPrivateMessageLogService();
