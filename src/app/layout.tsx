import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import MainLayout from "@/shared/components/layout/MainLayout";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Hilal Portofolio",
    template: "%s - Hilal Portofolio",
  },
  description: "built by next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} w-full h-full lg:h-screen antialiased bg-background lg:p-8 `}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
