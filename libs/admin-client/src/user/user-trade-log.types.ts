import { UserWire } from "@crabshell/public-client";

export enum AdminUserTradeLogResult {
  Success = "yes",
  Failure = "no",
}

export interface AdminUserTradeLogWire {
  userId: number;
  timestamp: number;
  command: string;
  params: string;
  result: AdminUserTradeLogResult;
  user: UserWire;
}

export type AdminUserTradeLogResponse = AdminUserTradeLogWire[];
