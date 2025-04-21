import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ZoologicService } from './zoologic.service';
import { CreateZoologicDto } from './dto/create-zoologic.dto';
import { UpdateZoologicDto } from './dto/update-zoologic.dto';

@Controller('zoologic')
export class ZoologicController {
  constructor(private readonly zoologicService: ZoologicService) {}

  @Post()
  create(@Body() createZoologicDto: CreateZoologicDto) {
    return this.zoologicService.create(createZoologicDto);
  }

  @Get()
  findAll() {
    return this.zoologicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zoologicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZoologicDto: UpdateZoologicDto) {
    return this.zoologicService.update(+id, updateZoologicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zoologicService.remove(+id);
  }
}
