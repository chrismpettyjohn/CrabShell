import { AdminUserWire } from "../user/user.types";

export interface AuthLoginParams {
  username: string;
  password: string;
}

export type AuthLoginResponse = AdminUserWire;

export type AuthProfileResponse = AdminUserWire;
