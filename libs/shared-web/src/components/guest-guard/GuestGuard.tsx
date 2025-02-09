import { createEffect, JSX } from "solid-js";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "@solidjs/router";
import { GUEST_REDIRECT_URL } from "../../const";

export interface GuestGuardProps {
  children: JSX.Element;
}

export function GuestGuard({ children }: GuestGuardProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  createEffect(() => {
    if (user()) {
      navigate(GUEST_REDIRECT_URL, { replace: true });
    }
  });

  return !user() ? children : null;
}
