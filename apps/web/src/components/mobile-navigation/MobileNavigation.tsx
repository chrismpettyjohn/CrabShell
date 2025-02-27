import { createSignal } from "solid-js";
import { ADMIN_PANEL_URL, SITE_NAME } from "../../App.const";
import { A, useLocation } from "@solidjs/router";
import { RankScope } from "@crabshell/public-client";
import { ScopeGuard } from "@crabshell/shared-web";
import { UserArea } from "../site-sidebar/user-area/UserArea";
import { EnterHotelButton } from "../site-sidebar/enter-hotel-button/EnterHotelButton";
import { SIDEBAR_LINKS } from "../site-sidebar/SiteSidebar";

export function MobileNavigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <>
      <header id="mobile-header">
        <div class="brand-container" style="width: fit-content;">
          <img class="logo" src="/img/logo.png" style="height: 60px;" />
        </div>
        <div class="actions">
          <button class="mobile-nav-toggle" onClick={() => setIsOpen(!isOpen())}>
            <i class={`fa ${isOpen() ? "fa-times" : "fa-bars"}`} />
          </button>
        </div>
      </header>
      <div id="mobile-nav" class={isOpen() ? "open" : "closed"}>
        <UserArea />
        <div class="navigation">
          {SIDEBAR_LINKS.map(({ path, icon, label }) => {
            const isActive = location.pathname.startsWith(path);
            return (
              <A href={path} class={isActive ? "current" : ""}>
                <i class={`fa ${icon}`} />
                {label}
              </A>
            );
          })}
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
