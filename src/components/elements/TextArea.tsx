import { TextareaHTMLAttributes } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface ITextArea<T extends FieldValues>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  errors?: FieldError;
}

export default function TextArea<T extends FieldValues>({
  label,
  errors,
  name,
  register,
  ...props
}: ITextArea<T>) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-base font-medium text-secondary6">
        {label}
      </label>
      <textarea
        {...register(name)}
        id={name}
        {...props}
        className="rounded-md border border-lines bg-transparent px-4 py-2 text-sm text-[#465E77] focus:outline-none focus:border-secondary6 focus:[box-shadow:#607b9669_0px_0px_0px_2px]          "
      />
      {errors && (
        <span className="mt-0.5 text-xs text-red-500">{errors.message}</span>
      )}
    </div>
  );
}
