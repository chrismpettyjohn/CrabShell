import { authService, UserWire } from "@crabshell/public-client";
import {
  createContext,
  useContext,
  createSignal,
  type Component,
  type JSX,
  onMount,
  createEffect,
  Show,
} from "solid-js";
import toast from "solid-toast";

interface AuthContextValue {
  user: () => UserWire | null;
  setUser: (user: UserWire | null) => void;
}

const AuthContext = createContext<AuthContextValue>();

export const AuthProvider: Component<{ children: JSX.Element }> = (props) => {
  const [loading, setLoading] = createSignal(true);
  const [user, setUser] = createSignal<UserWire | null>(null);

  onMount(async () => {
    try {
      const currUser = await authService.viewAuthenticatedUser();
      setUser(currUser);
      toast.success(`Welcome back, ${currUser.username}`);
    } finally {
      setLoading(false);
    }
  });

  return (
    <Show when={!loading()} fallback={<i class="fa fa-spin fa-spinner" />}>
      <AuthContext.Provider value={{ user, setUser }}>
        {props.children}
      </AuthContext.Provider>
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
