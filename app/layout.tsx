// app/layout.tsx
import "../styles/global.css";
import React, { ReactNode } from "react";

export const metadata = {
  title: "Prompt Hub",
  description: "A collection of prompts that users can share and copy for various creative uses.",
  keywords: ["prompts", "sharing prompts", "creative prompts", "productivity", "prompt collections", "prompt hub"],
  authors: [{ name: "Zyrus Alvez" }],
};


type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}