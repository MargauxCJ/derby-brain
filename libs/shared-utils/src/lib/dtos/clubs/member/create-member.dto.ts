import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { MemberPosition } from '../../../enums/enums';

export class CreateMemberDto {
  @IsString()
  @IsNotEmpty()
  surname!: string;

  @IsString()
  @IsOptional()
  jerseyNum?: string;

  @IsEnum(MemberPosition)
  @IsOptional()
  defaultPosition?: MemberPosition;
}
