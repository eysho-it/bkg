import { GpuWhereInput } from "./GpuWhereInput";
import { GpuOrderByInput } from "./GpuOrderByInput";

export type GpuFindManyArgs = {
  where?: GpuWhereInput;
  orderBy?: Array<GpuOrderByInput>;
  skip?: number;
  take?: number;
};
