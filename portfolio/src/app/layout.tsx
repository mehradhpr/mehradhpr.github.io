import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/ui/custom/nav-bar";
import { Footer } from "@/components/ui/custom/footer-bar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehrad Hassanpour",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gradient-to-br from-amber-300 via-amber-600 via-65% to-amber-700">
      <body className={`${inter.className} bg-inherit bg-opacity-80 select-none`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
