import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
@Injectable()
export class DatabaseFactory implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) { }

    createTypeOrmOptions(
        connectionName?: string,
    ): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: 'postgres', // Database type
            host: this.configService.get<string>('DB_HOST', 'localhost'), // Fallback to 'localhost'
            port: this.configService.get<number>('DB_PORT', 5432), // Fallback to 5432
            username: this.configService.get<string>('DB_USERNAME', 'postgres'), // Fallback to 'postgres'
            password: this.configService.get<string>('DB_PASSWORD', 'postgres'), // Fallback to 'postgres'
            database: this.configService.get<string>('DB_DATABASE', 'postgres'), // Fallback to 'postgres'
            // entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Path to entities
            synchronize: this.configService.get<boolean>('DB_SYNCHRONIZE', true), // Fallback to true
        };
    }
}
