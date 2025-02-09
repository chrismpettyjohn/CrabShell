import { authService, AdminUserWire } from "@crabshell/admin-client";
import {
  createContext,
  useContext,
  createSignal,
  type Component,
  type JSX,
  onMount,
  Show,
} from "solid-js";

interface AuthContextValue {
  user: () => AdminUserWire | null;
  setUser: (user: AdminUserWire | null) => void;
}

const AuthContext = createContext<AuthContextValue>();

export const AuthProvider: Component<{ children: JSX.Element }> = (props) => {
  const [loading, setLoading] = createSignal(true);
  const [user, setUser] = createSignal<AdminUserWire | null>(null);

  onMount(async () => {
    try {
      const currUser = await authService.viewAuthenticatedUser();
      if (currUser) {
        setUser(currUser);
      }
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
