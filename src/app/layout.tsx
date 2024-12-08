import type { Metadata } from "next";
import "./globals.css";
import localFont from "@next/font/local";

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
    <html lang="en">
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amaranth&family=Island+Moments&family=Lexend&family=Montserrat+Subrayada&family=Nothing+You+Could+Do&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </header>
      <body>{children}</body>
    </html>
  );
}
