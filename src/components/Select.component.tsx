import {
  useController,
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form";

type SelectProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions<T>;
  labelText?: string;
  options: { value: string; label: string }[];
} & Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "name" | "ref" | "onChange" | "value"
>;

const Select = <T extends FieldValues>({
  name,
  control,
  rules,
  labelText,
  ...selectProps
}: SelectProps<T>) => {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <label htmlFor={name} style={{ alignSelf: "flex-start" }}>
        {labelText}:
      </label>
      <select {...field} {...selectProps}>
        {selectProps?.options.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {fieldState.error && (
        <p style={{ color: "red" }}>{fieldState.error.message}</p>
      )}
    </div>
  );
};

export default Select;
