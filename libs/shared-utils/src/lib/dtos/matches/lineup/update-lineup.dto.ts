import { IsArray, IsEnum, IsInt, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MemberPosition } from '../../../enums/enums';

class LineupMemberInput {
  @IsInt()
  userId!: number;

  @IsEnum(MemberPosition)
  role!: MemberPosition;
}

export class UpdateLineupDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LineupMemberInput)
  members!: LineupMemberInput[];
}
