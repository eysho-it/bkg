import * as graphql from "@nestjs/graphql";
import { GpuResolverBase } from "./base/gpu.resolver.base";
import { Gpu } from "./base/Gpu";
import { GpuService } from "./gpu.service";

@graphql.Resolver(() => Gpu)
export class GpuResolver extends GpuResolverBase {
  constructor(protected readonly service: GpuService) {
    super(service);
  }
}
