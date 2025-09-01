import {
  useController,
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  labelText?: string;
  type?: string;
  rules?: RegisterOptions<T>;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "name" | "type" | "ref" | "onChange" | "value"
>;

const Input = <T extends FieldValues>({
  name,
  control,
  rules,
  labelText,
  ...inputProps
}: InputProps<T>) => {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      {labelText && (
        <label htmlFor={name} style={{ alignSelf: "flex-start" }}>
          {labelText}:
        </label>
      )}
      <input {...field} {...inputProps} />
      {fieldState.error && (
        <p style={{ color: "red" }}>{fieldState.error.message}</p>
      )}
    </div>
  );
};

export default Input;
