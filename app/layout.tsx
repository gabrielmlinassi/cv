import "@/styles/globals.css";

import { ReactNode } from "react";
import { Inter, IBM_Plex_Mono } from "next/font/google";

import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Providers } from "./providers";

const inter = Inter({
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["Helvetica", "sans-serif"],
  subsets: ["latin"],
});

const ibm_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-ibm-mono",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${ibm_mono.variable}`}
    >
      <body className="bg-white dark:bg-[#0c121e] mb-10 font-sans">
        <Providers>
          <Header />
          <main className="pt-[130px] flex flex-col gap-14">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
