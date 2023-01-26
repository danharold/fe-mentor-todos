"use client";
import React, { useState } from "react";

import "../styles/globals.css";
import { Josefin_Sans } from "@next/font/google";

import TodoHeader from "./TodoHeader";

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
  const [dark, setDark] = useState(false);

  function handleDarkMode() {
    if (dark === false) {
      setDark(true);
    } else {
      setDark(false);
    }
  }

  return (
    <html className={`${josefin_sans.variable}`}>
      <head />

      {dark === true ? (
        <body
          className={
            "dark bg-dark-very-dark-blue bg-bg-desktop-dark bg-top bg-no-repeat bg-scroll " +
            (dark === true && "dark") +
            " dark:bg-bg-desktop-dark "
          }
        >
          <div className="max-w-xl mx-auto px-10 mt-16">
            <TodoHeader onClick={handleDarkMode} dark={dark} />
            {children}
          </div>
        </body>
      ) : (
        <body
          className={
            "bg-light-greyish-blue-100 bg-bg-desktop-light bg-top bg-no-repeat bg-scroll"
          }
        >
          <div className="max-w-xl mx-auto px-10 mt-16">
            <TodoHeader onClick={handleDarkMode} dark={dark} />
            {children}
          </div>
        </body>
      )}
    </html>
  );
}
