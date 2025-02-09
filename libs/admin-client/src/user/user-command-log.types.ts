import { UserWire } from "@crabshell/public-client";

export enum AdminUserCommandLogResult {
  Success = "yes",
  Failure = "no",
}

export interface AdminUserCommandLogWire {
  userId: number;
  timestamp: number;
  command: string;
  params: string;
  result: AdminUserCommandLogResult;
  user: UserWire;
}

export type AdminUserCommandLogResponse = AdminUserCommandLogWire[];
