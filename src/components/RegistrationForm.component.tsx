import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GenderEnum, registrationSchema } from "../schema/RegistrationSchema";
import Input from "./Input.component";
import Select from "./Select.component";

type FormValues = z.infer<typeof registrationSchema>;

const RegistrationForm = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      gender: "male",
      phoneNumber: "",
    },
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
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
        control={control}
        type="username"
        labelText="Имя пользователя"
        rules={{ required: "Обязательное поле" }}
      />
      <Input
        name="email"
        control={control}
        type="email"
        labelText="Email"
        rules={{ required: "Обязательное поле" }}
      />
      <Input
        name="password"
        control={control}
        type="password"
        labelText="Пароль"
        rules={{ required: "Обязательное поле" }}
      />
      <Input
        name="confirmPassword"
        control={control}
        type="password"
        labelText="Подтверждение пароля"
        rules={{ required: "Обязательное поле" }}
      />
      <Input
        name="dateOfBirth"
        control={control}
        type="date"
        labelText="Дата рождения"
        rules={{ required: "Обязательное поле" }}
      />
      <Select
        name="gender"
        control={control}
        labelText="Пол"
        rules={{ required: "Обязательное поле" }}
        options={[
          { value: GenderEnum.Male, label: "Мужской" },
          { value: GenderEnum.Female, label: "Женский" },
        ]}
      />
      <Input
        name="phoneNumber"
        control={control}
        type="tel"
        labelText="Номер телефона"
        rules={{ required: "Обязательное поле" }}
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;
