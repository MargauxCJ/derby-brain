// libs/shared-utils/src/lib/dtos/matches/jam/create-jam.dto.ts
import {
  IsInt,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  Min,
  IsArray,
} from 'class-validator';

export class CreateJamDto {
  @IsInt()
  @IsNotEmpty()
  gameId!: number;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  jamNumber!: number;

  @IsInt()
  @IsNotEmpty()
  jammerId!: number;

  @IsInt()
  @IsOptional()
  pivotId?: number;

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  blockerIds?: number[];

  @IsInt()
  @IsOptional()
  @Min(0)
  pointsScored?: number = 0;

  @IsInt()
  @IsOptional()
  @Min(0)
  pointsAgainst?: number = 0;

  @IsBoolean()
  @IsOptional()
  isLead?: boolean = false;
}
