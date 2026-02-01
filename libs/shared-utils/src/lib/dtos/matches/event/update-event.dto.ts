import {
  IsOptional,
  IsString,
  IsDateString,
  IsArray,
  IsInt,
} from 'class-validator';

export class UpdateEventDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsDateString()
  @IsOptional()
  startDate?: string;

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
