import { UserWire } from "@crabshell/public-client";

export interface AdminUserTradeLogWire {
  id: number;
  userOneID: number;
  userOneIpAddress: string;
  userOneitemCount: number;
  userTwoID: number;
  userTwoIpAddress: string;
  userTwoitemCount: number;
  timestamp: number;
  userOne: UserWire;
  userTwo: UserWire;
}

export type AdminUserTradeLogResponse = AdminUserTradeLogWire[];
