import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ToDoAlert } from "@/components/shared/ToDoAlert";
import { ToDoAlertDialog } from "@/components/shared/ToDoAlertDialog";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.className} antialiased bg-background`}>
        {children}
        <ToDoAlertDialog />
        <ToDoAlert />
      </body>
    </html>
  );
}
