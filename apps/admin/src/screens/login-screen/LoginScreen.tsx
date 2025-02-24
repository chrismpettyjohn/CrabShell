import { createSignal, type Component } from "solid-js";
import { authService } from "@crabshell/admin-client";
import { A, redirect } from "@solidjs/router";
import toast from "solid-toast";
import { GuestGuard, SiteTitle, useAuth } from "@crabshell/shared-web";
import { CRAB_SESSION_STORAGE } from "@crabshell/public-client";

const LoginScreen: Component = () => {
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
      toast.success(`Welcome back, ${response.user.username}`);
      return redirect("/dashboard");
    } catch (e: any) {
      toast.error("Invalid username or password");
      throw e;
    }
  }

  return (
    <GuestGuard>
      <SiteTitle>Log In</SiteTitle>
      <div class="login-page">
        <div class="container">
          <div class="logo">
            <img src="/img/logo.png" alt="Habbo Logo" />
          </div>
          <br />
          <div class="login-box">
            <h1>CrabShell</h1>
            <p>This area is only intended for staff members.</p>
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

              <button type="submit" class="success-btn" disabled={!canSubmit()}>
                Log In
              </button>
            </form>
          </div>
          <br />
          <footer>
            <A href="/about">
              <b>CrabShell</b>
            </A>
          </footer>
        </div>
      </div>
    </GuestGuard>
  );
};

export default LoginScreen;
