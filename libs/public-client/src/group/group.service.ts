import { fetchFromApi } from "../client.const";
import { GroupsByUserIdResponse, GroupsNewestResponse, GroupsPopularResponse, GroupWire } from "./group.types";

export class GroupsService {
  public getPopularGroups(): Promise<GroupsPopularResponse> {
    return fetchFromApi("groups/popular");
  }

  public getNewestGroups(): Promise<GroupsNewestResponse> {
    return fetchFromApi("groups/newest");
  }

  public getGroupsByUserId(userId: number): Promise<GroupsByUserIdResponse> {
    return fetchFromApi(`users/${userId}/groups`);
  }

  public getById(id: number): Promise<GroupWire> {
    return fetchFromApi(`groups/${id}`);
  }
}

export const groupsService: GroupsService = new GroupsService();
