import { z } from "zod";

export const GenderEnum = {
  Male: "male",
  Female: "female",
} as const;

export const registrationSchema = z
  .object({
    username: z
      .string()
      .min(3, "Минимальная длина 3 символа")
      .max(20, "Максимальная длина 20 символов"),
    email: z.email("Некорректный email"),
    password: z
      .string()
      .min(6, "Минимальная длина 6 символов")
      .max(20, "Максимальная длина 20 символов")
      .regex(
        /[A-Z]/,
        "Пароль должен содержать как минимум одну заглавную букву",
      ),
    confirmPassword: z.string(),
    dateOfBirth: z.coerce.date(),
    gender: z.enum(GenderEnum, "Выберите пол"),
    phoneNumber: z
      .string()
      .regex(/^\+?[0-9]{7,15}$/, "Некорректный номер телефона"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });
