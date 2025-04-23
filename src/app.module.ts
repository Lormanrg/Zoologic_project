import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { CoreModule } from './core/core.module';
import { ApplicationModule } from './application/application.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, CoreModule, ApplicationModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
