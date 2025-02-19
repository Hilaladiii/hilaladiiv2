"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../elements/Input";
import Button from "../elements/Button";
import TextArea from "../elements/TextArea";
import { useStore } from "@/stores/store";
import { useState } from "react";

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
    <div className="w-1/2 items-center flex justify-center border-r border-lines">
      {showSuccess ? (
        <div className="flex flex-col max-w-xs text-center">
          <h1 className="text-2xl text-white ">Thank you! 🤘</h1>
          <p className="text-secondary6 text-sm">
            Your message has been accepted. You will recieve answer really soon!
          </p>
          <Button
            className="mt-5 w-fit mx-auto"
            onClick={() => setShowSuccess(false)}
          >
            send-new-message
          </Button>
        </div>
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
