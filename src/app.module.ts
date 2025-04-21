import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ZoologicModule } from './zoologic/zoologic.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ZoologicModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
