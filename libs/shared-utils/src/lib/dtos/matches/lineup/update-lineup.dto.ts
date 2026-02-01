import { IsArray, IsInt, IsOptional } from 'class-validator';

export class UpdateLineupDto {
  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  memberIds?: number[];

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  jamIds?: number[];
}
