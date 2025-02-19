import { InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface IInput<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  errors?: FieldError;
}

export default function Input<T extends FieldValues>({
  label,
  errors,
  name,
  register,
  ...props
}: IInput<T>) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label htmlFor={name} className="text-base font-medium text-secondary6">
          {label}
        </label>
      </div>
      <input
        {...register(name)}
        id={name}
        {...props}
        className="rounded-md border focus:outline-none border-lines text-[#465E77] bg-transparent px-4 py-2 text-sm focus:border-secondary6 focus:[box-shadow:#607b9669_0px_0px_0px_2px]"
      />
      {errors && (
        <span className="mt-0.5 text-xs text-red-500">{errors.message}</span>
      )}
    </div>
  );
}
