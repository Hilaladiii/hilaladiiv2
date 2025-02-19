"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStore } from "@/stores/store";
import { useState } from "react";
import Button from "@/shared/components/elements/Button";
import Input from "@/shared/components/elements/Input";
import TextArea from "@/shared/components/elements/TextArea";
import SuccessSendMessage from "./SuccessSendMessage";

const contactSchema = z.object({
  name: z.string().min(1, "Name required"),
  email: z.string().min(1, "Email required").email(),
  message: z.string().min(1, "Message required"),
});

type TContact = z.infer<typeof contactSchema>;

export default function FormContact() {
  const { setMessage, resetMessage } = useStore();
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<TContact> = (data) => {
    console.log(data);
    setShowSuccess(true);
    reset();
    resetMessage();
  };
  return (
    <div className="w-full px-3 lg:px-0 lg:w-1/2 items-center flex justify-center border-r border-lines max-sm:mb-10">
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
            submit-message
          </Button>
        </form>
      )}
    </div>
  );
}
