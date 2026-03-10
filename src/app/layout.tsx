import type { Metadata } from "next";
import { tagline, companyName } from "@/lib/strings/strings";
import "./globals.css";

export const metadata: Metadata = {
  title: companyName,
  description: tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
