import type { Metadata } from "next";
import "./globals.css";
import {Lato} from 'next/font/google'

const lato= Lato({
  weight:['100','300','400','700','900'],
  subsets:['latin'],
  display:'swap'
})


export const metadata: Metadata = {
  title: "my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.className}`}>
      <body>{children}</body>
    </html>
  );
}
