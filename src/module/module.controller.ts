import { Controller } from "@nestjs/common";
import { ModuleService } from "./module.service";
import { Module } from "./module.entity";
import { CrudController, Crud, Override, ParsedRequest, ParsedBody, CreateManyDto, CrudRequest } from "@nestjsx/crud";

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const categoryRangeMap: { [key: string]: number[] } = {
  "Murs extérieurs": [5000, 10000],
  "Cloisons intérieures": [3000, 6000],
  "Plancher sur dalle": [8000, 16000],
  "Plancher porteur": [10000, 20000],
  "Fermes de charpente": [7000, 14000],
  Couverture: [9000, 18000]
};

@Crud({ model: { type: Module }, query: { join: { projet: {} } } })
@Controller("modules")
export class ModuleController implements CrudController<Module> {
  constructor(public service: ModuleService) {}

  get base(): CrudController<Module> {
    return this;
  }

  @Override()
  createMany(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: CreateManyDto<Module>) {
    dto.bulk.forEach(mod => {
      const [min, max] = categoryRangeMap[mod.category];
      mod.prix = randomIntFromInterval(min, max);
    });
    return this.base.createManyBase!(req, dto);
  }
}
