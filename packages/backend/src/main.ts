import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const host = configService.get<string>('host');
  const port = configService.get<number>('port');

  await app.listen(port);

  console.log(`Server is listening on http://${host}:${port}`);
}
bootstrap();
