import { Module } from "@nestjs/common";
import { GpuModuleBase } from "./base/gpu.module.base";
import { GpuService } from "./gpu.service";
import { GpuController } from "./gpu.controller";
import { GpuResolver } from "./gpu.resolver";

@Module({
  imports: [GpuModuleBase],
  controllers: [GpuController],
  providers: [GpuService, GpuResolver],
  exports: [GpuService],
})
export class GpuModule {}
