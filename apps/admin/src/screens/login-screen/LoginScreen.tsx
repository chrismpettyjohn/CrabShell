import { createSignal, type Component } from "solid-js";
import { GuestGuard } from "../../components/guest-guard/GuestGuard";
import { authService } from "@crabshell/public-client";
import { useAuth } from "../../context/AuthContext";
import { A, redirect } from "@solidjs/router";
import { SiteTitle } from "../../components/site-title/SiteTitle";

const LoginScreen: Component = () => {
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
      return redirect("/dashboard");
    } catch (e: any) {
      alert("Failed to login");
      console.log(e);
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
            <h2>CrabShell</h2>
            <p>This area is only intended for staff members.</p>
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
