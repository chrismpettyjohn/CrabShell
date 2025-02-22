import { UserWire } from "@crabshell/public-client";
import { createContext, useContext, createSignal, type Component, type JSX, onMount, Show } from "solid-js";
import { jwtDecode } from "jwt-decode";
import { CRAB_SESSION_STORAGE } from "@crabshell/public-client";
import toast from "solid-toast";

interface AuthContextValue {
  user: () => UserWire | null;
  setUser: (user: UserWire | null) => void;
}

const AuthContext = createContext<AuthContextValue>();

export const AuthProvider: Component<{ children: JSX.Element }> = (props) => {
  const [loading, setLoading] = createSignal(true);
  const [user, setUser] = createSignal<UserWire | null>(null);

  onMount(() => {
    try {
      const token = localStorage.getItem(CRAB_SESSION_STORAGE);
      if (token) {
        const decoded = jwtDecode<{ user: UserWire; exp: number }>(token);
        const currentTime = Math.floor(Date.now() / 1000);
        if (decoded.exp > currentTime) {
          setUser(decoded.user);
          return;
        }
        toast.error(`You've been logged out`);
        localStorage.removeItem(CRAB_SESSION_STORAGE);
      }
    } finally {
      setLoading(false);
    }
  });

  return (
    <Show when={!loading()} fallback={<i class="fa fa-spin fa-spinner" />}>
      <AuthContext.Provider value={{ user, setUser }}>{props.children}</AuthContext.Provider>
    </Show>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
