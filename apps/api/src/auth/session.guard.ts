import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthenticatedUser } from '../app';
import * as jwt from 'jsonwebtoken';
import { SessionRepository } from '../database/session.repository';
import { JWT_SECRET } from '../app.const';
import { UserRepository } from '../database/user.repository';

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly sessionRepo: SessionRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return false;
    }

    const token = authHeader.substring(7).trim();

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as {
        id: number;
        userId: number;
      };

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

      request.auth = { session, user, rank: user.rank } as AuthenticatedUser;
      return true;
    } catch (e) {
      console.error('JWT Verification Error:', e);
      return false;
    }
  }
}
