import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mell Studio | Undangan Pernikahan & Buku Yasin Gorontalo",

  description:
    "Mell Studio adalah percetakan undangan pernikahan dan Buku Yasin di Gorontalo. Tersedia undangan hardcover, softcover, custom, serta Buku Yasin dengan berbagai pilihan desain dan finishing.",

  keywords: [
    "Mell Studio",
    "Mell Studio Gorontalo",
    "percetakan undangan Gorontalo",
    "undangan pernikahan Gorontalo",
    "undangan pernikahan",
    "undangan hardcover",
    "undangan softcover",
    "Buku Yasin Gorontalo",
    "percetakan Buku Yasin",
  ],

  authors: [{ name: "Mell Studio" }],

  creator: "Mell Studio",

  metadataBase: new URL("https://mellstudio.id"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Mell Studio | Undangan Pernikahan & Buku Yasin Gorontalo",

    description:
      "Percetakan Undangan Pernikahan & Buku Yasin Mell Studio – Gorontalo.",

    url: "https://mellstudio.id",

    siteName: "Mell Studio",

    locale: "id_ID",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}