import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { CORS_HOSTS, HTTP_PORT } from './app.const';
import fastifyCookie from '@fastify/cookie';

async function bootstrap() {
  const fastifyAdapter = new FastifyAdapter();

  await fastifyAdapter.register(fastifyCookie, {
    secret: 'my-secret', // Change this to a secure secret
    parseOptions: { httpOnly: true, secure: true, sameSite: 'lax' },
  });

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter,
  );

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: CORS_HOSTS,
    credentials: true,
  });

  await app.listen(HTTP_PORT, '0.0.0.0');
  console.log(`@crabshell/api is running on: ${await app.getUrl()}`);
}
bootstrap();
