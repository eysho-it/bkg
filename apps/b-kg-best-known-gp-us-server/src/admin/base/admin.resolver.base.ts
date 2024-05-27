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
import { Admin } from "./Admin";
import { AdminCountArgs } from "./AdminCountArgs";
import { AdminFindManyArgs } from "./AdminFindManyArgs";
import { AdminFindUniqueArgs } from "./AdminFindUniqueArgs";
import { DeleteAdminArgs } from "./DeleteAdminArgs";
import { AdminService } from "../admin.service";
@graphql.Resolver(() => Admin)
export class AdminResolverBase {
  constructor(protected readonly service: AdminService) {}

  async _adminsMeta(
    @graphql.Args() args: AdminCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Admin])
  async admins(@graphql.Args() args: AdminFindManyArgs): Promise<Admin[]> {
    return this.service.admins(args);
  }

  @graphql.Query(() => Admin, { nullable: true })
  async admin(
    @graphql.Args() args: AdminFindUniqueArgs
  ): Promise<Admin | null> {
    const result = await this.service.admin(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Admin)
  async deleteAdmin(
    @graphql.Args() args: DeleteAdminArgs
  ): Promise<Admin | null> {
    try {
      return await this.service.deleteAdmin(args);
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
