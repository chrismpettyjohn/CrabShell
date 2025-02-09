import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthenticatedUser } from '../app';
import * as jwt from 'jsonwebtoken';
import { SessionRepository } from '../database/session.repository';
import { JWT_COOKIE, JWT_SECRET } from '../app.const';
import { UserRepository } from '../database/user.repository';

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly sessionRepo: SessionRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const jwtCookie = request.cookies[JWT_COOKIE];

    if (!jwtCookie) {
      return false;
    }

    const token = jwtCookie.split('Bearer ')[1];

    try {
      const decoded: { id: number; userId: number } = jwt.verify(
        token,
        JWT_SECRET,
      );

      const [session, user] = await Promise.all([
        this.sessionRepo.findOneOrFail({ id: decoded.id }),
        this.userRepo.findOneOrFail(
          { id: decoded.userId },
          { relations: ['rank'] },
        ),
      ]);

      if (!user) {
        return false;
      }
      const authenticatedUser: AuthenticatedUser = {
        session,
        user,
        rank: user.rank,
      };

      request.auth = authenticatedUser;

      return true;
    } catch (e) {
      console.log(e);
      console.log('yyy');
      return false;
    }
  }
}
