import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { HAS_SCOPE_KEY, PermissionScope } from './has-scope.decorator';
import { Request } from '../app';

@Injectable()
export class ScopeGuard implements CanActivate {
  private readonly logger = new Logger(ScopeGuard.name, { timestamp: true });

  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const requiredScope = this.reflector.get<PermissionScope>(
      HAS_SCOPE_KEY,
      context.getHandler(),
    );

    if (requiredScope == undefined) {
      const ROUTE_REGISTERED_SCOPE_ERR =
        '@HasScope or @HasScopeForClass used improperly';
      this.logger.error(ROUTE_REGISTERED_SCOPE_ERR);
      throw new InternalServerErrorException(ROUTE_REGISTERED_SCOPE_ERR);
    }

    if (request.auth?.rank?.[requiredScope] === undefined) {
      const MISSING_SCOPE_ERR = `${requiredScope} not on permissions table`;
      this.logger.error(MISSING_SCOPE_ERR);
      throw new InternalServerErrorException(MISSING_SCOPE_ERR);
    }

    if (request.auth?.rank?.[requiredScope] === '1') {
      return true;
    } else {
      const MISSING_SCOPE_ERR = `User ${request.auth?.user?.id} is missing scope ${requiredScope}`;
      this.logger.error(MISSING_SCOPE_ERR);
      throw new ForbiddenException(MISSING_SCOPE_ERR);
    }
  }
}
