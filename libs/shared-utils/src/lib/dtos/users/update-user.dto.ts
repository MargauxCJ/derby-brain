import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { MemberPosition, UserRole } from '../../enums/enums';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  surname?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  jerseyNum?: string;

  @IsEnum(MemberPosition)
  @IsOptional()
  defaultPosition?: MemberPosition;

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;
}
