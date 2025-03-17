import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterForm = () => {
  return (
    <form className="p-6 md:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Registrate</h1>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="first-name">Nombre</Label>
          <Input id="first-name" type="text" placeholder="Nombre" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="last-name">Apellido</Label>
          <Input id="last-name" type="text" placeholder="Apellido" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password2">Repetir Contraseña</Label>
          <Input id="password2" type="password" required />
          {/* Validate password */}
        </div>
        <Button variant="default" type="submit" className="w-full">
          Crear Cuenta
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
