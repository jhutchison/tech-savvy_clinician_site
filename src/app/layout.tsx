import type { Metadata } from "next";
import { tagline } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Savvy Clinician",
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
