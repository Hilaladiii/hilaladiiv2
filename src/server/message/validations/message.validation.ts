import { z } from "zod";

export const messageSchema = z.object({
  name: z.string().min(1, "Name required"),
  email: z.string().min(1, "Email required").email(),
  message: z.string().min(1, "Message required"),
});

export type TMessage = z.infer<typeof messageSchema>;
