import { UserWire } from "@crabshell/public-client";

export interface AdminUserNameChangeLogWire {
  user: UserWire;
}

export type AdminUserNameChangeLogResponse = AdminUserNameChangeLogWire[];
