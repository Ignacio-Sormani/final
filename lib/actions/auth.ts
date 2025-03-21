"use server";

import { connectToDB } from "@/lib/database";
import { User } from "@/models";
import { UserRole } from "@/lib/enums";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "@/auth";
import { loginSchema, registerSchema } from "@/lib/validations";

export const register = async (formData: FormData) => {
  const validatedFields = registerSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return validatedFields.error.errors[0].message;
  }

  try {
    await connectToDB();

    const { firstname, lastname, email, password } = validatedFields.data;

    const user = await User.findOne({ email });

    if (user) {
      return "No se pudo crear el usuario";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      role: UserRole.CLIENT,
    });

    await newUser.save();
    console.log("user created");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "No se pudo crear el usuario" };
  }
};

export const login = async (formData: FormData) => {
  const validatedFields = loginSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    return validatedFields.error.errors[0].message;
  }

  const { email, password } = validatedFields.data;
  try {
    await signIn("credentials", { email, password });
    return { success: true };
  } catch (err: any) {
    return { success: false, error: "No se pudo iniciar sesión" };
  }
};

export const logout = async () => {
  "use server";
  await signOut();
};
