import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const sessionId = request.cookies['sessionId'];

    if (!sessionId) {
      return false;
    }

    try {
      const user = await this.authService.validateSession(Number(sessionId));
      request.user = user;
      return true;
    } catch {
      return false;
    }
  }
}