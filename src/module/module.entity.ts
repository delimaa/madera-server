import { PrimaryGeneratedColumn, ManyToOne, Entity, Column } from "typeorm";
import { Allow, IsString, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { Projet } from "../projet/projet.entity";

@Entity()
export class Module {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @IsString()
  @Column()
  nom!: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  dimensions!: string;

  @Allow()
  @Type(() => Projet)
  @ManyToOne(
    type => Projet,
    projet => projet.modules
  )
  projet!: Projet;
}
