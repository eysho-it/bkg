/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Gpu } from "./Gpu";
import { GpuCountArgs } from "./GpuCountArgs";
import { GpuFindManyArgs } from "./GpuFindManyArgs";
import { GpuFindUniqueArgs } from "./GpuFindUniqueArgs";
import { DeleteGpuArgs } from "./DeleteGpuArgs";
import { GpuService } from "../gpu.service";
@graphql.Resolver(() => Gpu)
export class GpuResolverBase {
  constructor(protected readonly service: GpuService) {}

  async _gpusMeta(
    @graphql.Args() args: GpuCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Gpu])
  async gpus(@graphql.Args() args: GpuFindManyArgs): Promise<Gpu[]> {
    return this.service.gpus(args);
  }

  @graphql.Query(() => Gpu, { nullable: true })
  async gpu(@graphql.Args() args: GpuFindUniqueArgs): Promise<Gpu | null> {
    const result = await this.service.gpu(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Gpu)
  async deleteGpu(@graphql.Args() args: DeleteGpuArgs): Promise<Gpu | null> {
    try {
      return await this.service.deleteGpu(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
