import { A, useLocation } from "@solidjs/router";
import { JSX } from "solid-js";
import { IMAGER_BASE_URL, MAIN_SITE_URL } from "../../App.const";
import { RankScope } from "@crabshell/admin-client";
import { ScopeGuard, useAuth, UserGuard } from "@crabshell/shared-web";

export interface UserLayoutProps {
  children: JSX.Element;
}

const SIDEBAR_LINKS: Array<{
  path: string;
  icon: string;
  label: string;
  scope?: RankScope;
  css?: string;
}> = [
  {
    path: "/dashboard",
    icon: "fa-home",
    label: "Dashboard",
    scope: RankScope.ADMIN_PANEL,
  },
  {
    path: "/bans",
    icon: "fa-ban",
    label: "Bans",
    scope: RankScope.MANAGE_BANS,
  },
  {
    path: "/users",
    icon: "fa-users",
    label: "Users",
    scope: RankScope.MANAGE_USERS,
  },
  {
    path: "/ranks",
    icon: "fa-shield",
    label: "Ranks",
    scope: RankScope.MANAGE_RANKS,
  },
  {
    path: "/articles",
    icon: "fa-newspaper",
    label: "Articles",
    scope: RankScope.MANAGE_ARTICLES,
  },
  {
    path: "/badges",
    icon: "fa-id-badge",
    label: "Badges",
    scope: RankScope.MANAGE_BADGES,
  },
  {
    path: "/furniture",
    icon: "fa-chair",
    label: "Furniture",
    scope: RankScope.MANAGE_FURNITURE,
  },
  {
    path: "/catalog/pages",
    icon: "fa-store",
    label: "Catalog",
    scope: RankScope.MANAGE_FURNITURE,
  },
  {
    path: "/emulator/settings",
    icon: "fa-wrench",
    label: "Settings",
    scope: RankScope.MANAGE_EMU,
  },
  {
    path: "/logs/public-chat",
    icon: "fa-magnifying-glass",
    label: "Logging",
    scope: RankScope.MANAGE_LOGS,
  },
  {
    path: "/logout",
    icon: "fa-sign-out",
    label: "Sign Out",
    scope: undefined,
  },
  {
    path: MAIN_SITE_URL,
    icon: "fa-caret-left",
    label: "Back to Site",
    scope: undefined,
    css: "background:blue;color:white;",
  },
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
          <p style="margin:0;">{user()?.rank?.name}</p>
        </div>
        <div class="navigation">
          {SIDEBAR_LINKS.map(({ path, icon, label, scope, css }) => {
            const currentBase = location.pathname
              .split("/")
              .slice(0, 2)
              .join("/");
            const linkBase = path.split("/").slice(0, 2).join("/");
            const isActive = currentBase === linkBase;

            const child = (
              <A
                href={path}
                class={`${isActive ? "current" : ""}`.trim()}
                style={css}
              >
                <i class={`fa ${icon}`} />
                {label}
              </A>
            );

            if (!scope) return child;

            return (
              <ScopeGuard scope={scope} redirect={false}>
                {child}
              </ScopeGuard>
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
