import { PartialType } from '@nestjs/mapped-types';
import { CreateJamDto } from './create-jam.dto';

export class UpdateJamDto extends PartialType(CreateJamDto) {}
