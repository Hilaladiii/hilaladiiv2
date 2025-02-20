import { z } from "zod";

export const projectQueryParamSchema = z
  .union([z.string(), z.array(z.string())])
  .optional();

export type TProjectQueryParam = z.infer<typeof projectQueryParamSchema>;
