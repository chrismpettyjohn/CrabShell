import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const IpAddress = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest();
    return (
      request.headers['cf-connecting-ip'] ||
      request.headers['x-forwarded-for']?.split(',')[0] ||
      request.socket.remoteAddress ||
      request.connection.remoteAddress
    );
  },
);
