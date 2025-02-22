import { UserWire } from "../user/user.types";

export interface AuthLoginParams {
  username: string;
  password: string;
}

export interface AuthLoginResponse {
  token: string;
  user: UserWire;
}

export interface AuthRegisterParams {
  email: string;
  username: string;
  password: string;
  passwordAgain: string;
}

export interface AuthRegisterResponse {
  token: string;
  user: UserWire;
}

export type AuthProfileResponse = UserWire;
