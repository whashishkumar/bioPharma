import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Providers } from "@/context/Provider";

const sora = localFont({
  src: "../public/fonts/Sora-Regular.ttf",
  weight: "400",
  variable: "--font-sora",
});

const redHatDisplay = localFont({
  src: [
    {
      path: "../public/fonts/RedHatDisplay-SemiBold.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/RedHatDisplay-SemiBold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/RedHatDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/RedHatDisplay-SemiBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-red-hat-display",
});

const sanchez = localFont({
  src: "../public/fonts/Sanchez-Regular.ttf",
  weight: "400",
  variable: "--font-sanchez",
});

const poppins = localFont({
  src: "../public/fonts/Poppins-Regular.ttf",
  weight: "400",
  variable: "--font-poppins",
});

const marope = localFont({
  src: "../public/fonts/Manrope-Medium.ttf",
  weight: "400",
  variable: "--font-marope",
});

export const metadata: Metadata = {
  title: "bio Pharma",
  description:
    "BioBox Pharma is a leading pharmaceutical manufacturing company dedicated to quality, innovation, and compliance",
  icons: {
    icon: `/images/bioLogo.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${marope.variable} ${redHatDisplay.variable} ${sanchez.variable} ${poppins.variable} antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
