import { UserWire } from "../user/user.types";

export interface RankWire {
  id: number;
  name: string;
  badge: string;
  members: UserWire[];
}
