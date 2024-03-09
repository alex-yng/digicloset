import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "@/context/AuthContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "digi_closet",
  description: "An all-in-one digital wardrobe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-sage-50 dark:bg-slate-900 antialiased`}
      >
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
