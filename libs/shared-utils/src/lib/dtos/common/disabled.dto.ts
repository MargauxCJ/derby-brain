import { IsBoolean, IsNotEmpty } from 'class-validator';

export class DisableDto {
  @IsBoolean()
  @IsNotEmpty()
  enabled!: boolean;
}
