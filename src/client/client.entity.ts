import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsString, ValidateNested, IsNotEmpty, IsNotEmptyObject } from "class-validator";
import { Type } from "class-transformer";
import { Adresse } from "./adresse";

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id!: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  nom!: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  prenom!: string;

  @Type(() => Adresse)
  @ValidateNested()
  @IsNotEmptyObject()
  @Column("json")
  adresse!: Adresse;
}
