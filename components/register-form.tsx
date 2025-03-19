import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { register } from "@/lib/actions";
import Link from "next/link";

const RegisterForm = async () => {
  return (
    <form className="p-6 md:p-8" action={register as any}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Registrate</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 grid gap-2">
            <Label htmlFor="first-name">Nombre</Label>
            <Input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Nombre"
              required
            />
          </div>
          <div className="flex-1 grid gap-2">
            <Label htmlFor="last-name">Apellido</Label>
            <Input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Apellido"
              required
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="nombre.apellido@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" name="password" type="password" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="passwordrepeat">Repetir Contraseña</Label>
          <Input
            id="passwordrepeat"
            name="passwordrepeat"
            type="password"
            required
          />
        </div>
        <Button variant="default" type="submit" className="w-full">
          Crear Cuenta
        </Button>
        <div className="text-center text-sm">
          Ya tenes una cuenta?{" "}
          <Link href="/login" className={buttonVariants({ variant: "link" })}>
            Inicia Sesión
          </Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
