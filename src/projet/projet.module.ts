import { Module } from "@nestjs/common";
import { ProjetController } from "./projet.controller";
import { ProjetService } from "./projet.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Projet } from "./projet.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Projet])],
  controllers: [ProjetController],
  providers: [ProjetService]
})
export class ProjectModule {}
