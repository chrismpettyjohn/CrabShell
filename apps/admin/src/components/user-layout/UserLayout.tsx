import { A } from "@solidjs/router";
import { JSX } from "solid-js";
import { UserGuard } from "../user-guard/UserGuard";

export interface UserLayoutProps {
  children: JSX.Element;
}

export function UserLayout({ children }: UserLayoutProps) {
  return (
    <UserGuard>
      <main>{children}</main>
      <A href="/about">
        <b>ExoSkeleton</b>
      </A>
    </UserGuard>
  );
}
