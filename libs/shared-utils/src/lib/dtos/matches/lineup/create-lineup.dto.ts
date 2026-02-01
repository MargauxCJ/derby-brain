import { IsInt, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class CreateLineupDto {
  @IsInt()
  @IsNotEmpty({
    message: 'Le match (gameId) est obligatoire pour créer un lineup',
  })
  gameId!: number;

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  memberIds?: number[];
}
