import { RankScope } from "@crabshell/public-client";
import { createEffect, JSX } from "solid-js";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "@solidjs/router";

export interface ScopeGuardProps {
  children: JSX.Element;
  scope: RankScope;
  redirect?: boolean;
}

export function ScopeGuard({
  children,
  scope,
  redirect = false,
}: ScopeGuardProps) {
  const { user, rank } = useAuth();
  const navigate = useNavigate();

  createEffect(() => {
    if (!!rank()?.scopes?.[scope]) {
      return;
    }

    if (!redirect) {
      return;
    }

    return navigate(user() ? "/me" : "/login");
  });

  if (!rank()?.scopes?.[scope]) {
    return null;
  }

  return children;
}
