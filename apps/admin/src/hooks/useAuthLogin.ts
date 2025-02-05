import { createSignal } from "solid-js";
import { useAuth } from "../context/AuthContext";
import { AuthLoginResponse, authService } from "@crabshell/admin-client";

export function createAuthLogin() {
  const { setUser } = useAuth();
  const [error, setError] = createSignal<string | null>(null);
  const [isLoading, setIsLoading] = createSignal(false);
  const [result, setResult] = createSignal<AuthLoginResponse | null>(null);

  const execute = async (email: string, password: string) => {
    setError(null);
    setIsLoading(true);
    setResult(null);

    try {
      const data: AuthLoginResponse = await authService.login(email, password);
      setResult(data);
      return { success: true, data };
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    execute,
    isLoading,
    error,
    result,
  };
}
