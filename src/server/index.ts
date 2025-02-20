import { projectRouter } from "./routes/project";
import { router } from "./trpc";

export const appRouter = router({
  project: projectRouter,
});

export type TAppRouter = typeof appRouter;
