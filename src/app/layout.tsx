import type { Metadata } from "next";
import "./globals.css";
import localFont from "@next/font/local";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "DnD",
  description:
    "The Forum for Dance and Dramatics (DND) is a cultural club at the National Institute of Technology Calicut (NIT Calicut)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amaranth&family=Island+Moments&family=Lexend&family=Montserrat+Subrayada&family=Nothing+You+Could+Do&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
      </header>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
