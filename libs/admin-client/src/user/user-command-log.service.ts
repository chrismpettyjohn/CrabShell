import { fetchFromApi } from "../client.const";
import { AdminUserCommandLogResponse } from "./user-command-log.types";

export class AdminUserCommandLogService {
  public getAll(): Promise<AdminUserCommandLogResponse> {
    return fetchFromApi("users/command-logs");
  }

  public getByUserId(userId: number): Promise<AdminUserCommandLogResponse> {
    return fetchFromApi(`users/${userId}/command-logs`);
  }

  public getByUsername(username: string): Promise<AdminUserCommandLogResponse> {
    return fetchFromApi(`users/${username}/command-logs`);
  }
}

export const adminUserChatlogService: AdminUserCommandLogService =
  new AdminUserCommandLogService();
