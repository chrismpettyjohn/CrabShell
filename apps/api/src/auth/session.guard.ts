import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from './auth.service';
import { cookieConfig } from './auth.config';

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const sessionId = request.cookies['sessionId'];

    if (!sessionId) {
      console.log('SESSION WHY');
      return false;
    }

    try {
      const user = await this.authService.validateSession(Number(sessionId));
      request.user = user;

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
