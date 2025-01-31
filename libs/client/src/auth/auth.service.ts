import { fetchFromApi, postToApi } from "../client.const";
import {
  AuthLoginParams,
  AuthLoginResponse,
  AuthProfileResponse,
  AuthRegisterParams,
  AuthRegisterResponse,
} from "./auth.types";

export class AuthService {
  public login(username: string, password: string): Promise<AuthLoginResponse> {
    return postToApi<AuthLoginParams, AuthLoginResponse>("auth/login", {
      username,
      password,
    });
  }

  public register(
    email: string,
    username: string,
    password: string,
    passwordAgain: string
  ): Promise<AuthRegisterResponse> {
    return postToApi<AuthRegisterParams, AuthRegisterResponse>(
      "auth/register",
      {
        email,
        username,
        password,
        passwordAgain,
      }
    );
  }

  public viewAuthenticatedUser(): Promise<AuthProfileResponse> {
    return fetchFromApi("auth/profile");
  }

  public generateSSO(): Promise<string> {
    return fetchFromApi("auth/sso");
  }

  public async logout(): Promise<void> {
    await postToApi("auth/logout", {});
  }
}

export const authService: AuthService = new AuthService();
