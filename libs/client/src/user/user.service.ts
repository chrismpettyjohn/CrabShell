import { fetchFromApi, postToApi } from "../client.const";
import { UsersOnlineResponse } from "./user.types";

export class UsersService {
  public getOnlineUsers(): Promise<UsersOnlineResponse> {
    return fetchFromApi("users/online");
  }
}

export const usersService: UsersService = new UsersService();
