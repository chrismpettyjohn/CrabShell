import { UserWire } from "@crabshell/public-client";

export interface AdminUserPrivateMessageLogWire {
  id: number;
  userID: number;
  sentToUserID: number;
  message: string;
  timestamp: number;
  user: UserWire;
  sentToUser: UserWire;
}

export type AdminUserPrivateMessageLogResponse =
  AdminUserPrivateMessageLogWire[];
