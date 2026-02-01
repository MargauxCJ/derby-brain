import {
  IsNotEmpty,
  IsString,
  IsDateString,
  IsOptional,
  IsInt,
  IsArray,
} from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty({ message: "Le nom de l'événement est obligatoire" })
  name!: string;

  @IsDateString()
  @IsNotEmpty({ message: 'La date de début est obligatoire' })
  startDate!: string;

  @IsDateString()
  @IsOptional()
  endDate?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  teamIds?: number[];
}
