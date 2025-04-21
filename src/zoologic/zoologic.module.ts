import { Module } from '@nestjs/common';
import { ZoologicService } from './zoologic.service';
import { ZoologicController } from './zoologic.controller';

@Module({
  controllers: [ZoologicController],
  providers: [ZoologicService],
})
export class ZoologicModule {}
