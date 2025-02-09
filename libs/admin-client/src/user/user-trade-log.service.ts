import { fetchFromApi } from "../client.const";
import { AdminUserTradeLogResponse } from "./user-trade-log.types";

export class AdminUserTradeLogService {
  public getAll(): Promise<AdminUserTradeLogResponse> {
    return fetchFromApi("users/trade-logs");
  }

  public getByUserId(userId: number): Promise<AdminUserTradeLogResponse> {
    return fetchFromApi(`users/${userId}/trade-logs`);
  }

  public getByUsername(username: string): Promise<AdminUserTradeLogResponse> {
    return fetchFromApi(`users/${username}/trade-logs`);
  }
}

export const adminUserTradeLogService: AdminUserTradeLogService =
  new AdminUserTradeLogService();
