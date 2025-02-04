import { UserWire } from "@crabshell/public-client";

export interface AdminUserWire extends UserWire {
  id: number;
  username: string;
  look: string;
}

export interface AdminUserCreateParams {
  username: string;
  look: string;
}

export type AdminUserCreateResponse = UserWire;

export type AdminUserUpdateByIdParams = Partial<AdminUserCreateParams>;

export type AdminUserUpdateByIdResponse = boolean;

export type AdminUserGetAllResponse = UserWire[];

export type AdminUserGetByIdResponse = UserWire;

export type AdminUserDeleteByIdResponse = boolean;
