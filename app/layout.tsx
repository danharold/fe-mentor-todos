import "../styles/globals.css";
import Image from "next/image";
import { Josefin_Sans } from "@next/font/google";
import Header from "./Header";

const josefin_sans = Josefin_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "optional",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${josefin_sans.variable}`}>
      <head />
      <body className="bg-light-grey bg-bg-desktop-light bg-top bg-no-repeat bg-scroll">
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
