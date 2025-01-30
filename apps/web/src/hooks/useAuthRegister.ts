import { createResource, createSignal } from "solid-js";
import { useAuth } from "../context/AuthContext";
import { AuthRegisterParams, authService } from "@crabshell/client";

export function createAuthRegister() {
  const { setUser } = useAuth();
  const [error, setError] = createSignal<string | null>(null);

  async function registerFetcher(credentials: AuthRegisterParams) {
    if (!credentials) return null;

    try {
      const response = await authService.register(
        credentials.email,
        credentials.username,
        credentials.password,
        credentials.passwordAgain
      );
      setUser(response);
      return response;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      throw err;
    }
  }

  const [credentials, setCredentials] = createSignal<AuthRegisterParams>();
  const [resource] = createResource(credentials, registerFetcher);

  const execute = async (
    username: string,
    password: string,
    passwordAgain: string,
    email: string
  ) => {
    setError(null);
    setCredentials({ username, password, passwordAgain, email });
    return resource;
  };

  return {
    execute,
    isLoading: resource.loading,
    error,
    result: resource,
  };
}
