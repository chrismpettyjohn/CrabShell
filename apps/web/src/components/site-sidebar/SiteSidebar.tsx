import { ADMIN_PANEL_URL, SITE_NAME } from "../../App.const";
import { A, useLocation } from "@solidjs/router";
import { EnterHotelButton } from "./enter-hotel-button/EnterHotelButton";
import { UserArea } from "./user-area/UserArea";
import { RankScope } from "@crabshell/public-client";
import { ScopeGuard } from "@crabshell/shared-web";

const SIDEBAR_LINKS: Array<{
  path: string;
  icon: string;
  label: string;
  scope?: RankScope;
  css?: string;
}> = [
  { path: "/me", icon: "fa-home", label: "Dashboard", scope: undefined },
  {
    path: "/articles",
    icon: "fa-newspaper",
    label: "News Articles",
    scope: undefined,
  },
  {
    path: "/high-scores/credits",
    icon: "fa-trophy",
    label: "High Scores",
    scope: undefined,
  },
  { path: "/staff", icon: "fa-users", label: "Staff Team", scope: undefined },
  { path: "/logout", icon: "fa-sign-out", label: "Logout", scope: undefined },
];

export function SiteSidebar() {
  const location = useLocation();
  return (
    <>
      <div class="moving-bg" />
      <header>
        <div class="brand-container">
          <div style="display:flex;justify-content: center;align-items: center;gap:4px;">
            <img class="logo" src="/img/logo.png" style="height: 60px;" />
          </div>
        </div>
        <div class="text-logo">{SITE_NAME}</div>
        <div class="actions">
          <EnterHotelButton />
        </div>
      </header>
      <div id="sidebar">
        <UserArea />
        <div class="navigation">
          {SIDEBAR_LINKS.map(({ path, icon, label, scope, css }) => {
            const currentBase = location.pathname.split("/").slice(0, 2).join("/");
            const linkBase = path.split("/").slice(0, 2).join("/");
            const isActive = currentBase === linkBase;

            const linkContent = (
              <A href={path} class={`${isActive ? "current" : ""}`.trim()} style={css}>
                <i class={`fa ${icon}`} />
                {label}
              </A>
            );

            if (scope)
              return (
                <ScopeGuard scope={scope} redirect={false}>
                  {linkContent}
                </ScopeGuard>
              );

            return linkContent;
          })}

          <div style="height:40px;width:100%;" />
          <ScopeGuard scope={RankScope.ADMIN_PANEL} redirect={false}>
            <A href={ADMIN_PANEL_URL} style="background:#e42c2f;color:white;margin-bottom:14px;">
              <i class="fa fa-shield" />
              <b>Admin</b>
            </A>
          </ScopeGuard>
          <A href="/play" style="background:#489253;color:white;">
            <i class="fa fa-caret-right" />
            <b>Play Game</b>
          </A>
        </div>
        <footer>
          <A href="/about">
            <b>CrabShell</b>
          </A>
        </footer>
      </div>
    </>
  );
}
