import { createContext, useContext } from "solid-js";
import { createSignal, createEffect } from "solid-js";

// Define user type
type User = {
  id: string;
  username: string;
  figure: string;
} | null;

// Create context type
type SessionContextType = {
  user: () => User;
  setUser: (user: User) => void;
};

// Create context
const SessionContext = createContext<SessionContextType>();

export const SessionProvider = (props: { children: any }) => {
  // Initialize user state from localStorage
  const [user, setUser] = createSignal<User>(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  // Sync with localStorage whenever user changes
  createEffect(() => {
    if (user()) {
      localStorage.setItem("user", JSON.stringify(user()));
    } else {
      localStorage.removeItem("user");
    }
  });

  return (
    <SessionContext.Provider value={{ user, setUser }}>
      {props.children}
    </SessionContext.Provider>
  );
};

// Custom Hook to use session
export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context)
    throw new Error("useSession must be used within a SessionProvider");
  return context;
};
