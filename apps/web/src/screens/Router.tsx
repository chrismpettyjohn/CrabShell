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
const ArticlesViewScreen = lazy(
  () => import("./articles-view-screen/ArticlesViewScreen")
);
const MostCreditsScreen = lazy(
  () => import("./high-scores/most-credits-screen/MostCreditsScreen")
);
const MostDiamondsScreen = lazy(
  () => import("./high-scores/most-diamonds-screen/MostDiamondsScreen")
);
const MostOnlineTimeScreen = lazy(
  () => import("./high-scores/most-online-time-screen/MostOnlineTimeScreen")
);
const MostRespectsScreen = lazy(
  () => import("./high-scores/most-respects-screen/MostRespectsScreen")
);
const MostAchievementsScreen = lazy(
  () => import("./high-scores/most-achievements-screen/MostAchievementsScreen")
);
const StaffScreen = lazy(() => import("./staff-screen/StaffScreen"));

export const Router: Component = () => {
  return (
    <BaseRouter>
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/me" component={MeScreen} />
      <Route path="/play" component={PlayScreen} />
      <Route path="/logout" component={LogoutScreen} />
      <Route path="/articles" component={ArticlesListScreen} />
      <Route path="/articles/:articleId" component={ArticlesViewScreen} />
      <Route path="/high-scores/credits" component={MostCreditsScreen} />
      <Route path="/high-scores/diamonds" component={MostDiamondsScreen} />
      <Route path="/high-scores/online-time" component={MostOnlineTimeScreen} />
      <Route path="/high-scores/respects" component={MostRespectsScreen} />
      <Route
        path="/high-scores/achievements"
        component={MostAchievementsScreen}
      />
      <Route path="/staff" component={StaffScreen} />
    </BaseRouter>
  );
};
