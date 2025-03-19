import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { auth } from "@/auth";
import { login } from "@/lib/actions";

const LoginForm = async () => {
  return (
    <form className="p-6 md:p-8" action={login as any}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Iniciar Sesión</h1>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="nombre.apellido@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" type="password" name="password" required />
        </div>
        <Button variant="default" type="submit" className="w-full">
          Ingresar
        </Button>
        <div className="text-center text-sm">
          No tenes una cuenta?{" "}
          <Link
            href="/register"
            className={buttonVariants({ variant: "link" })}
          >
            Registrate
          </Link>
          <div className="flex justify-center">
            <Link
              href="/recover"
              className={`${buttonVariants({
                variant: "link",
              })} align-center text-sm underline-offset-2 hover:underline" `}
            >
              Olvidaste tu contraseña?
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
