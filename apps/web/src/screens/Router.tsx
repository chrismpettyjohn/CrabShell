import { lazy, type Component } from "solid-js";
import { Router as BaseRouter, Route } from "@solidjs/router";

const LoginScreen = lazy(() => import("./login-screen/LoginScreen"));
const RegisterScreen = lazy(() => import("./register-screen/RegisterScreen"));
const MeScreen = lazy(() => import("./me-screen/MeScreen"));
const PlayScreen = lazy(() => import("./play-screen/PlayScreen"));
const LogoutScreen = lazy(() => import("./logout-screen/LogoutScreen"));
const ArticlesListScreen = lazy(
  () => import("./articles-list-screen/ArticlesListScreen")
);

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
