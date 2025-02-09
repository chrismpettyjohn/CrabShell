import { UserWire } from "@crabshell/public-client";

export interface AdminUserTradeLogWire {
  id: number;
  userOneID: number;
  userOneIpAddress: string;
  userOneItemID: number;
  userTwoID: number;
  userTwoIpAddress: string;
  userTwoItemID: number;
  timestamp: number;
  userOne: UserWire;
  userTwo: UserWire;
}

export type AdminUserTradeLogResponse = AdminUserTradeLogWire[];
