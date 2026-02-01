import { IsInt, IsNotEmpty, IsBoolean, IsOptional, Min } from 'class-validator';

export class CreateJamDto {
  @IsInt()
  @IsNotEmpty()
  gameId!: number;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  jamNumber!: number;

  @IsInt()
  @IsOptional()
  jammerId?: number;

  @IsInt()
  @IsOptional()
  pair1Id?: number;

  @IsInt()
  @IsOptional()
  pair2Id?: number;

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
  lead?: boolean = false;
}
