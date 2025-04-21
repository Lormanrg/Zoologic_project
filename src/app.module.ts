import { Module } from '@nestjs/common';
import { ZoologicModule } from './zoologic/zoologic.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'zoologic',
      password: '123456',
      autoLoadEntities: true,
      database: 'Zoologic_DB',
      synchronize: true
    }
  ), ZoologicModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
