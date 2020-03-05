import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { IsString, IsNotEmpty } from "class-validator";

@Entity()
export class Gamme {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @IsString()
  @Column()
  nom!: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  finition!: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  isolant!: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  couverture!: string;
}
