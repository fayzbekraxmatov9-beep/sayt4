
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samsung Uzbekistan | Innovatsiyalar olami",
  description:
    "Samsung uslubidagi zamonaviy mahsulotlar va Galaxy qurilmalari katalogi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
