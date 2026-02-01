import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsOptional,
  IsUrl,
} from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @IsNotEmpty({ message: "Le nom de l'équipe est obligatoire" })
  name!: string;

  @IsInt()
  @IsNotEmpty({ message: 'Le club de rattachement est obligatoire' })
  clubId!: number;

  @IsUrl()
  @IsOptional()
  logo?: string;
}
