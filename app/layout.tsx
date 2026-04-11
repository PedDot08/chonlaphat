import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const noto = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['100','300','400','500','700','900'],
});

export const metadata: Metadata = {
  title: "Chonlaphat",
  description: "Chonlaphat - WebProfiles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${noto.className} h-full antialiased`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
