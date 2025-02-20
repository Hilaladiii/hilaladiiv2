import { sendMessage } from "../message/repositories/message.repository";
import { messageSchema } from "../message/validations/message.validation";
import { publicProcedure, router } from "../trpc";

export const messageRouter = router({
  sendMessage: publicProcedure
    .input(messageSchema)
    .mutation(async ({ input }) => {
      await sendMessage(input);
    }),
});
