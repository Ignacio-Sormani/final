import './ui/global.css'
import { montserrat } from './ui/fonts';

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
