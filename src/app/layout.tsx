import type { Metadata } from "next";
import { Urbanist} from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Malessan Landing Page🖥💾",
  description: "Landing page for Malessan, showcasing our services and expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
