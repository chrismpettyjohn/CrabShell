import { UserWire } from "../user/user.types";

export interface RankWire {
  id: number;
  name: string;
  badgeCode: string;
  members: UserWire[];
}
