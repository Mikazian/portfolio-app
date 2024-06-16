import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { ApiAppModule } from '../modules/api-app.module';
import { ServerLivenessController } from './controllers/app.controller';
import { typeormConfig } from '../config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),

    TypeOrmModule.forRoot(typeormConfig),

    /** Api Controllers **/
    ApiAppModule,
  ],

  controllers: [ServerLivenessController],
  providers: [],
})
export class AppModule {}
