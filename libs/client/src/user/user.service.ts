import { fetchFromApi } from "../client.const";
import { UsersOnlineResponse } from "./user.types";

export class UsersService {
  public getOnlineUsers(): Promise<UsersOnlineResponse> {
    return fetchFromApi("users/online");
  }

  public getNewestUsers(): Promise<UsersOnlineResponse> {
    return fetchFromApi("users/newest");
  }

  public getFriends(userId: number): Promise<UsersOnlineResponse> {
    return fetchFromApi(`users/${userId}/friends`);
  }
}

export const usersService: UsersService = new UsersService();
