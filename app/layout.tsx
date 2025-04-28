import "@styles/global.css";
import React, { ReactNode } from "react";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Prompt Hub",
  description:
    "Prompt Hub is an open source AI prompting tool for modern world to discover, create, and share creative prompts",
  keywords: [
    "prompts",
    "sharing prompts",
    "creative prompts",
    "productivity",
    "prompt collections",
    "prompt hub",
  ],
  authors: [{ name: "Zyrus Alvez" }],
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      
      <body className="flex flex-col font-roboto">
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
