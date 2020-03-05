import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { IsString, IsDate, IsNotEmpty, Allow, IsNotEmptyObject, IsNumber } from "class-validator";
import { Client } from "../client/client.entity";
import { Gamme } from "../gamme/gamme.entity";
import { Type } from "class-transformer";
import { Module } from "../module/module.entity";

@Entity()
export class Projet {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @IsString()
  @Column()
  nom!: string;

  @IsDate()
  @Column("date")
  date!: Date;

  @Allow()
  @Type(() => Client)
  @ManyToOne(type => Client)
  client!: Client;

  @Allow()
  @Type(() => Gamme)
  @ManyToOne(type => Gamme)
  gamme!: Gamme;

  @Allow()
  @Type(() => Module)
  @OneToMany(
    type => Module,
    module => module.projet
  )
  modules!: Module[];
}
