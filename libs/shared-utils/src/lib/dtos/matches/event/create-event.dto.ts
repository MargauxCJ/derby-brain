import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDate,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty({ message: "Le nom de l'événement est obligatoire" })
  name!: string;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty({ message: 'La date de début est obligatoire' })
  startDate!: string;

  @IsDateString()
  @IsOptional()
  endDate?: string;

  @IsString()
  location?: string;
}
