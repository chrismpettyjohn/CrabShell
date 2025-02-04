import { A, useLocation } from "@solidjs/router";
import { JSX } from "solid-js";
import { UserGuard } from "../user-guard/UserGuard";
import { IMAGER_BASE_URL } from "../../App.const";
import { useAuth } from "../../context/AuthContext";

export interface UserLayoutProps {
  children: JSX.Element;
}

const SIDEBAR_LINKS = [
  { path: "/dashboard", icon: "fa-home", label: "Dashboard" },
  { path: "/users", icon: "fa-users", label: "Users" },
  { path: "/ranks", icon: "fa-shield", label: "Ranks" },
  { path: "/articles", icon: "fa-newspaper", label: "Articles" },
  { path: "/emulator/settings", icon: "fa-wrench", label: "Settings" },
  { path: "/logout", icon: "fa-sign-out", label: "Logout" },
];

export function UserLayout({ children }: UserLayoutProps) {
  const { user } = useAuth();
  const location = useLocation();
  return (
    <UserGuard>
      <header>
        <div class="brand-container">
          <div style="display:flex;justify-content: center;align-items: center;gap:4px;">
            <img class="logo" src="/img/logo.png" style="height: 60px;" />
          </div>
        </div>
        <div class="text-logo">CrabShell</div>
      </header>
      <div id="sidebar">
        <div class="user-area">
          <div class="avatar-container">
            <img
              class="avatar"
              src={`${IMAGER_BASE_URL}?figure=${user()?.look}&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif`}
            />
          </div>
          <br />
          <h2 style="margin:0;">{user()?.username}</h2>
          <p style="margin:0;">Big Daddy</p>
        </div>
        <div class="navigation">
          {SIDEBAR_LINKS.map(({ path, icon, label }) => {
            const currentBase = location.pathname
              .split("/")
              .slice(0, 2)
              .join("/"); // Extract first two segments
            const linkBase = path.split("/").slice(0, 2).join("/"); // Extract first two segments from link
            const isActive = currentBase === linkBase;

            return (
              <A href={path} class={`${isActive ? "current" : ""}`.trim()}>
                <i class={`fa ${icon}`} />
                {label}
              </A>
            );
          })}
        </div>
        <footer>
          <A href="/about">
            <b>CrabShell</b>
          </A>
        </footer>
      </div>
      <main>
        <div class="main-content">{children}</div>
      </main>
    </UserGuard>
  );
}
