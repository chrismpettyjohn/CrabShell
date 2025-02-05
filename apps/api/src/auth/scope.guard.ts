import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { HAS_SCOPE_KEY, PermissionScope } from './has-scope.decorator';
@Injectable()
export class ScopeGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    try {
      console.log('SCOPE WHY');
      console.log(request.user);
      const requiredScope = this.reflector.get<PermissionScope>(
        HAS_SCOPE_KEY,
        context.getHandler(),
      );

      if (!requiredScope) {
        return true; // No scope required, allow access
      }

      if (request.user.rank[requiredScope] === undefined) {
        throw new Error(`${requiredScope} not on permissions table`);
      }

      if (request.user.rank[requiredScope] === '1') {
        return true;
      } else {
        throw new ForbiddenException(
          'You do not have permission to access this resource',
        );
      }
    } catch {
      throw new ForbiddenException(
        'Invalid session or permission check failed',
      );
    }
  }
}
