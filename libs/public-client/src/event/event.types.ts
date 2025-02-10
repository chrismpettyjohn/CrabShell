import { UserWire } from "../user/user.types";

export interface EventWire {
  id: number;
  userId: number;
  title: string;
  content: string;
  startsAt: number;
  endsAt: number;
  createdAt: number;
  updatedAt: number;
  user: UserWire;
}
