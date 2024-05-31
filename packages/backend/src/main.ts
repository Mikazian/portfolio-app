import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const logger = new Logger('Bootstrap');

  const configService = app.get(ConfigService);
  const host = configService.get<string>('host');
  const port = configService.get<number>('port');

  try {
    await app.listen(port);
    logger.log(`Server is listening on http://${host}:${port}`);
  } catch (error) {
    logger.error('Error starting the server', error);
  }
}
bootstrap();
