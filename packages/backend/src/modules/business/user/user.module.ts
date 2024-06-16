import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserEntities, UserReposotories } from './models';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserExports, UserProviders } from './services';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature(UserEntities)],
  providers: [...UserProviders, ...UserReposotories],
  exports: UserExports,
})
export class UserModule {}
