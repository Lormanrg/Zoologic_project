import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { CoreModule } from './core/core.module';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [DatabaseModule, CoreModule, ApplicationModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
