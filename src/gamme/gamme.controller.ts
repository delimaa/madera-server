import { Controller } from "@nestjs/common";
import { GammeService } from "./gamme.service";
import { Gamme } from "./gamme.entity";
import { CrudController, Crud } from "@nestjsx/crud";

@Crud({ model: { type: Gamme } })
@Controller("gammes")
export class GammeController implements CrudController<Gamme> {
  constructor(public service: GammeService) {}
}
