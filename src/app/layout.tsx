import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { colors } from "@/lib/other_constants/colors";
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
    <html
      lang="en"
      style={
        { "--primary--color": colors["primary--color"] } as CSSProperties
      }
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
