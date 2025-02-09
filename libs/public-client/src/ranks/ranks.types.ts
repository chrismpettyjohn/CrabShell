import { UserWire } from "../user/user.types";

export interface RankWire {
  id: number;
  name: string;
  badgeCode: string;
  members: UserWire[];
  scopes: Record<RankScope, boolean>;
}

export enum RankScope {
  ADMIN_PANEL = "accessAdminPanel",
  MANAGE_ARTICLES = "manageArticles",
  MANAGE_BADGES = "manageBadges",
  MANAGE_USERS = "manageUsers",
  MANAGE_RANKS = "manageRanks",
  MANAGE_EMU = "manageEmu",
  MANAGE_FURNITURE = "manageFurniture",
  MANAGE_CATALOG = "manageCatalog",
  MANAGE_LOGS = "manageLogs",
}

export type RankScopes = `${RankScope}`;
