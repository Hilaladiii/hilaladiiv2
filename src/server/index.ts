import { messageRouter } from "./routes/message";
import { projectRouter } from "./routes/project";
import { router } from "./trpc";

export const appRouter = router({
  project: projectRouter,
  message: messageRouter,
});

export type TAppRouter = typeof appRouter;
