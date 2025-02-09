import { fetchFromApi } from "../client.const";
import { AdminUserRoomEnterLogResponse } from "./user-room-enter-log.types";

export class AdminUserRoomEnterLogService {
  public getAll(): Promise<AdminUserRoomEnterLogResponse> {
    return fetchFromApi("users/room-enter-logs");
  }

  public getByUserId(userId: number): Promise<AdminUserRoomEnterLogResponse> {
    return fetchFromApi(`users/${userId}/room-enter-logs`);
  }

  public getByUsername(
    username: string
  ): Promise<AdminUserRoomEnterLogResponse> {
    return fetchFromApi(`users/${username}/room-enter-logs`);
  }
}

export const adminUserRoomEnterLogService: AdminUserRoomEnterLogService =
  new AdminUserRoomEnterLogService();
