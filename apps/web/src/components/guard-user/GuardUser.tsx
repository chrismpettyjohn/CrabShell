import { createEffect, JSX } from "solid-js";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "@solidjs/router";

export interface GuardUserProps {
  children: JSX.Element;
}

export function GuardUser({ children }: GuardUserProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  createEffect(() => {
    if (!user()) {
      navigate("/login", { replace: true });
    }
  });

  return !user() ? children : null;
}
