import { JSX } from "solid-js";
import { UserLayout } from "../../components/user-layout/UserLayout";
import { A } from "@solidjs/router";

export interface LoggingLayoutProps {
  children: JSX.Element;
}

export function LoggingLayout({ children }: LoggingLayoutProps) {
  return (
    <UserLayout>
      <div style="display:flex;justify-content:center;align-items:center;gap:14px;width:100%;margin-bottom:14px;">
        <A href="/logs/commands">Commands</A>
        <A href="/logs/namechange">Name Changes</A>
        <A href="/logs/private-chat">Private Messages</A>
        <A href="/logs/room-enters">Room Enters</A>
        <A href="/logs/room-trades">Room Trades</A>
      </div>
      {children}
    </UserLayout>
  );
}
