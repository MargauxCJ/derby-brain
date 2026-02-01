import { IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateClubDto {
  @IsString()
  @IsOptional()
  description?: string;

  @IsUrl()
  @IsOptional()
  logo?: string;
}
