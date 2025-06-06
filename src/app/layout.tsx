import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viniani Cruz AlimentAfros",
  description: "Portfolio e serviços de Viviani Aparecida Cruz, nutróloga e pesquisadora em saúde alimentar da população negra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="w-full flex flex-col">
          <Navbar />
          <div className="bg-white mt-14">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
