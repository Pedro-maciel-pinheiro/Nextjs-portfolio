import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "../providers";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning={true}>
      
      <body className="bg-gray-50 dark:bg-slate-800" >
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Navbar/>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
