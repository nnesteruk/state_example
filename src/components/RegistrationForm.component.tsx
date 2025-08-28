import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GenderEnum, registrationSchema } from "../schema/RegistrationSchema";

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: Date;
  gender: (typeof GenderEnum)[keyof typeof GenderEnum];
  phoneNumber: string;
};

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registrationSchema) });

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
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Пароль:</label>
        <input {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Подтвердите пароль:</label>
        <input {...register("confirmPassword")} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      <div>
        <label htmlFor="dateOfBirth">Дата рождения</label>
        <input {...register("dateOfBirth")} />
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
        {errors.gender && <p>{errors.gender.message}</p>}
      </div>
      <div>
        <label htmlFor="phoneNumber">Номер телефона:</label>
        <input {...register("phoneNumber")} />
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;
