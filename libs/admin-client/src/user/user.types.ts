import { UserWire } from "@crabshell/public-client";

export interface AdminUserWire extends UserWire {
  id: number;
  username: string;
  look: string;
}

export type AdminUserUpdateByIdParams = Partial<AdminUserWire>;

export type AdminUserUpdateByIdResponse = boolean;

export type AdminUserGetAllResponse = UserWire[];

export type AdminUserGetByIdResponse = UserWire;

export type AdminUserDeleteByIdResponse = boolean;
