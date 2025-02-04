import { SetMetadata } from '@nestjs/common';

export enum AVAILABLE_SCOPES {
  MANAGE_ARTICLES = 'manageArticles',
  MANAGE_USERS = 'manageUsers',
  MANAGE_RANKS = 'manageRanks',
}
export type PermissionScope = `${AVAILABLE_SCOPES}`;

export const HAS_SCOPE_KEY = 'has_scope';
export const HasScope = (scope: PermissionScope) =>
  SetMetadata(HAS_SCOPE_KEY, scope);
