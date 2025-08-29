import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import { z } from "zod";
import { GenderEnum, registrationSchema } from "../schema/RegistrationSchema";
import Input from "./Input.component";

type FormValues = z.infer<typeof registrationSchema>;

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(registrationSchema) });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setShowPassword((prev) => !prev);
    alert(`Данные отправлены: ${JSON.stringify(data)}`);
    alert(`Успешно зарегистрировано`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        border: "1px solid grey",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <Input
        name="username"
        register={register}
        errors={errors}
        type="username"
        labelText="Имя пользователя"
      />
      <Input
        name="email"
        register={register}
        errors={errors}
        type="email"
        labelText="Email"
      />
      <Input
        name="password"
        register={register}
        errors={errors}
        type={showPassword ? "text" : "password"}
        labelText="Пароль"
      />
      <Input
        name="confirmPassword"
        register={register}
        errors={errors}
        type="password"
        labelText="Подтверждение пароля"
      />
      <Input
        name="dateOfBirth"
        register={register}
        errors={errors}
        type="date"
        labelText="Дата рождения"
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label htmlFor="gender" style={{ alignSelf: "flex-start" }}>
          Пол:
        </label>
        <select {...register("gender")} defaultValue={"Выберите пол"}>
          <option value="Select gender">Выберите пол</option>
          <option value={GenderEnum.Male}>Мужской</option>
          <option value={GenderEnum.Female}>Женский</option>
        </select>
        {errors.gender && (
          <p style={{ color: "red" }}>{errors.gender.message}</p>
        )}
      </div>
      <Input
        name="phoneNumber"
        register={register}
        errors={errors}
        type="tel"
        labelText="Номер телефона"
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;
