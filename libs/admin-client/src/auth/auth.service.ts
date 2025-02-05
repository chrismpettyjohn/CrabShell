import { fetchFromApi, postToApi } from "../client.const";
import {
  AuthLoginParams,
  AuthLoginResponse,
  AuthProfileResponse,
} from "./auth.types";

export class AuthService {
  public login(username: string, password: string): Promise<AuthLoginResponse> {
    return postToApi<AuthLoginParams, AuthLoginResponse>("auth/login", {
      username,
      password,
    });
  }
  public viewAuthenticatedUser(): Promise<AuthProfileResponse> {
    return fetchFromApi("auth/profile");
  }

  public async logout(): Promise<void> {
    await postToApi("auth/logout", {});
  }
}

export const authService: AuthService = new AuthService();
