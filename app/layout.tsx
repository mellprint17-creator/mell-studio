import "./globals.css";

export const metadata = {
  title: "Mell Studio",
  description: "Katalog Undangan Pernikahan & Buku Yasin",
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