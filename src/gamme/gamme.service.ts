import { Injectable } from "@nestjs/common";
import { Gamme } from "./gamme.entity";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class GammeService extends TypeOrmCrudService<Gamme> {
  constructor(@InjectRepository(Gamme) repo: Repository<Gamme>) {
    super(repo);
  }
}
