import { UserWire } from "@crabshell/client";
import {
  createContext,
  useContext,
  createSignal,
  type Component,
  type JSX,
} from "solid-js";

interface AuthContextValue {
  user: () => UserWire | null;
  setUser: (user: UserWire | null) => void;
}

const AuthContext = createContext<AuthContextValue>();

export const AuthProvider: Component<{ children: JSX.Element }> = (props) => {
  const [user, setUser] = createSignal<UserWire | null>(null);

  const value = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
