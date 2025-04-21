import { PartialType } from '@nestjs/mapped-types';
import { CreateZoologicDto } from './create-zoologic.dto';

export class UpdateZoologicDto extends PartialType(CreateZoologicDto) {}
