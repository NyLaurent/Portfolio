import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
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
    <html lang="en" className={`${montserrat.className}`}>
      <body>{children}</body>
    </html>
  );
}
