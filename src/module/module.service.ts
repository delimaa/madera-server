import { Injectable } from "@nestjs/common";
import { Module } from "./module.entity";
import { GammeService } from "../gamme/gamme.service";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ModuleService extends TypeOrmCrudService<Module> {
  constructor(@InjectRepository(Module) repo: Repository<Module>) {
    super(repo);
  }
}
