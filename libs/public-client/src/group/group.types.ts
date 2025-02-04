export interface GroupWire {
  id: number;
  name: string;
  badge: string;
}

export type GroupsNewestResponse = GroupWire[];
export type GroupsPopularResponse = GroupWire[];
export type GroupsByUserIdResponse = GroupWire[];
