import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmailPopup from "@/components/EmailPopup";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Compare Remote Executive Assistant Services | The EA Index",
  description:
    "Side-by-side comparison of 12+ EA services by price, model, and fit. Updated monthly. Independent reviews for founders and executives.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.theeaindex.com"),
  verification: {
    google: "bB_iYtlKchESRkAxUQjTDH5MDKjtJLJ3F54xpJbu8Kc",
    other: {
      "msvalidate.01": "7D8AC3D925E2CC7C644E264EE05476C3",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-96MNBRRBH8"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-96MNBRRBH8');
          `}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <EmailPopup />
        <Script
          src="https://subscribe-forms.beehiiv.com/attribution.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
