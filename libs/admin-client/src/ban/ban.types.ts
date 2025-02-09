import { UserWire } from "@crabshell/public-client";

export interface AdminBanWire {
  id: number;
  userId: number;
  ip: string;
  machineId: string;
  userStaffId: number;
  timestamp: number;
  banExpire: number;
  banReason: string;
  type: "temporary" | "permanent";
  cfhTopic: number;
  user?: UserWire;
}

export interface AdminBanCreateParams {
  userId: number;
  ip: string;
  machineId: string;
  userStaffId: number;
  timestamp: number;
  banExpire: number;
  banReason: string;
  type: "temporary" | "permanent";
  cfhTopic: number;
}

export type AdminBanCreateResponse = AdminBanWire;

export type AdminBanUpdateByIdParams = Partial<AdminBanCreateParams>;

export type AdminBanUpdateByIdResponse = boolean;

export type AdminBanGetAllResponse = AdminBanWire[];

export type AdminBanGetByIdResponse = AdminBanWire;

export type AdminBanDeleteByIdResponse = boolean;
