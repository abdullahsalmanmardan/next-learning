import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  analytics,
  revenue,
}: Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode;
  revenue: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* old method to call the components here. */}
      <div>{analytics}</div>
      <div>{revenue}</div>
    </html>
  );
}