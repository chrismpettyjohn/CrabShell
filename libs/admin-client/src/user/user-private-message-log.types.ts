import { UserWire } from "@crabshell/public-client";

export interface AdminUserPrivateMessageLogWire {
  user: UserWire;
}

export type AdminUserPrivateMessageLogResponse =
  AdminUserPrivateMessageLogWire[];
