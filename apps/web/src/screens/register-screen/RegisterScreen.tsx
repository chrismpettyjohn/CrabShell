import { createSignal, type Component } from "solid-js";
import { GuestGuard, SiteTitle, useAuth } from "@crabshell/shared-web";
import { A, redirect } from "@solidjs/router";
import { authService } from "@crabshell/public-client";
import { useOnlineUsers } from "../../context/OnlineUsersContext";

const RegisterScreen: Component = () => {
  const { setUser } = useAuth();
  const { onlineUsers } = useOnlineUsers();
  const [username, setUsername] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [passwordAgain, setPasswordAgain] = createSignal("");

  async function onRegister(e: Event) {
    e.preventDefault();
    const user = await authService.register(
      email(),
      username(),
      password(),
      passwordAgain()
    );
    setUser(user);
    return redirect("/me");
  }
  return (
    <GuestGuard>
      <SiteTitle>Register</SiteTitle>
      <div class="login-page">
        <div class="container">
          <div class="logo">
            <img src="/img/logo.png" alt="Habbo Logo" />
          </div>
          <p class="online-status">{onlineUsers().length} crabs online</p>
          <br />
          <div class="login-box">
            <h2>Join HabCrab Today!</h2>
            <p>Create your free account</p>
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
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email()}
                onInput={(e) => setEmail(e.target.value ?? "")}
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

              <button type="submit" class="success-btn">
                Create Account
              </button>
            </form>
            <div class="actions">
              <A href="/login">Return to Login</A>
            </div>
          </div>
          <br />
          <footer>
            Powered by{" "}
            <A href="/about">
              <b>CrabShell</b>
            </A>
          </footer>
        </div>
      </div>
    </GuestGuard>
  );
};

export default RegisterScreen;
