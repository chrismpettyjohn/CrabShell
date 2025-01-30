import type { Component } from "solid-js";
import { GuardGuest } from "../../components/guard-guest/GuardGuest";

export const LoginScreen: Component = () => {
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
            <h2>Welcome to HabCrab!</h2>
            <p>You're gonna get hooked</p>
            <div class="error-message">I farted.</div>
            <form action="/login">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value="{{.Username}}"
                required
              />

              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />

              <button type="submit" class="success-btn">
                Log In
              </button>
            </form>
            <a href="/register" class="info-btn">
              Join today for free
            </a>
            <div class="actions">
              <a href="/forgot-password">Forgot Password?</a>
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
