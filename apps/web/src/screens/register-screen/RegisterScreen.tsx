import type { Component } from "solid-js";
import { GuardGuest } from "../../components/guard-guest/GuardGuest";

export const RegisterScreen: Component = () => {
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
            <form action="/register">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value="{{.Username}}"
                required
              />

              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value="{{.Email}}"
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
