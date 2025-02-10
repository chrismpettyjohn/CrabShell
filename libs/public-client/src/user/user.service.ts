import { fetchFromApi } from "../client.const";
import { UserByIdResponse, UsersOnlineResponse } from "./user.types";

export class UsersService {
  public getOnlineUsers(): Promise<UsersOnlineResponse> {
    return fetchFromApi("users/online");
  }

  public getNewestUsers(): Promise<UsersOnlineResponse> {
    return fetchFromApi("users/newest");
  }
  public getById(userId: number): Promise<UserByIdResponse> {
    return fetchFromApi(`users/${userId}`);
  }
  public getByUsername(username: string): Promise<UserByIdResponse> {
    return fetchFromApi(`users/${username}`);
  }

  public getFriends(userId: number): Promise<UsersOnlineResponse> {
    return fetchFromApi(`users/${userId}/friends`);
  }
}

export const usersService: UsersService = new UsersService();
