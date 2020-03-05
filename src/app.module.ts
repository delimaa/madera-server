import { Module } from "@nestjs/common";
import { ProjectModule } from "./projet/projet.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClientModule } from "./client/client.module";
import { GammeModule } from "./gamme/gamme.module";
import { ModuleModule } from "./module/module.module";

@Module({
  imports: [TypeOrmModule.forRoot(), ProjectModule, ClientModule, GammeModule, ModuleModule],
  controllers: [],
  providers: []
})
export class AppModule {}
