import { UserWire } from "@crabshell/public-client";

export interface AdminUserRoomEnterLogWire {
  id: number;
  roomID: number;
  userID: number;
  enteredAt: number;
  leftAt: number;
  user: UserWire;
}

export type AdminUserRoomEnterLogResponse = AdminUserRoomEnterLogWire[];
