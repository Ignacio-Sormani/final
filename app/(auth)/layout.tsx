"use client";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function LoginForm({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "min-h-screen w-screen flex flex-col items-center justify-center gap-6",
        className
      )}
      {...props}
    >
      <Card className="overflow-hidden h-2/3 w-2/3 max-w-96 md:w-3/4 md:max-w-192">
        <CardContent className="grid p-0 md:grid-cols-2">
          {children}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            alt="Screenshots of the dashboard project showing desktop version"
            className="hidden md:block inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        Al continuar, aceptas nuestros{" "}
        <span className="underline">Terminos de Servicio</span> y{" "}
        <span className="underline">Politicas de Privacidad</span>
      </div>
    </div>
  );
}
