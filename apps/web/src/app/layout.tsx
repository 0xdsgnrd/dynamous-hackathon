import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "How I Build Beautiful Frontends with AI",
  description: "A meta landing page showcasing my AI-assisted frontend development workflow with Claude Code",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen grid-bg">{children}</body>
    </html>
  );
}
