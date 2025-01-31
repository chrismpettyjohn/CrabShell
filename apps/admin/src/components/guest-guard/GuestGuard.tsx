import { createEffect, JSX } from "solid-js";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "@solidjs/router";

export interface GuestGuardProps {
  children: JSX.Element;
}

export function GuestGuard({ children }: GuestGuardProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  createEffect(() => {
    if (user()) {
      navigate("/dashboard", { replace: true });
    }
  });

  return !user() ? children : null;
}
