import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { Client } from "./client.entity";
import { ClientService } from "./client.service";

@Crud({
  model: {
    type: Client
  }
})
@Controller("clients")
export class ClientController implements CrudController<Client> {
  constructor(public service: ClientService) {}
}
