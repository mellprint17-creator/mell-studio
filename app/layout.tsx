import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mellstudio.id"),

  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  title: {
    default: "Mell Studio | Percetakan Undangan Gorontalo",
    template: "%s | Mell Studio",
  },

  description:
    "Mell Studio adalah percetakan undangan pernikahan di Gorontalo. Menyediakan undangan hardcover, softcover, custom, undangan acrylic, undangan rustic, serta Buku Yasin.",

  keywords: [
    "Mell Studio",
    "Mell Studio Gorontalo",
    "percetakan undangan Gorontalo",
    "percetakan undangan pernikahan Gorontalo",
    "undangan pernikahan Gorontalo",
    "undangan hardcover Gorontalo",
    "undangan softcover Gorontalo",
    "undangan custom Gorontalo",
    "undangan acrylic Gorontalo",
    "undangan rustic Gorontalo",
    "Buku Yasin Gorontalo",
    "percetakan Buku Yasin Gorontalo",
  ],

  authors: [
    {
      name: "Mell Studio",
      url: "https://mellstudio.id",
    },
  ],

  creator: "Mell Studio",
  publisher: "Mell Studio",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Mell Studio | Percetakan Undangan Gorontalo",

    description:
      "Percetakan Undangan Pernikahan & Buku Yasin Mell Studio – Gorontalo.",

    url: "https://mellstudio.id",

    siteName: "Mell Studio",

    locale: "id_ID",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Mell Studio | Percetakan Undangan Gorontalo",

    description:
      "Percetakan undangan pernikahan, hardcover, softcover, custom, acrylic, rustic dan Buku Yasin di Gorontalo.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {children}

        {/* =====================================================
            GOOGLE ANALYTICS
            Measurement ID: G-HTL83QYRH
        ===================================================== */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HTL83QYRH"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-HTL83QYRH');
          `}
        </Script>

        {/* =====================================================
            INFORMASI BISNIS UNTUK GOOGLE
        ===================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",

              name: "Mell Studio",

              description:
                "Percetakan undangan pernikahan dan Buku Yasin di Gorontalo.",

              url: "https://mellstudio.id",

              telephone: "+6282192148895",

              address: {
                "@type": "PostalAddress",
                addressLocality: "Kota Gorontalo",
                addressRegion: "Gorontalo",
                addressCountry: "ID",
              },

              areaServed: {
                "@type": "City",
                name: "Gorontalo",
              },

              sameAs: ["https://www.instagram.com/mellstudio_gtlo/"],
            }),
          }}
        />
      </body>
    </html>
  );
}