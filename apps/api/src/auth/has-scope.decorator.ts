import { RankScope } from '@crabshell/public-client';
import { SetMetadata, UseGuards } from '@nestjs/common';
import { ScopeGuard } from './scope.guard';
import { SessionGuard } from './session.guard';

export type PermissionScope = `${RankScope}`;

export const HAS_SCOPE_KEY = 'has_scope';
export const HasScope = (scope: PermissionScope) => {
  SetMetadata(HAS_SCOPE_KEY, scope);
  return UseGuards(SessionGuard, ScopeGuard);
};
