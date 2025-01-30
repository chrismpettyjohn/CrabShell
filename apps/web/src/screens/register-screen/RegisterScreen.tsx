import { createSignal, type Component } from "solid-js";
import { GuardGuest } from "../../components/guard-guest/GuardGuest";

export const RegisterScreen: Component = () => {
  const [username, setUsername] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [passwordAgain, setPasswordAgain] = createSignal("");

  async function onRegister(e: Event) {
    e.preventDefault();
    console.log({ username: username(), password: password() });
  }
  return (
    <GuardGuest>
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
              <a href="/login">Return to Login</a>
            </div>
          </div>
          <br />
          <footer>
            Powered by{" "}
            <a href="/about">
              <b>CrabShell</b>
            </a>
          </footer>
        </div>
      </div>
    </GuardGuest>
  );
};
