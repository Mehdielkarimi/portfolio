import type { Metadata } from "next";
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
    </html>
  );
}
