import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Projet } from "./projet.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProjetService extends TypeOrmCrudService<Projet> {
  constructor(@InjectRepository(Projet) repo: Repository<Projet>) {
    super(repo);
  }
}
