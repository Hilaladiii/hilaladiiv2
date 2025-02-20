import { getAllProject } from "../project/repositories/project.repository";
import { TProjectQueryParam } from "../project/validations/project.validation";
import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const projectRouter = router({
  getAllProject: publicProcedure
    .input(z.custom<TProjectQueryParam>())
    .query(async ({ input }) => await getAllProject(input)),
});
