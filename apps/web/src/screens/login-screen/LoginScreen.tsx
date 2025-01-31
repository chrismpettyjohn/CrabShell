import { createSignal, type Component } from "solid-js";
import { GuardGuest } from "../../components/guard-guest/GuardGuest";
import { SITE_NAME } from "../../App.const";
import { authService } from "@crabshell/client";
import { useAuth } from "../../context/AuthContext";
import { A, redirect } from "@solidjs/router";
import { SiteTitle } from "../../components/site-title/SiteTitle";
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
      const user = await authService.login(username(), password());
      setUser(user);
      return redirect("/me");
    } catch (e: any) {
      alert("Failed to login");
      console.log(e);
      throw e;
    }
  }

  return (
    <GuardGuest>
      <SiteTitle>Log In</SiteTitle>
      <div class="login-page">
        <div class="container">
          <div class="logo">
            <img src="/assets/img/logo.png" alt="Habbo Logo" />
          </div>
          <p class="online-status">{onlineUsers().length} crabs online</p>
          <br />
          <div class="login-box">
            <h2>Welcome to {SITE_NAME}!</h2>
            <p>You're gonna get hooked</p>
            <form onSubmit={onLogin}>
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={username()}
                onInput={(e) => setUsername(e.target.value ?? "")}
                required
              />

              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password()}
                onInput={(e) => setPassword(e.target.value ?? "")}
                required
              />

              <button type="submit" class="success-btn" disabled={!canSubmit()}>
                Log In
              </button>
            </form>
            <br />
            <A href="/register">
              <button class="info-btn" type="button">
                Join today for free
              </button>
            </A>
          </div>
          <br />
          <footer>
            <A href="/about">
              <b>CrabShell</b>
            </A>
          </footer>
        </div>
      </div>
    </GuardGuest>
  );
};

export default LoginScreen;
