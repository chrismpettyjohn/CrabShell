import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const IpAddress = createParamDecorator((data, ctx) => {
  const r = ctx.switchToHttp().getRequest();
  return (
    r.headers['cf-connecting-ip'] ||
    r.headers['x-forwarded-for']?.split(',')[0] ||
    r.socket.remoteAddress
  );
});
