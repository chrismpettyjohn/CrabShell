import { createSignal, createContext, useContext, onMount } from "solid-js";
import { authService, AuthProfileData } from "@crabshell/client";

const AuthContext = createContext();

export function AuthProvider(props: any) {
  const [user, setUser] = createSignal();
  const [loading, setLoading] = createSignal(true);
  const [error, setError] = createSignal();

  // Auto-login by checking cookies via API
  onMount(async () => {
    try {
      const authenticatedUser = await authService.viewAuthenticatedUser();
      if (authenticatedUser) {
        setUser(authenticatedUser);
      }
    } catch (err) {
      console.error("Auto-login failed", err);
    } finally {
      setLoading(false);
    }
  });

  // Login function
  const login = async (username: string, password: string) => {
    setError(null);
    try {
      const response = await authService.login(username, password);
      setUser(response);
      return { success: true };
    } catch (err) {
      setError("Invalid credentials");
      return { success: false, error: "Invalid credentials" };
    }
  };

  // Register function
  const register = async (
    email: string,
    username: string,
    password: string,
    passwordAgain: string
  ) => {
    setError(null);
    try {
      const response = await authService.register(
        email,
        username,
        password,
        passwordAgain
      );
      setUser(response);
      return { success: true };
    } catch (err) {
      setError("Registration failed");
      return { success: false, error: "Registration failed" };
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, loading, error }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
