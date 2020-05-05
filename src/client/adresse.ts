import { IsNumber, IsString, IsNotEmpty } from "class-validator";

export class Adresse {
  @IsNumber()
  numero!: number;

  @IsNotEmpty()
  @IsString()
  voie!: string;

  @IsNotEmpty()
  @IsString()
  codePostal!: string;

  @IsNotEmpty()
  @IsString()
  ville!: string;
}
