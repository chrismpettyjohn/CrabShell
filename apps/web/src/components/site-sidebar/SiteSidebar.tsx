import { SITE_NAME } from "../../App.const";
import { A, useLocation } from "@solidjs/router";
import { EnterHotelButton } from "./enter-hotel-button/EnterHotelButton";
import { UserArea } from "./user-area/UserArea";

const SIDEBAR_LINKS = [
  { path: "/me", icon: "fa-home", label: "Dashboard" },
  { path: "/articles", icon: "fa-newspaper", label: "News Articles" },
  { path: "/high-scores/credits", icon: "fa-trophy", label: "High Scores" },
  { path: "/staff", icon: "fa-users", label: "Staff Team" },
  { path: "/play", icon: "fa-gamepad", label: "Play Game" },
  { path: "/logout", icon: "fa-sign-out", label: "Logout" },
];

export function SiteSidebar() {
  const location = useLocation();
  return (
    <>
      <header>
        <div class="brand-container">
          <div style="display:flex;justify-content: center;align-items: center;gap:4px;">
            <img
              class="logo"
              src="/assets/img/logo.png"
              style="height: 60px;"
            />
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
          {SIDEBAR_LINKS.map(({ path, icon, label }) => (
            <A href={path} class={location.pathname === path ? "active" : ""}>
              <i class={`fa ${icon}`} />
              {label}
            </A>
          ))}
        </div>
        <footer>
          <A href="/about">CrabShell</A>
        </footer>
      </div>
    </>
  );
}
