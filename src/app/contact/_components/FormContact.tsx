"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStore } from "@/stores/store";
import { useState } from "react";
import Button from "@/shared/components/elements/Button";
import Input from "@/shared/components/elements/Input";
import TextArea from "@/shared/components/elements/TextArea";
import SuccessSendMessage from "./SuccessSendMessage";
import {
  messageSchema,
  TMessage,
} from "@/server/message/validations/message.validation";
import { trpc } from "@/shared/libs/trpc";

export default function FormContact() {
  const { setMessage, resetMessage } = useStore();
  const [showSuccess, setShowSuccess] = useState(false);
  const { mutate, isPending } = trpc.message.sendMessage.useMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(messageSchema),
  });

  const onSubmit: SubmitHandler<TMessage> = (data) => {
    mutate(data, {
      onSettled(_, error) {
        if (error) {
          return;
        } else {
          setShowSuccess(true);
          reset();
          resetMessage();
        }
      },
    });
  };
  return (
    <div className="w-full h-full px-3 lg:px-0 lg:w-1/2 items-center flex justify-center border-r border-lines max-sm:mb-10">
      {showSuccess ? (
        <SuccessSendMessage onClick={() => setShowSuccess(false)} />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
          <Input
            label="_name :"
            register={register}
            name="name"
            errors={errors.name}
            onChange={(e) => setMessage("name", e.target.value)}
          />
          <Input
            label="_email :"
            register={register}
            name="email"
            errors={errors.email}
            onChange={(e) => setMessage("email", e.target.value)}
          />
          <TextArea
            label="_message :"
            register={register}
            name="message"
            errors={errors.message}
            onChange={(e) => setMessage("message", e.target.value)}
            rows={5}
          />

          <Button className="mt-5" type="submit">
            {isPending ? "submiting..." : "submit-message"}
          </Button>
        </form>
      )}
    </div>
  );
}
