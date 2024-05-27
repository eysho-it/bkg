import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GpuServiceBase } from "./base/gpu.service.base";

@Injectable()
export class GpuService extends GpuServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
