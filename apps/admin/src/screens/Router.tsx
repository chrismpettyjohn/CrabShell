import { lazy, type Component } from "solid-js";
import { Router as BaseRouter, Route } from "@solidjs/router";

const AboutScreen = lazy(() => import("./about-screen/AboutScreen"));
const LandingScreen = lazy(() => import("./landing-screen/LandingScreen"));
const LoginScreen = lazy(() => import("./login-screen/LoginScreen"));
const DashboardScreen = lazy(
  () => import("./dashboard-screen/DashboardScreen")
);
const LogoutScreen = lazy(() => import("./logout-screen/LogoutScreen"));
const ArticleListScreen = lazy(
  () => import("./articles/article-list-screen/ArticleListScreen")
);
const ArticlesCreateScreen = lazy(
  () => import("./articles/article-list-screen/ArticleListScreen")
);
const ArticleEditScreen = lazy(
  () => import("./articles/article-list-screen/ArticleListScreen")
);

export const Router: Component = () => {
  return (
    <BaseRouter>
      <Route path="/" component={LandingScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/logout" component={LogoutScreen} />
      <Route path="/dashboard" component={DashboardScreen} />
      <Route path="/about" component={AboutScreen} />
      <Route path="/articles" component={ArticleListScreen} />
      <Route path="/articles/create" component={ArticlesCreateScreen} />
      <Route path="/articles/edit/:articleId" component={ArticleEditScreen} />
    </BaseRouter>
  );
};
