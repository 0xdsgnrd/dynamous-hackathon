import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Agentic App",
  description: "A monorepo with agentic layer support",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
