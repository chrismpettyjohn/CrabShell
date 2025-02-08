import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from './auth.service';
import { cookieConfig } from './auth.config';
import { AuthenticatedUser } from '../app';
import { RankRepository } from '../database/rank.repository';

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private readonly rankRepo: RankRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const sessionId = request.cookies['sessionId'];

    if (!sessionId) {
      return false;
    }

    try {
      const { user, session } = await this.authService.validateSession(
        Number(sessionId),
      );
      const rank = await this.rankRepo.findOneOrFail({ id: user.rankID });
      const authenticatedUser: AuthenticatedUser = {
        user,
        rank,
        session,
      };

      request.auth = authenticatedUser;
      context
        .switchToHttp()
        .getResponse()
        .setCookie('sessionId', sessionId, cookieConfig);

      return true;
    } catch {
      return false;
    }
  }
}
