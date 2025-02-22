import { AdminUserWire } from "../user/user.types";

export interface AuthLoginParams {
  username: string;
  password: string;
}

export interface AuthLoginResponse {
  token: string;
  user: AdminUserWire;
}

export type AuthProfileResponse = AdminUserWire;
