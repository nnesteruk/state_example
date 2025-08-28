import type { FC } from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

type InputProps<T> = {
  label: string;
  type?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

const Input: FC<InputProps<T>> = ({ label, type, register, errors }) => {
  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input type={type} {...register(label)} />
      {errors[label] && <p style={{ color: "red" }}>{errors[label].message}</p>}
    </div>
  );
};

export default Input;
