import { createEffect, JSX } from "solid-js";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "@solidjs/router";

export interface GuardGuestProps {
  children: JSX.Element;
}

export function GuardGuest({ children }: GuardGuestProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  createEffect(() => {
    if (user()) {
      navigate("/me", { replace: true });
    }
  });

  return !user() ? children : null;
}
