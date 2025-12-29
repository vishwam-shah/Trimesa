import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { ModalProvider } from "@/components/ui/animated-modal";
import ModalRoot from "@/components/ui/modal-root";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Trimesha - Digital Solutions",
  description: "End-to-end digital solutions to transform your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        <ModalProvider>
          {children}
          <Footer />
          <ModalRoot />
        </ModalProvider>
      </body>
    </html>
  );
}
