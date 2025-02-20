import { createTRPCReact } from "@trpc/react-query";
import { type TAppRouter } from "@/server";

export const trpc = createTRPCReact<TAppRouter>({});
