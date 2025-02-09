import { adminRankService, AdminRankWire } from "@crabshell/admin-client";
import { authService, AdminUserWire } from "@crabshell/admin-client";
import { ranksService } from "@crabshell/public-client";
import {
  createContext,
  useContext,
  createSignal,
  type Component,
  type JSX,
  onMount,
  Show,
  createEffect,
} from "solid-js";

interface AuthContextValue {
  user: () => AdminUserWire | null;
  rank: () => AdminRankWire | null;
  setUser: (user: AdminUserWire | null) => void;
}

const AuthContext = createContext<AuthContextValue>();

export const AuthProvider: Component<{ children: JSX.Element }> = (props) => {
  const [loading, setLoading] = createSignal(true);
  const [user, setUser] = createSignal<AdminUserWire | null>(null);
  const [rank, setRank] = createSignal<AdminRankWire | null>(null);

  onMount(async () => {
    try {
      const currUser = await authService.viewAuthenticatedUser();
      if (currUser) {
        const currRank = await ranksService.getById(currUser.rankID);
        setUser(currUser);
        setRank(currRank);
      }
    } finally {
      setLoading(false);
    }
  });

  createEffect(() => {
    if (user() == null) {
      setRank(null);
      return;
    }

    (async () => {
      const rankID = user()?.rankID;
      if (rankID) {
        const updatedRank = await ranksService.getById(rankID);
        setRank(updatedRank);
      }
    })();
  });

  return (
    <Show when={!loading()} fallback={<i class="fa fa-spin fa-spinner" />}>
      <AuthContext.Provider value={{ user, setUser, rank }}>
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
