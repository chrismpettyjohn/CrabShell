import { createSignal, type Component } from "solid-js";
import { GuestGuard, useAuth, SiteTitle } from "@crabshell/shared-web";
import { authService, CRAB_SESSION_STORAGE } from "@crabshell/public-client";
import { A, redirect } from "@solidjs/router";
import { useOnlineUsers } from "../../context/OnlineUsersContext";

const LoginScreen: Component = () => {
  const { onlineUsers } = useOnlineUsers();
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const { setUser } = useAuth();

  const canSubmit = () => !!username() && !!password();

  async function onLogin(e: Event) {
    try {
      e.preventDefault();
      if (!canSubmit()) return;
      const response = await authService.login(username(), password());
      localStorage.setItem(CRAB_SESSION_STORAGE, response.token);
      setUser(response.user);
      return redirect("/me");
    } catch (e: any) {
      alert("Failed to login");
      throw e;
    }
  }

  return (
    <GuestGuard>
      <SiteTitle>Log In</SiteTitle>
      <div class="login-page">
        <img src="/img/logo.png" class="logo" />
        <div class="users-now">
          <b>{onlineUsers().length}</b> crabs in the reef
        </div>
        <div class="login-box">
          <div class="left-side">
            <img src="https://i.imgur.com/IVT4J9o.png" />
          </div>
          <form onSubmit={onLogin}>
            <h2>Username</h2>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username()}
              onInput={(e) => setUsername(e.target.value ?? "")}
              required
            />

            <h2>Password</h2>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password()}
              onInput={(e) => setPassword(e.target.value ?? "")}
              required
            />
            <button type="submit" class="info-btn" disabled={!canSubmit()}>
              Log In
            </button>
            <A href="/register">
              <button type="submit" class="success-btn" disabled={!canSubmit()}>
                Join Today
              </button>
            </A>
          </form>
        </div>
        <footer>
          <A href="/about">Crabshell</A>
        </footer>
      </div>
    </GuestGuard>
  );
};

export default LoginScreen;
