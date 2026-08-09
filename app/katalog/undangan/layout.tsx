import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katalog Undangan Pernikahan Gorontalo",
  description:
    "Lihat katalog undangan pernikahan Mell Studio Gorontalo. Tersedia undangan blangko, softcover, hardcover, acrylic, rustic, minimalis, dan custom.",
  keywords: [
    "katalog undangan Gorontalo",
    "katalog undangan pernikahan Gorontalo",
    "undangan pernikahan Gorontalo",
    "undangan hardcover Gorontalo",
    "undangan softcover Gorontalo",
    "undangan acrylic Gorontalo",
    "undangan rustic Gorontalo",
    "undangan custom Gorontalo",
    "Mell Studio",
    "Mell Studio Gorontalo",
  ],
  alternates: {
    canonical: "/katalog/undangan",
  },
  openGraph: {
    title: "Katalog Undangan Pernikahan | Mell Studio Gorontalo",
    description:
      "Katalog undangan pernikahan Mell Studio Gorontalo: blangko, softcover, hardcover, acrylic, rustic, minimalis, dan custom.",
    url: "https://mellstudio.id/katalog/undangan",
    siteName: "Mell Studio",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KatalogUndanganLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}