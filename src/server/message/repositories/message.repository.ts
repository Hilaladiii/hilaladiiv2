import prisma from "@/shared/libs/prisma/prisma";
import { TMessage } from "../validations/message.validation";

export const sendMessage = async (data: TMessage) => {
  try {
    await prisma.message.create({
      data,
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
