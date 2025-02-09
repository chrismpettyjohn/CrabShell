import { createResource, createSignal } from "solid-js";
import { useAuth } from "@crabshell/shared-web";
import { authService } from "@crabshell/public-client";

export function createAuthLogout() {
  const { setUser } = useAuth();
  const [error, setError] = createSignal<string | null>(null);

  async function logoutFetcher(trigger: boolean | undefined) {
    if (!trigger) return null;

    try {
      await authService.logout();
      setUser(null);
      return true;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      throw err;
    }
  }

  const [trigger, setTrigger] = createSignal<boolean>();
  const [resource] = createResource(trigger, logoutFetcher);

  const execute = async () => {
    setError(null);
    setTrigger(true);
    return resource;
  };

  return {
    execute,
    isLoading: resource.loading,
    error,
    result: resource,
  };
}
