import { Switch, type Component } from "solid-js";
import { Router as BaseRouter, Route } from "@solidjs/router";
import { LoginScreen } from "./login-screen/LoginScreen";
import { RegisterScreen } from "./register-screen/RegisterScreen";
import { MeScreen } from "./me-screen/MeScreen";
import { PlayScreen } from "./play-screen/PlayScreen";
import { LogoutScreen } from "./logout-screen/LogoutScreen";
import { ArticlesListScreen } from "./articles-list-screen/ArticlesListScreen";

export const Router: Component = () => {
  return (
    <BaseRouter>
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/me" component={MeScreen} />
      <Route path="/play" component={PlayScreen} />
      <Route path="/logout" component={LogoutScreen} />
      <Route path="/articles" component={ArticlesListScreen} />
    </BaseRouter>
  );
};
