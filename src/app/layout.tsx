import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/ui/Layout";
import Navbar from "@/components/ui/Navbar";
import { ASLProvider } from "@/components/ASLInterpreter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Souund | Creator Infrastructure for Sign-First Communication",
  description: "A premium AI company enabling sign-first creators to participate fully in the creator economy. Sign. Create. Be Heard.",
  keywords: ["Souund", "Sign Language", "AI", "Creator Economy", "Accessibility"],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="antialiased bg-black text-white selection:bg-electric-blue selection:text-white">
        <ASLProvider>
          <Navbar />
          <Layout>
            {children}
          </Layout>
        </ASLProvider>
      </body>
    </html>
  );
}
