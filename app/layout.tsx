import '@/app/global.css'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme='cupcake' lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
