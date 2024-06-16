import { ConfigModule } from '@nestjs/config';
import { UserModule } from './business/user/user.module';
import { Module } from '@nestjs/common';
import { ApiAppControllers } from './controllers';

@Module({
  imports: [
    /** Nest Module **/
    ConfigModule,

    /** Custom Modules **/
    UserModule,
  ],
  controllers: ApiAppControllers,
})
export class ApiAppModule {}
