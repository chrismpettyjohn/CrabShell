import { UserWire } from "../user/user.types";

export interface GroupWire {
  id: number;
  name: string;
  badge: string;
  createdAt: number;
  users: UserWire[];
}

export type GroupsNewestResponse = GroupWire[];
export type GroupsPopularResponse = GroupWire[];
export type GroupsByUserIdResponse = GroupWire[];
