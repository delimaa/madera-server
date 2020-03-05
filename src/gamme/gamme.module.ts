import { Module } from "@nestjs/common";
import { GammeService } from "./gamme.service";
import { GammeController } from "./gamme.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Gamme } from "./gamme.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Gamme])],
  providers: [GammeService],
  controllers: [GammeController],
  exports: [GammeService]
})
export class GammeModule {}
