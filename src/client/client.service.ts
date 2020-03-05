import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Client } from "./client.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ClientService extends TypeOrmCrudService<Client> {
  constructor(@InjectRepository(Client) repo: Repository<Client>) {
    super(repo);
  }
}
