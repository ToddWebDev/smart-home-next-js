import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import Analytics from "@/components/Analytics";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GA_ID = "G-CMMYTVP534";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "South Jordan Smart Home",
  description:
    "South Jordan Smart Home offers neighborhood TV wall mounting and smart home automation services, including smart lighting, smart dimmer, and smart cameras. Serving South Jordan and Daybreak in Utah with friendly installation and seamless integration for Alexa, Google, and Apple HomeKit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        {/* Google Analytics scripts */}
        <Analytics />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Header />
        <main className="mx-auto max-w-screen-xl px-5 pt-6 md:pt-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
