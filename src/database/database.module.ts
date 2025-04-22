import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseFactory } from './factory/database.factory';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: DatabaseFactory,
        }),
    ],
})
export class DatabaseModule { }
