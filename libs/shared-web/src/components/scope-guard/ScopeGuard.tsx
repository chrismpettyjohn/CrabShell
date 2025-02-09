import { RankScope } from "@crabshell/admin-client";
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
  const { user } = useAuth();
  const navigate = useNavigate();

  createEffect(() => {
    if (!!user()?.rank?.scopes?.[scope]) {
      return;
    }

    if (!redirect) {
      return;
    }

    return navigate(user() ? "/me" : "/login");
  });

  if (!user()?.rank?.scopes?.[scope]) {
    return null;
  }

  return children;
}
