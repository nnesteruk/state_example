import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // alert(`Данные отправлены: ${JSON.stringify(data)}`);
    // alert(`Успешно зарегистрировано`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <div>
        <label htmlFor="username">Имя пользователя:</label>
        <input {...register("username")} />
        {errors.username && (
          <p style={{ color: "red" }}>{errors.username.message}</p>
        )}
      </div>
      <Input label="Email" register={register} errors={errors} type="email" />
      <div>
        <label htmlFor="email">Email:</label>
        <input {...register("email")} />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Пароль:</label>
        <input {...register("password")} />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="confirmPassword">Подтвердите пароль:</label>
        <input {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="dateOfBirth">Дата рождения</label>
        <input type="date" {...register("dateOfBirth")} />
      </div>
      <div>
        <label htmlFor="gender">Пол:</label>
        <select {...register("gender")} defaultValue={"Выберите пол"}>
          <option value="Select gender" disabled>
            Выберите пол
          </option>
          <option value={GenderEnum.Male}>Мужской</option>
          <option value={GenderEnum.Female}>Женский</option>
        </select>
        {errors.gender && (
          <p style={{ color: "red" }}>{errors.gender.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="phoneNumber">Номер телефона:</label>
        <input {...register("phoneNumber")} />
        {errors.phoneNumber && (
          <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
        )}
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;
