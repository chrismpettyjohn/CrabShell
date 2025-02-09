import { UserWire } from "@crabshell/public-client";

export interface AdminUserNameChangeLogWire {
  id: number;
  userID: number;
  oldName: string;
  newName: string;
  timestamp: number;
  user: UserWire;
}

export type AdminUserNameChangeLogResponse = AdminUserNameChangeLogWire[];
