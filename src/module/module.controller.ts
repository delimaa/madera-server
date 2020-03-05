import { Controller } from "@nestjs/common";
import { ModuleService } from "./module.service";
import { Module } from "./module.entity";
import { CrudController, Crud } from "@nestjsx/crud";

@Crud({ model: { type: Module }, query: { join: { projet: {} } } })
@Controller("modules")
export class ModuleController implements CrudController<Module> {
  constructor(public service: ModuleService) {}
}
