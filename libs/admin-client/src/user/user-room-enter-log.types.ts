import { UserWire } from "@crabshell/public-client";

export interface AdminUserRoomEnterLogWire {
  user: UserWire;
}

export type AdminUserRoomEnterLogResponse = AdminUserRoomEnterLogWire[];
