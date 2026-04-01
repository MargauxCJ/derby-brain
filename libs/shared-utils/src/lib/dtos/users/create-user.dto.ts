import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { MemberPosition, UserRole } from '../../enums/enums';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Le nom/pseudo est obligatoire' })
  surname!: string;

  @IsEmail({}, { message: 'Email invalide' })
  @IsNotEmpty()
  email!: string;

  @IsString()
  @MinLength(8, { message: 'Le mot de passe doit faire au moins 8 caractères' })
  password!: string;

  @IsString()
  @IsOptional()
  jerseyNum?: string;

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole = UserRole.MEMBER;

  @IsEnum(MemberPosition)
  @IsOptional()
  defaultPosition?: MemberPosition;
}
