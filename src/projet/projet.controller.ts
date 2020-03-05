import { Controller } from "@nestjs/common";
import { Projet } from "./projet.entity";
import { Crud, CrudController } from "@nestjsx/crud";
import { ProjetService } from "./projet.service";

@Crud({
  model: {
    type: Projet
  },
  query: {
    join: {
      client: {},
      gamme: {},
      modules: {}
    }
  }
})
@Controller("projets")
export class ProjetController implements CrudController<Projet> {
  constructor(public service: ProjetService) {}
}
