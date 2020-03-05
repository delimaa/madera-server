import { Module } from "@nestjs/common";
import { ModuleController } from "./module.controller";
import { ModuleService } from "./module.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Module])],
  controllers: [ModuleController],
  providers: [ModuleService]
})
export class ModuleModule {}
