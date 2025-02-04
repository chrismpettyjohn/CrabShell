import { usersService, UserWire } from "@crabshell/public-client";
import {
  createContext,
  useContext,
  createSignal,
  type Component,
  type JSX,
  onMount,
} from "solid-js";

interface OnlineUsersContextValue {
  onlineUsers(): UserWire[];
}

const OnlineUsersContext = createContext<OnlineUsersContextValue>();

export const OnlineUsersProvider: Component<{ children: JSX.Element }> = (
  props
) => {
  const [onlineUsers, setOnlineUsers] = createSignal<UserWire[]>([]);

  onMount(async () => {
    const response = await usersService.getOnlineUsers();
    setOnlineUsers(response);
  });

  return (
    <OnlineUsersContext.Provider value={{ onlineUsers }}>
      {props.children}
    </OnlineUsersContext.Provider>
  );
};

export function useOnlineUsers() {
  const context = useContext(OnlineUsersContext);
  if (!context) {
    throw new Error(
      "useOnlineUsers must be used within an OnlineUsersProvider"
    );
  }
  return context;
}
