import { RankScope } from '@crabshell/public-client';
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { ScopeGuard } from './scope.guard';
import { SessionGuard } from './session.guard';

export type PermissionScope = `${RankScope}`;

export const HAS_SCOPE_KEY = 'has_scope';

export const HasScope = (scope: PermissionScope) => {
  return (
    target: any,
    key?: string | symbol,
    descriptor?: TypedPropertyDescriptor<any>,
  ) => {
    return applyDecorators(
      SetMetadata(HAS_SCOPE_KEY, scope),
      UseGuards(SessionGuard, ScopeGuard),
    )(target, key, descriptor);
  };
};
