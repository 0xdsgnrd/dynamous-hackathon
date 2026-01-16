import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "How I Build Frontends with AI — A Developer's Workflow",
  description: "A meta landing page: built with the exact process it describes. Editorial brutalist design meets AI-assisted development.",
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
