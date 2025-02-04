import { authService, UserWire } from "@crabshell/public-client";
import {
  createContext,
  useContext,
  createSignal,
  type Component,
  type JSX,
  onMount,
} from "solid-js";

interface AuthContextValue {
  user: () => UserWire | null;
  setUser: (user: UserWire | null) => void;
}

const AuthContext = createContext<AuthContextValue>();

export const AuthProvider: Component<{ children: JSX.Element }> = (props) => {
  const [user, setUser] = createSignal<UserWire | null>(null);

  onMount(async () => {
    const currUser = await authService.viewAuthenticatedUser();
    setUser(currUser);
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
