import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateClubDto {
  @IsString()
  @IsNotEmpty({ message: 'Le nom du club est obligatoire' })
  name!: string;

  @IsString()
  @IsNotEmpty({ message: 'La ville est obligatoire' })
  city!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsUrl({}, { message: 'Le logo doit être une URL valide' })
  @IsOptional()
  logo?: string;
}
