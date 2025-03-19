import { z as zod } from "zod";

export const registerSchema = zod
  .object({
    firstname: zod
      .string()
      .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
    lastname: zod
      .string()
      .min(3, { message: "El apellido debe tener al menos 3 caracteres" }),
    email: zod
      .string()
      .min(1, { message: "El email es requerido" })
      .email({ message: "El email no es válido" }),
    password: zod
      .string()
      .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
      .max(10, {
        message: "La contraseña no puede tener más de 10 caracteres",
      }),
    passwordrepeat: zod
      .string()
      .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
      .max(10, {
        message: "La contraseña no puede tener más de 10 caracteres",
      }),
  })
  .refine((data) => data.password === data.passwordrepeat, {
    message: "Las contraseñas no coinciden",
    path: ["passwordrepeat"],
  });

export const loginSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: "El email es requerido" })
    .email({ message: "El email no es válido" }),
  password: zod
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
    .max(10, { message: "La contraseña no puede tener más de 10 caracteres" }),
});
