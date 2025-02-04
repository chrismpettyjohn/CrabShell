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
  () => import("./articles/article-create-screen/ArticlesCreateScreen")
);
const ArticleEditScreen = lazy(
  () => import("./articles/article-edit-screen/ArticleEditScreen")
);
const UserListScreen = lazy(
  () => import("./users/users-list-screen/UsersListScreen")
);
const UsersCreateScreen = lazy(
  () => import("./users/users-create-screen/UsersCreateScreen")
);
const UsersEditScreen = lazy(
  () => import("./users/users-edit-screen/UsersEditScreen")
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
      <Route path="/articles/:articleId" component={ArticleEditScreen} />
      <Route path="/users" component={UserListScreen} />
      <Route path="/users/create" component={UsersCreateScreen} />
      <Route path="/users/:userId" component={UsersEditScreen} />
    </BaseRouter>
  );
};
