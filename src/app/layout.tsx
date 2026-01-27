import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5k-heroes",
  description: "5K fundraising platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
