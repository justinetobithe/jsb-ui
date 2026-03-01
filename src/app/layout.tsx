import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import AppSessionProvider from "@/components/AppSessionProvider";
import AppTanstackProvider from "@/components/AppTanstackProvider";
import AppDialogProvider from "@/components/AppDialog";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JSB Lifestyle & Resorts",
  description: "JSB Lifestyle & Resorts",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head />
      <body className={`${poppins.variable} antialiased`}>
        <AppSessionProvider>
          <AppTanstackProvider>
            <AppDialogProvider>{children}</AppDialogProvider>
          </AppTanstackProvider>
        </AppSessionProvider>
        <Toaster />
      </body>
    </html>
  );
}