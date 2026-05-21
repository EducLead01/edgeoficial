import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edgeeng.com.br"),
  title: "EDGE Engenharia",
  description:
    "EDGE Engenharia — Climatização, Energia Solar, Treinamentos e Engenharia Modular.",
  openGraph: {
    title: "EDGE Engenharia",
    description:
      "EDGE Engenharia — Climatização, Energia Solar, Treinamentos e Engenharia Modular.",
    url: "https://edgeeng.com.br",
    siteName: "EDGE Engenharia",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDGE Engenharia",
    description:
      "EDGE Engenharia — Climatização, Energia Solar, Treinamentos e Engenharia Modular.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-montserrat">{children}</body>
    </html>
  );
}
