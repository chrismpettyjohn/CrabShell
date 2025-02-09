import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { UserEntity } from '../database/user.entity';

export const GetSession = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserEntity => {
    const req = ctx.switchToHttp().getRequest();
    const user: UserEntity | undefined = req.auth?.user;
    if (!user) {
      throw new BadRequestException('invalid session');
    }
    return user;
  },
);
