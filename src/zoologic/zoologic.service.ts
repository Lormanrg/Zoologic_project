import { Injectable } from '@nestjs/common';
import { CreateZoologicDto } from './dto/create-zoologic.dto';
import { UpdateZoologicDto } from './dto/update-zoologic.dto';

@Injectable()
export class ZoologicService {
  create(createZoologicDto: CreateZoologicDto) {
    return 'This action adds a new zoologic';
  }

  findAll() {
    return `This action returns all zoologic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zoologic`;
  }

  update(id: number, updateZoologicDto: UpdateZoologicDto) {
    return `This action updates a #${id} zoologic`;
  }

  remove(id: number) {
    return `This action removes a #${id} zoologic`;
  }
}
