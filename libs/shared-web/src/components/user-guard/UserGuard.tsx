import { createEffect, JSX, Show } from "solid-js";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "@solidjs/router";

export interface UserGuardProps {
  children: JSX.Element;
}

export function UserGuard({ children }: UserGuardProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  createEffect(() => {
    if (!user()) {
      navigate("/login", { replace: true });
    }
  });

  return (
    <Show when={!!user()} fallback="">
      {children}
    </Show>
  );
}
