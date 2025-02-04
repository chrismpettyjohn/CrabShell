import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserEntity } from '../database/user.entity';

export const GetSession = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserEntity => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
