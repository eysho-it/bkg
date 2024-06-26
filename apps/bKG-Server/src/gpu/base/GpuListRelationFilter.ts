/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GpuWhereInput } from "./GpuWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GpuListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GpuWhereInput,
  })
  @ValidateNested()
  @Type(() => GpuWhereInput)
  @IsOptional()
  @Field(() => GpuWhereInput, {
    nullable: true,
  })
  every?: GpuWhereInput;

  @ApiProperty({
    required: false,
    type: () => GpuWhereInput,
  })
  @ValidateNested()
  @Type(() => GpuWhereInput)
  @IsOptional()
  @Field(() => GpuWhereInput, {
    nullable: true,
  })
  some?: GpuWhereInput;

  @ApiProperty({
    required: false,
    type: () => GpuWhereInput,
  })
  @ValidateNested()
  @Type(() => GpuWhereInput)
  @IsOptional()
  @Field(() => GpuWhereInput, {
    nullable: true,
  })
  none?: GpuWhereInput;
}
export { GpuListRelationFilter as GpuListRelationFilter };
