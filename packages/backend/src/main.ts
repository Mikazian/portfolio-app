import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import { staticConfiguration } from './config/static-configuration';
import { createDatabase } from './utils/database';

async function bootstrap() {
  await createDatabase();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const logger = new Logger('Bootstrap');

  const { port, host } = staticConfiguration.api;

  try {
    await app.listen(port);
    logger.log(`Server is listening on http://${host}:${port}`);
  } catch (error) {
    logger.error('Error starting the server', error);
  }
}
bootstrap();
