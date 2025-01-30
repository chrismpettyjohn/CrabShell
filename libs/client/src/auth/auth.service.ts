import { fetchFromApi, postToApi } from "../client.const";
import {
  AuthLoginData,
  AuthLoginParams,
  AuthProfileData,
  AuthRegisterData,
  AuthRegisterParams,
} from "./auth.types";

export class AuthService {
  public login(email: string, password: string): Promise<AuthLoginData> {
    return postToApi<AuthLoginParams, AuthLoginData>("auth/login", {
      email,
      password,
    });
  }

  public register(
    email: string,
    username: string,
    password: string,
    passwordAgain: string
  ): Promise<AuthRegisterData> {
    return postToApi<AuthRegisterParams, AuthRegisterData>("auth/register", {
      email,
      username,
      password,
      passwordAgain,
    });
  }

  public viewAuthenticatedUser(): Promise<AuthProfileData> {
    return fetchFromApi("auth/profile");
  }

  public async logout(): Promise<void> {
    await postToApi("auth/logout", {});
  }
}

export const authService: AuthService = new AuthService();
