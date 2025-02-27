import { createSignal, type Component } from "solid-js";
import { GuestGuard, SiteTitle, useAuth } from "@crabshell/shared-web";
import { A, redirect } from "@solidjs/router";
import { authService, CRAB_SESSION_STORAGE } from "@crabshell/public-client";
import { useOnlineUsers } from "../../context/OnlineUsersContext";
import toast from "solid-toast";

const RegisterScreen: Component = () => {
  const { setUser } = useAuth();
  const { onlineUsers } = useOnlineUsers();
  const [username, setUsername] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [passwordAgain, setPasswordAgain] = createSignal("");

  const canSubmit = () => !!username() && !!email() && !!password() && !!password() === !!passwordAgain();

  async function onRegister(e: Event) {
    e.preventDefault();
    const response = await authService.register(email(), username(), password(), passwordAgain());
    localStorage.setItem(CRAB_SESSION_STORAGE, response.token);
    setUser(response.user);
    toast.success(`🦀 Welcome to the reef, ${response.user.username}`);
    return redirect("/me");
  }
  return (
    <GuestGuard>
      <div class="moving-bg" />
      <SiteTitle>Register</SiteTitle>
      <div class="login-page">
        <img src="/img/logo.png" class="logo" />
        <div class="users-now">
          <b>{onlineUsers().length}</b> crabs in the reef
        </div>
        <div class="login-box">
          <div class="left-side">
            <img src="https://i.imgur.com/IVT4J9o.png" />
          </div>
          <form onSubmit={onRegister}>
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

            <h2>Email</h2>
            <input type="email" id="email" name="email" placeholder="Email" value={email()} onInput={(e) => setEmail(e.target.value ?? "")} required />

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

            <h2>Password Again</h2>
            <input
              type="password"
              id="passwordAgain"
              name="passwordAgain"
              placeholder="Password Again"
              value={passwordAgain()}
              onInput={(e) => setPasswordAgain(e.target.value ?? "")}
              required
            />
            <button type="submit" class="info-btn" disabled={!canSubmit()}>
              Join for free
            </button>
            <A href="/me">
              <button type="submit" class="success-btn">
                Already have an account?
              </button>
            </A>
          </form>
        </div>
        <br />
        <footer>
          Powered by{" "}
          <A href="/about">
            <b>CrabShell</b>
          </A>
        </footer>
      </div>
    </GuestGuard>
  );
};

export default RegisterScreen;
