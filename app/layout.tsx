import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mellstudio.id"),

  title: {
    default: "Mell Studio | Undangan Pernikahan & Buku Yasin",
    template: "%s | Mell Studio",
  },

  description:
    "Mell Studio menyediakan undangan pernikahan premium dan Buku Yasin dengan desain elegan, material berkualitas, dan hasil cetak rapi.",

  openGraph: {
    title: "Mell Studio | Undangan Pernikahan & Buku Yasin",
    description:
      "Katalog undangan pernikahan premium dan Buku Yasin dari Mell Studio.",
    url: "https://mellstudio.id",
    siteName: "Mell Studio",
    locale: "id_ID",
    type: "website",

    images: [
      {
        url: "/logo-new.png",
        width: 1200,
        height: 630,
        alt: "Mell Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mell Studio | Undangan Pernikahan & Buku Yasin",
    description:
      "Katalog undangan pernikahan premium dan Buku Yasin dari Mell Studio.",
    images: ["/logo-new.png"],
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