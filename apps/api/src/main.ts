import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import cookieParser from 'cookie-parser';
import { CORS_HOSTS, HTTP_PORT } from './app.const';

async function bootstrap() {
  const expressApp = express();
  expressApp.use(cookieParser('my-secret'));

  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: CORS_HOSTS,
    credentials: true,
  });

  await app.listen(HTTP_PORT, '0.0.0.0');
  console.log(`@crabshell/api is running on: http://0.0.0.0:${HTTP_PORT}`);
}
bootstrap();
