import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ashok Kumar - Portfolio",
  description: "Full-stack Web Developer | MERN Stack | Portfolio",
  keywords: [
    "Ashok Kumar",
    "Web Developer",
    "MERN Stack",
    "Portfolio",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Ashok Kumar" }],
  creator: "Ashok Kumar",
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
