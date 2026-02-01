import { IsInt, IsNotEmpty } from 'class-validator';

export class CreatePairDto {
  @IsInt()
  @IsNotEmpty({ message: 'Le match est obligatoire' })
  gameId!: number;

  @IsInt()
  @IsNotEmpty({ message: 'Le premier membre est obligatoire' })
  member1Id!: number;

  @IsInt()
  @IsNotEmpty({ message: 'Le second membre est obligatoire' })
  member2Id!: number;
}
