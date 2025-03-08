import { Header } from "../components/header";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aprendendo Next.js",
  description: "Aprendendo Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
