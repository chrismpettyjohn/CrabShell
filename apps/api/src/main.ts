import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { HTTP_PORT } from './app.const';
import fastifyCookie from '@fastify/cookie';

async function bootstrap() {
  const fastifyAdapter = new FastifyAdapter();
  
  // Register cookie plugin at adapter level
  await fastifyAdapter.register(fastifyCookie, {
    secret: 'my-secret', // change this to a proper secret
  });

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter
  );

  app.setGlobalPrefix('api');
  app.enableCors();

  await app.listen(HTTP_PORT, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();