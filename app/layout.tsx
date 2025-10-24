import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import type React from "react";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Chat Interface",
  description: "Minimal 1-on-1 chat interface",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${sourceCodePro.variable} font-mono antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
