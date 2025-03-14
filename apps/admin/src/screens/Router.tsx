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
const UsersEditScreen = lazy(
  () => import("./users/users-edit-screen/UsersEditScreen")
);
const UsersBansScreen = lazy(
  () => import("./users/users-bans-screen/UsersBansScreen")
);
const UsersCameraScreen = lazy(
  () => import("./users/users-camera-screen/UsersCameraScreen")
);
const UsersFurnitureScreen = lazy(
  () => import("./users/users-furniture-screen/UsersFurnitureScreen")
);
const UsersMessagesScreen = lazy(
  () => import("./users/users-messages-screen/UsersMessagesScreen")
);
const UsersRoomsScreen = lazy(
  () => import("./users/users-rooms-screen/UsersRoomsScreen")
);
const UsersSessionsScreen = lazy(
  () => import("./users/users-sessions-screen/UsersSessionsScreen")
);
const RanksListScreen = lazy(
  () => import("./ranks/ranks-list-screen/RanksListScreen")
);
const RanksCreateScreen = lazy(
  () => import("./ranks/ranks-create-screen/RanksCreateScreen")
);
const RanksEditScreen = lazy(
  () => import("./ranks/ranks-edit-screen/RanksEditScreen")
);
const RankMembersScreen = lazy(
  () => import("./ranks/ranks-members-screen/RankMembersScreen")
);
const EmuSettingsScreen = lazy(
  () => import("./emu/emu-settings-screen/EmuSettingsScreen")
);
const EmuTextsScreen = lazy(
  () => import("./emu/emu-texts-screen/EmuTextsScreen")
);
const FurnitureListScreen = lazy(
  () => import("./furniture/furniture-list-screen/FurnitureListScreen")
);
const FurnitureCreateScreen = lazy(
  () => import("./furniture/furniture-create-screen/FurnitureCreateScreen")
);
const FurnitureEditScreen = lazy(
  () => import("./furniture/furniture-edit-screen/FurnitureEditScreen")
);
const BadgesListScreen = lazy(
  () => import("./badges/badges-list-screen/BadgesListScreen")
);
const BadgesCreateScreen = lazy(
  () => import("./badges/badges-create-screen/BadgesCreateScreen")
);
const BadgesEditScreen = lazy(
  () => import("./badges/badges-edit-screen/BadgesEditScreen")
);
const CommandLogsScreen = lazy(
  () => import("./logging/command-logs-screen/CommandLogsScreen")
);
const NamechangeLogsScreen = lazy(
  () => import("./logging/namechange-logs-screen/NamechangeLogsScreen")
);
const PrivateChatLogsScreen = lazy(
  () => import("./logging/private-chat-logs-screen/PrivateChatLogsScreen")
);
const RoomChatlogsScreen = lazy(
  () => import("./logging/room-chat-logs-screen/RoomChatLogsScreen")
);
const RoomEnterLogsScreen = lazy(
  () => import("./logging/room-enter-logs-screen/RoomEnterLogsScreen")
);
const RoomTradeLogsScreen = lazy(
  () => import("./logging/room-trade-logs-screen/RoomTradeLogsScreen")
);
const CatalogItemsCreateScreen = lazy(
  () => import("./catalog/catalog-items-create-screen/CatalogItemsCreateScreen")
);
const CatalogItemsEditScreen = lazy(
  () => import("./catalog/catalog-items-edit-screen/CatalogItemsEditScreen")
);
const CatalogItemsListScreen = lazy(
  () => import("./catalog/catalog-items-list-screen/CatalogItemsListScreen")
);
const CatalogPagesCreateScreen = lazy(
  () => import("./catalog/catalog-pages-create-screen/CatalogPagesCreateScreen")
);
const CatalogPagesEditScreen = lazy(
  () => import("./catalog/catalog-pages-edit-screen/CatalogPagesEditScreen")
);
const CatalogPagesListScreen = lazy(
  () => import("./catalog/catalog-pages-list-screen/CatalogPagesListScreen")
);
const BansListScreen = lazy(
  () => import("./bans/bans-list-screen/BansListScreen")
);
const BansCreateScreen = lazy(
  () => import("./bans/bans-create-screen/BansCreateScreen")
);
const BansEditScreen = lazy(
  () => import("./bans/bans-edit-screen/BansEditScreen")
);
const EventsListScreen = lazy(
  () => import("./events/events-list-screen/EventsListScreen")
);
const EventsEditScreen = lazy(
  () => import("./events/events-edit-screen/EventsEditScreen")
);
const EventsCreateScreen = lazy(
  () => import("./events/events-create-screen/EventsCreateScreen")
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
      <Route path="/users/:username" component={UsersEditScreen} />
      <Route path="/users/:username/bans" component={UsersBansScreen} />
      <Route
        path="/users/:username/furniture"
        component={UsersFurnitureScreen}
      />
      <Route path="/users/:username/messages" component={UsersMessagesScreen} />
      <Route path="/users/:username/camera" component={UsersCameraScreen} />
      <Route path="/users/:username/rooms" component={UsersRoomsScreen} />
      <Route path="/users/:username/sessions" component={UsersSessionsScreen} />
      <Route path="/ranks" component={RanksListScreen} />
      <Route path="/ranks/create" component={RanksCreateScreen} />
      <Route path="/ranks/:rankId" component={RanksEditScreen} />
      <Route path="/ranks/:rankId/members" component={RankMembersScreen} />
      <Route path="/emulator/settings" component={EmuSettingsScreen} />
      <Route path="/emulator/texts" component={EmuTextsScreen} />
      <Route path="/furniture" component={FurnitureListScreen} />
      <Route path="/furniture/create" component={FurnitureCreateScreen} />
      <Route path="/furniture/:baseItemId" component={FurnitureEditScreen} />
      <Route path="/badges/" component={BadgesListScreen} />
      <Route path="/badges/create" component={BadgesCreateScreen} />
      <Route path="/badges/:badgeCode" component={BadgesEditScreen} />
      <Route path="/logs/commands" component={CommandLogsScreen} />
      <Route path="/logs/namechange" component={NamechangeLogsScreen} />
      <Route path="/logs/private-chat" component={PrivateChatLogsScreen} />
      <Route path="/logs/public-chat" component={RoomChatlogsScreen} />
      <Route path="/logs/room-enters" component={RoomEnterLogsScreen} />
      <Route path="/logs/room-trades" component={RoomTradeLogsScreen} />
      <Route path="/catalog/pages" component={CatalogPagesListScreen} />
      <Route
        path="/catalog/pages/create"
        component={CatalogPagesCreateScreen}
      />
      <Route path="/catalog/pages/:pageId" component={CatalogPagesEditScreen} />
      <Route path="/catalog/items" component={CatalogItemsListScreen} />
      <Route
        path="/catalog/items/create"
        component={CatalogItemsCreateScreen}
      />
      <Route path="/catalog/items/:itemId" component={CatalogItemsEditScreen} />
      <Route path="/bans" component={BansListScreen} />
      <Route path="/bans/:banId" component={BansCreateScreen} />
      <Route path="/bans/:banId" component={BansEditScreen} />
      <Route path="/events/" component={EventsListScreen} />
      <Route path="/events/create" component={EventsCreateScreen} />
      <Route path="/events/:eventId" component={EventsEditScreen} />
    </BaseRouter>
  );
};
