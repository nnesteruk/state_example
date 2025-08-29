import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  labelText: string;
  type?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

const Input = <T extends FieldValues>({
  name,
  type,
  labelText,
  register,
  errors,
}: InputProps<T>) => {
  const error = errors[name]?.message as string | undefined;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <label htmlFor={name} style={{ alignSelf: "flex-start" }}>
        {labelText}:
      </label>
      <input type={type} {...register(name)} required />
      {errors[name] && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Input;
