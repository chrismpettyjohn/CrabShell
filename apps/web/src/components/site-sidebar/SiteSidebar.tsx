export function SiteSidebar() {
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
        <div class="text-logo">habcrab</div>
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
              src="imageURL?figure=.Look&direction=3&head_direction=3&gesture=sml&action=sit,crr=6&size=l&format=.gif"
            />
          </div>
          <h2>.Username</h2>
          <div class="quick-stats">
            <div class="stat-block">
              <h3>.BadgeCount</h3>
              <p>Badges</p>
            </div>
            <div class="stat-block">
              <h3>.FriendCount</h3>
              <p>Friends</p>
            </div>
            <div class="stat-block">
              <h3>.Achievement</h3>
              <p>Achievements</p>
            </div>
          </div>
        </div>
        <div class="navigation">
          <a href="/" class="active">
            <i class="fa fa-home" />
            Dashboard
          </a>
          <a href="/articles">
            <i class="fa fa-newspaper" />
            News Articles
          </a>
          <a href="/high-scores">
            <i class="fa fa-trophy" />
            High Scores
          </a>
          <a href="/staff">
            <i class="fa fa-users" />
            Staff Team
          </a>
          <a href="/play">
            <i class="fa fa-gamepad" />
            Play Game
          </a>
          <a href="/logout">
            <i class="fa fa-sign-out" />
            Logout
          </a>
        </div>
        <footer>
          <a href="/about">CrabShell</a>
        </footer>
      </div>
    </>
  );
}
