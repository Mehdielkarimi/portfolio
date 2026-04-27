import type { Metadata } from "next";
<<<<<<< HEAD
import "./globals.css";

export const metadata: Metadata = {
  title: "Mehdi ElKarimi — Software Engineer",
  description: "Computer Science Student & Software Engineer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
=======
import { Manrope } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mehdi ElKarimi | Portfolio",
  description:
    "A clean, minimal portfolio for Mehdi ElKarimi, Computer Science Student and Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${manrope.className} bg-black text-white antialiased`}>
        {children}
      </body>
>>>>>>> e53c19f9 (Remove node_modules from repo)
    </html>
  );
}
