import { IMAGER_BASE_URL, SITE_NAME } from "../../App.const";
import { useAuth } from "../../context/AuthContext";
import { useLocation } from "@solidjs/router";

const SIDEBAR_LINKS = [
  { path: "/me", icon: "fa-home", label: "Dashboard" },
  { path: "/articles", icon: "fa-newspaper", label: "News Articles" },
  { path: "/high-scores", icon: "fa-trophy", label: "High Scores" },
  { path: "/staff", icon: "fa-users", label: "Staff Team" },
  { path: "/play", icon: "fa-gamepad", label: "Play Game" },
  { path: "/logout", icon: "fa-sign-out", label: "Logout" },
];

export function SiteSidebar() {
  const { user } = useAuth();
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
          <button class="enter-hotel-btn">
            <b>.OnlineUsers</b>&nbsp;users online
          </button>
        </div>
      </header>
      <div id="sidebar">
        <div class="user-area">
          <div class="avatar-container">
            <img
              class="avatar"
              src={`${IMAGER_BASE_URL}?figure=.Look&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif`}
            />
          </div>
          <h2>{user()?.username}</h2>
          <div class="quick-stats">
            <div class="stat-block">
              <h3>-1</h3>
              <p>Badges</p>
            </div>
            <div class="stat-block">
              <h3>-1</h3>
              <p>Friends</p>
            </div>
            <div class="stat-block">
              <h3>-1</h3>
              <p>Achievements</p>
            </div>
          </div>
        </div>
        <div class="navigation">
          {SIDEBAR_LINKS.map(({ path, icon, label }) => (
            <a href={path} class={location.pathname === path ? "active" : ""}>
              <i class={`fa ${icon}`} />
              {label}
            </a>
          ))}
        </div>
        <footer>
          <a href="/about">CrabShell</a>
        </footer>
      </div>
    </>
  );
}
