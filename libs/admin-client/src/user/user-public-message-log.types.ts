import { UserWire } from "@crabshell/public-client";

export interface AdminUserPublicMessageLogWire {
  user: UserWire;
}

export type AdminUserPublicMessageLogResponse = AdminUserPublicMessageLogWire[];
