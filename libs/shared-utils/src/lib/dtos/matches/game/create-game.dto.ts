import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateGameDto {
  @IsDateString()
  @IsNotEmpty()
  date!: string;

  @IsInt()
  @IsNotEmpty()
  homeTeamId!: number;

  @IsInt()
  @IsOptional()
  awayTeamId?: number;

  @IsString()
  @IsOptional()
  opponentName?: string;
}
