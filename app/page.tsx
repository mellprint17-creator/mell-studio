import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import products from "./Data/products";
import galleryYasin from "./Data/gallery-yasin";
import ProductCard from "./components/ProductCard";

/* =========================================================
   ORNAMEN BUNGA
   Putih / Ivory + aksen Gold
   Dibuat langsung dengan SVG, tanpa file gambar tambahan
   ========================================================= */

function FloralOrnament({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      style={{
        transform: flip ? "scaleX(-1)" : undefined,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 360 420"
        width="360"
        height="420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ranting gold utama */}

        <path
          d="M10 415C52 338 88 275 145 211C203 147 267 80 350 17"
          stroke="#C7A35A"
          strokeWidth="1.5"
          opacity="0.8"
        />

        <path
          d="M72 318C48 280 38 244 43 207"
          stroke="#C7A35A"
          strokeWidth="1"
          opacity="0.75"
        />

        <path
          d="M112 263C151 240 175 210 182 170"
          stroke="#C7A35A"
          strokeWidth="1"
          opacity="0.75"
        />

        <path
          d="M173 198C216 179 242 145 250 111"
          stroke="#C7A35A"
          strokeWidth="1"
          opacity="0.75"
        />

        <path
          d="M235 135C267 119 291 91 303 60"
          stroke="#C7A35A"
          strokeWidth="1"
          opacity="0.75"
        />

        {/* Daun lembut */}

        <g fill="#D7D0B7" opacity="0.5">
          <ellipse
            cx="55"
            cy="279"
            rx="6"
            ry="18"
            transform="rotate(-40 55 279)"
          />

          <ellipse
            cx="83"
            cy="319"
            rx="6"
            ry="18"
            transform="rotate(42 83 319)"
          />

          <ellipse
            cx="139"
            cy="235"
            rx="6"
            ry="18"
            transform="rotate(-45 139 235)"
          />

          <ellipse
            cx="181"
            cy="183"
            rx="6"
            ry="18"
            transform="rotate(42 181 183)"
          />

          <ellipse
            cx="226"
            cy="148"
            rx="6"
            ry="17"
            transform="rotate(-42 226 148)"
          />

          <ellipse
            cx="275"
            cy="103"
            rx="6"
            ry="17"
            transform="rotate(42 275 103)"
          />
        </g>

        {/* Bunga putih / ivory */}

        <g
          fill="#FFFDF7"
          stroke="#D8B875"
          strokeWidth="0.8"
        >
          <g transform="translate(43 207)">
            <circle cx="0" cy="-8" r="5" />
            <circle cx="8" cy="0" r="5" />
            <circle cx="0" cy="8" r="5" />
            <circle cx="-8" cy="0" r="5" />
            <circle cx="0" cy="0" r="2" fill="#C7A35A" />
          </g>

          <g transform="translate(92 249)">
            <circle cx="0" cy="-7" r="4.5" />
            <circle cx="7" cy="0" r="4.5" />
            <circle cx="0" cy="7" r="4.5" />
            <circle cx="-7" cy="0" r="4.5" />
            <circle cx="0" cy="0" r="1.8" fill="#C7A35A" />
          </g>

          <g transform="translate(181 170)">
            <circle cx="0" cy="-8" r="5" />
            <circle cx="8" cy="0" r="5" />
            <circle cx="0" cy="8" r="5" />
            <circle cx="-8" cy="0" r="5" />
            <circle cx="0" cy="0" r="2" fill="#C7A35A" />
          </g>

          <g transform="translate(250 111)">
            <circle cx="0" cy="-7" r="4.5" />
            <circle cx="7" cy="0" r="4.5" />
            <circle cx="0" cy="7" r="4.5" />
            <circle cx="-7" cy="0" r="4.5" />
            <circle cx="0" cy="0" r="1.8" fill="#C7A35A" />
          </g>

          <g transform="translate(303 60)">
            <circle cx="0" cy="-7" r="4.5" />
            <circle cx="7" cy="0" r="4.5" />
            <circle cx="0" cy="7" r="4.5" />
            <circle cx="-7" cy="0" r="4.5" />
            <circle cx="0" cy="0" r="1.8" fill="#C7A35A" />
          </g>
        </g>

        {/* Bunga kecil */}

        <g
          fill="#FFFDF7"
          stroke="#D8B875"
          strokeWidth="0.6"
        >
          <circle cx="67" cy="292" r="3.5" />
          <circle cx="108" cy="231" r="3" />
          <circle cx="126" cy="263" r="3.5" />
          <circle cx="155" cy="215" r="3" />
          <circle cx="205" cy="151" r="3.5" />
          <circle cx="227" cy="128" r="3" />
          <circle cx="270" cy="91" r="3.5" />
          <circle cx="288" cy="74" r="3" />
          <circle cx="325" cy="42" r="3.5" />
        </g>

        {/* Titik gold */}

        <g fill="#C7A35A">
          <circle cx="67" cy="292" r="1" />
          <circle cx="108" cy="231" r="1" />
          <circle cx="126" cy="263" r="1" />
          <circle cx="155" cy="215" r="1" />
          <circle cx="205" cy="151" r="1" />
          <circle cx="227" cy="128" r="1" />
          <circle cx="270" cy="91" r="1" />
          <circle cx="288" cy="74" r="1" />
          <circle cx="325" cy="42" r="1" />
        </g>
      </svg>
    </div>
  );
}


/* =========================================================
   HOME PAGE
   ========================================================= */

export default function HomePage() {
  const instagram =
    "https://www.instagram.com/mellstudio_gtlo";

  const facebook =
    "https://www.facebook.com/profile.php?id=100087348264580";

  const tiktok =
    "https://www.tiktok.com/@mellstudi0";

  const whatsapp =
    "https://wa.me/6282192148895?text=" +
    encodeURIComponent(
      "Halo Mell Studio, saya ingin konsultasi mengenai produk."
    );

  const googleMaps =
    "https://maps.app.goo.gl/PU2KYv1BFXGhFM7Q7";

  const fotoUndangan = "/images/luxury.jpg";

  const fotoYasin = galleryYasin[0];

  return (
    <main className="min-h-screen bg-[#fcfaf6] text-[#343832]">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-[#e9dfcf] bg-white/95 backdrop-blur">

        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6">

          {/* LOGO */}

          <Link
            href="/"
            className="relative block h-16 w-56"
          >
            <Image
              src="/images/logo/logo-new.png"
              alt="Mell Studio"
              fill
              priority
              sizes="220px"
              className="object-contain object-left"
            />
          </Link>


          {/* MENU */}

          <nav className="hidden items-center gap-9 md:flex">

            <Link
              href="/"
              className="border-b border-[#b4873f] pb-1 text-sm font-medium text-[#343832]"
            >
              Beranda
            </Link>

            <a
              href="#kategori"
              className="text-sm text-[#55564f] transition hover:text-[#a27c3f]"
            >
              Kategori
            </a>

            <a
              href="#produk"
              className="text-sm text-[#55564f] transition hover:text-[#a27c3f]"
            >
              Produk
            </a>

            <a
              href="#tentang"
              className="text-sm text-[#55564f] transition hover:text-[#a27c3f]"
            >
              Tentang
            </a>

          </nav>


          {/* SOCIAL */}

          <div className="flex items-center gap-4">

            <div className="hidden items-center gap-4 border-l border-[#e5dccd] pl-5 sm:flex">

              {/* INSTAGRAM */}

              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Mell Studio"
                className="text-[#8c795d] transition hover:text-[#b4873f]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>


              {/* FACEBOOK */}

              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Mell Studio"
                className="text-[#8c795d] transition hover:text-[#b4873f]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1z" />
                </svg>
              </a>


              {/* TIKTOK */}

              <a
                href={tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Mell Studio"
                className="text-[#8c795d] transition hover:text-[#b4873f]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M16.5 3c.4 2.2 1.7 3.6 3.8 3.8v3.1c-1.4.1-2.7-.3-3.8-1v6.2c0 3.5-2.3 5.8-5.7 5.8-3.2 0-5.6-2.3-5.6-5.4 0-3.3 2.7-5.6 5.9-5.6.3 0 .6 0 .9.1v3.1c-.3-.1-.6-.2-.9-.2-1.5 0-2.7 1-2.7 2.5 0 1.4 1.1 2.5 2.5 2.5 1.7 0 2.6-1.1 2.6-3V3h3z" />
                </svg>
              </a>


              {/* WHATSAPP */}

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Mell Studio"
                className="text-[#8c795d] transition hover:text-green-600"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M12 2a9.8 9.8 0 0 0-8.5 14.8L2 22l5.4-1.4A9.9 9.9 0 1 0 12 2zm0 17.9c-1.6 0-3.1-.4-4.4-1.3l-.3-.2-3.2.8.9-3.1-.2-.3a8 8 0 1 1 7.2 4.1zm4.4-5.9c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7.9-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.4-2.9-.2-.3.2-.3.6-1 .1-.2.1-.3 0-.5s-.5-1.2-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.8.8-1 1.8-.6 2.9.4 1.1 1.1 2.1 2 2.9 1.3 1.1 2.8 1.9 4.3 2.3.5.2 1 .1 1.4-.1.4-.2.7-.7.8-1.1.1-.1.1-.2-.1-.3z" />
                </svg>
              </a>

            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg bg-[#b4873f] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#987034] sm:block"
            >
              0821-9214-8895
            </a>

          </div>

        </div>

      </header>


      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7f1e7]">

        {/* ORNAMEN KIRI ATAS */}

        <FloralOrnament
          className="-left-28 -top-28 z-20 scale-[0.65] opacity-90 sm:-left-20 sm:-top-24 sm:scale-[0.78] lg:-left-12 lg:-top-20 lg:scale-90"
        />


        {/* ORNAMEN KANAN BAWAH */}

        <FloralOrnament
          className="-bottom-28 -right-28 z-20 scale-[0.65] opacity-90 sm:-bottom-24 sm:-right-20 sm:scale-[0.78] lg:-bottom-20 lg:-right-12 lg:scale-90"
          flip
        />


        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-[0.88fr_1.12fr] lg:py-16">

          {/* TEKS */}

          <div className="relative z-30 order-2 md:order-1">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#c7a35a]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a17b3e]">
                Mell Studio
              </p>

            </div>


            <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#30342f] sm:text-6xl">

              Undangan &amp;
              <br />
              Buku Yasin

            </h1>


            <p className="mt-5 max-w-xl font-serif text-xl italic leading-relaxed text-[#91816d] sm:text-2xl">
              Untuk setiap momen dan kebutuhan Anda.
            </p>


            <div className="mt-6 h-px w-24 bg-[#c7a35a]" />


            <p className="mt-6 max-w-xl text-base leading-8 text-[#68675f]">

              Koleksi undangan pernikahan dan Buku Yasin
              dengan desain elegan, material berkualitas,
              serta finishing yang dibuat dengan perhatian
              pada setiap detail.

            </p>


            <div className="mt-7 flex flex-wrap gap-3">

              <Link
                href="/katalog/undangan?jenis=undangan"
                className="rounded-lg bg-[#b4873f] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#987034]"
              >
                Lihat Undangan
              </Link>


              <Link
                href="/katalog/undangan?jenis=yasin"
                className="rounded-lg border border-[#b89452] bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#8c6c38] transition hover:bg-white"
              >
                Lihat Buku Yasin
              </Link>

            </div>

          </div>


          {/* DUA FOTO */}

          <div className="relative z-10 order-1 md:order-2">

            <div className="relative grid grid-cols-2 items-end gap-3 sm:gap-5">

              {/* UNDANGAN */}

              <div className="group relative aspect-[0.84/1] overflow-hidden rounded-[8px] border border-[#d8b875]/60 bg-white shadow-[0_20px_50px_rgba(90,70,40,0.13)]">

                <Image
                  src="/images/home/hero.jpg"
                  alt="Undangan Mell Studio"
                  fill
                  priority
                  sizes="(max-width: 768px) 48vw, 35vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.025]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent p-4 sm:p-5">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white sm:text-xs">
                    Undangan
                  </p>

                </div>

              </div>


              {/* BUKU YASIN */}

              <div className="group relative mt-8 aspect-[0.84/1] overflow-hidden rounded-[8px] border border-[#d8b875]/60 bg-white shadow-[0_20px_50px_rgba(90,70,40,0.13)] sm:mt-12">

                <Image
                  src="/images/home/yasin.jpg"
                  alt="Buku Yasin Mell Studio"
                  fill
                  priority
                  sizes="(max-width: 768px) 48vw, 35vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.025]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent p-4 sm:p-5">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white sm:text-xs">
                    Buku Yasin
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          KATEGORI
          ===================================================== */}

      <section
        id="kategori"
        className="bg-white py-24"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a17b3e]">
              Koleksi Mell Studio
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#343832]">
              Pilih Kategori
            </h2>

            <div className="mx-auto mt-5 flex items-center justify-center gap-3">

              <span className="h-px w-12 bg-[#d7c39b]" />

              <span className="text-sm text-[#b89452]">
                ✦
              </span>

              <span className="h-px w-12 bg-[#d7c39b]" />

            </div>

          </div>


          <div className="grid gap-7 md:grid-cols-2">

            {/* UNDANGAN */}

            <Link
              href="/katalog/undangan?jenis=undangan"
              className="group relative overflow-hidden rounded-3xl border border-[#e8ddca] bg-[#faf7f1] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl md:min-h-[330px]"
            >

              <div className="relative z-10 p-8 sm:p-10 md:max-w-[55%]">

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a17b3e]">
                  Wedding
                </p>

                <h3 className="mt-5 font-serif text-3xl text-[#343832]">
                  Undangan Pernikahan
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#69685f]">

                  Berbagai pilihan seri undangan Mell Studio
                  mulai dari CG Series, AD Series, Emplop Mini,
                  Hardcover Custom A4, Exclusive, Luxury,
                  Minimalis hingga Rustic.

                </p>

                <div className="mt-7 text-sm font-semibold text-[#a17b3e]">
                  Lihat Kategori →
                </div>

              </div>


              <div className="relative mt-4 h-[260px] w-full overflow-hidden md:absolute md:bottom-0 md:right-0 md:mt-0 md:h-full md:w-[48%]">

                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#faf7f1] via-transparent to-transparent md:bg-gradient-to-r md:from-[#faf7f1] md:via-transparent md:to-transparent" />

                <Image
                  src={fotoUndangan}
                  alt="Koleksi Undangan Mell Studio"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />

              </div>

            </Link>


            {/* BUKU YASIN */}

            <Link
              href="/katalog/undangan?jenis=yasin"
              className="group relative overflow-hidden rounded-3xl border border-[#e8ddca] bg-[#faf7f1] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl md:min-h-[330px]"
            >

              <div className="relative z-10 p-8 sm:p-10 md:max-w-[55%]">

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a17b3e]">
                  Religi
                </p>

                <h3 className="mt-5 font-serif text-3xl text-[#343832]">
                  Buku Yasin
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#69685f]">

                  Tersedia berbagai pilihan Buku Yasin
                  Hardcover, Softcover, Beludru, Sponge
                  dan Custom dengan pilihan desain yang elegan.

                </p>

                <div className="mt-7 text-sm font-semibold text-[#a17b3e]">
                  Lihat Kategori →
                </div>

              </div>


              {fotoYasin && (
                <div className="relative mt-4 h-[260px] w-full overflow-hidden md:absolute md:bottom-0 md:right-0 md:mt-0 md:h-full md:w-[48%]">

                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#faf7f1] via-transparent to-transparent md:bg-gradient-to-r md:from-[#faf7f1] md:via-transparent md:to-transparent" />

                  <Image
                    src={fotoYasin}
                    alt="Koleksi Buku Yasin Mell Studio"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition duration-700 group-hover:scale-105"
                  />

                </div>
              )}

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUK UNGGULAN
          ===================================================== */}

      <section
        id="produk"
        className="bg-[#fcfaf6] py-24"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a17b3e]">
              Pilihan Produk
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#343832]">
              Produk Unggulan
            </h2>

            <div className="mx-auto mt-5 flex items-center justify-center gap-3">

              <span className="h-px w-12 bg-[#d7c39b]" />

              <span className="text-sm text-[#b89452]">
                ✦
              </span>

              <span className="h-px w-12 bg-[#d7c39b]" />

            </div>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#747168]">
              Beberapa koleksi pilihan Mell Studio
              yang dapat menjadi inspirasi untuk kebutuhan Anda.
            </p>

          </div>


          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {products.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LOKASI
          ===================================================== */}

      <section
        id="lokasi"
        className="bg-[#f4eee4] py-20"
      >

        <div className="mx-auto max-w-5xl px-6">

          <div className="grid overflow-hidden rounded-3xl border border-[#e1d4ba] bg-white shadow-lg md:grid-cols-2">

            {/* INFORMASI */}

            <div className="p-9 sm:p-12">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a17b3e]">
                Kunjungi Kami
              </p>

              <h2 className="mt-4 font-serif text-3xl text-[#343832]">
                Lokasi Mell Studio
              </h2>

              <div className="mt-7 space-y-3 text-[#626159]">

                <p className="font-medium text-[#343832]">
                  📍 Jl. Brigjen Piola Isa – Dulomo Selatan
                </p>

                <p>
                  Belakang Alfamart Piola Isa
                </p>

                <p>
                  Masuk lewat samping lorong/dinding Alfamart
                </p>

              </div>

              <a
                href={googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-xl bg-[#b4873f] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#987034]"
              >
                Lihat Lokasi di Google Maps →
              </a>

            </div>


            {/* KARTU LOKASI */}

            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#3f463d] p-10">

              <div className="relative text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#d8c7a4]/50 bg-white/10 text-4xl">
                  📍
                </div>

                <h3 className="mt-6 font-serif text-2xl text-white">
                  Mell Studio
                </h3>

                <p className="mt-2 text-sm text-[#d9ddd5]">
                  Percetakan Undangan &amp; Buku Yasin
                </p>

                <a
                  href={googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-semibold text-[#d8c7a4] hover:text-white"
                >
                  Buka Google Maps →
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SOSIAL MEDIA
          ===================================================== */}

      <section className="bg-[#3f463d] py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8c7a4]">
            Ikuti Kami
          </p>

          <h2 className="mt-4 font-serif text-3xl text-white">
            Temukan Mell Studio
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#d9ddd5]">
            Lihat koleksi terbaru, inspirasi desain,
            dan informasi produk Mell Studio.
          </p>


          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white hover:text-[#3f463d]"
            >
              Instagram
            </a>

            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white hover:text-[#3f463d]"
            >
              Facebook
            </a>

            <a
              href={tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white hover:text-[#3f463d]"
            >
              TikTok
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#b4873f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#987034]"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          TENTANG
          ===================================================== */}

      <section
        id="tentang"
        className="bg-white py-20"
      >

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a17b3e]">
            Tentang Kami
          </p>

          <h2 className="mt-4 font-serif text-3xl text-[#343832]">
            Mell Studio
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">

            <span className="h-px w-12 bg-[#d7c39b]" />

            <span className="text-sm text-[#b89452]">
              ✦
            </span>

            <span className="h-px w-12 bg-[#d7c39b]" />

          </div>

          <p className="mt-7 text-base leading-8 text-[#68675f]">

            Mell Studio merupakan percetakan yang menyediakan
            berbagai pilihan undangan pernikahan dan Buku Yasin
            dengan desain elegan, material berkualitas, serta
            hasil cetak yang rapi.

          </p>

          <p className="mt-4 text-base leading-8 text-[#68675f]">

            Website ini dibuat sebagai katalog digital untuk
            memudahkan pelanggan melihat koleksi produk
            sebelum melakukan pemesanan.

          </p>

        </div>

      </section>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <Footer />

    </main>
  );
}