import { Gpu as TGpu } from "../api/gpu/Gpu";

export const GPU_TITLE_FIELD = "id";

export const GpuTitle = (record: TGpu): string => {
  return record.id?.toString() || String(record.id);
};
