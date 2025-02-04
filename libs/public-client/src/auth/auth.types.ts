import { UserWire } from "../user/user.types";

export interface AuthLoginParams {
  username: string;
  password: string;
}

export type AuthLoginResponse = UserWire;

export interface AuthRegisterParams {
  email: string;
  username: string;
  password: string;
  passwordAgain: string;
}

export type AuthRegisterResponse = UserWire;
export type AuthProfileResponse = UserWire;
