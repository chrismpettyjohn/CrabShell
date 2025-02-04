import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Reflector } from '@nestjs/core';
import { HAS_SCOPE_KEY, PermissionScope } from './has-scope.decorator';
@Injectable()
export class ScopeGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const sessionId = request.cookies['sessionId'];

    if (!sessionId) {
      throw new ForbiddenException('Session ID is missing');
    }

    try {
      const user = await this.authService.validateSession(Number(sessionId));
      request.user = user;

      const requiredScope = this.reflector.get<PermissionScope>(
        HAS_SCOPE_KEY,
        context.getHandler(),
      );

      if (!requiredScope) {
        return true; // No scope required, allow access
      }

      if (user.rank[requiredScope] === undefined) {
        throw new Error(`${requiredScope} not on permissions table`);
      }

      if (user.rank[requiredScope] === '1') {
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
