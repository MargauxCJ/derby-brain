// libs/shared/src/lib/dto/game/create-game.dto.ts
import { IsNotEmpty, IsString, IsDateString, IsInt } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty({ message: 'Le nom du match est obligatoire (ex: Match 1)' })
  name!: string;

  @IsDateString()
  @IsNotEmpty({ message: "La date et l'heure du match sont obligatoires" })
  date!: string;

  @IsInt()
  @IsNotEmpty()
  eventId!: number;

  @IsInt()
  @IsNotEmpty({ message: 'Vous devez sélectionner votre équipe interne' })
  homeTeamId!: number;

  @IsString()
  @IsNotEmpty({ message: "Le nom de l'équipe adverse est obligatoire" })
  opponentName!: string;
}
