import { UserData } from "../user/user.types";

export interface AuthLoginParams {
  email: string;
  password: string;
}

export interface AuthLoginData {
  success: boolean;
  message?: string;
  user?: UserData;
}

export interface AuthRegisterParams {
  email: string;
  username: string;
  password: string;
  passwordAgain: string;
}

export interface AuthRegisterData {}

export type AuthProfileData = UserData;
