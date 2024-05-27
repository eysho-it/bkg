import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GpuService } from "./gpu.service";
import { GpuControllerBase } from "./base/gpu.controller.base";

@swagger.ApiTags("gpus")
@common.Controller("gpus")
export class GpuController extends GpuControllerBase {
  constructor(protected readonly service: GpuService) {
    super(service);
  }
}
