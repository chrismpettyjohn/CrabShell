import { createSignal, type Component } from "solid-js";
import { GuardGuest } from "../../components/guard-guest/GuardGuest";
import { SiteTitle } from "../../components/site-title/SiteTitle";
import { A, redirect } from "@solidjs/router";
import { authService } from "@crabshell/client";
import { useAuth } from "../../context/AuthContext";

const RegisterScreen: Component = () => {
  const { setUser } = useAuth();
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
    <GuardGuest>
      <SiteTitle>Register</SiteTitle>
      <div class="login-page">
        <div class="container">
          <div class="logo">
            <img src="/assets/img/logo.png" alt="Habbo Logo" />
          </div>
          <p class="online-status">0 crabs online</p>
          <br />
          <div class="login-box">
            <h2>Join HabCrab Today!</h2>
            <p>Create your free account</p>
            <form onSubmit={onRegister}>
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

              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email()}
                onInput={(e) => setEmail(e.target.value ?? "")}
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

              <label for="password">Password Again</label>
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
            Powered by <b>CrabShell</b>
          </footer>
        </div>
      </div>
    </GuardGuest>
  );
};

export default RegisterScreen;
