import { UserWire } from "@crabshell/public-client";

export interface AdminUserPublicMessageLogWire {
  id: number;
  roomID: number;
  userID: number;
  sentToUserID: number;
  message: string;
  timestamp: number;
  user: UserWire;
}

export type AdminUserPublicMessageLogResponse = AdminUserPublicMessageLogWire[];
