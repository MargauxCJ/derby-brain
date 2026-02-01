import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @IsString()
  @IsNotEmpty()
  oldPassword!: string;

  @IsString()
  @MinLength(8, {
    message: 'Le nouveau mot de passe doit faire au moins 8 caractères',
  })
  newPassword!: string;
}
