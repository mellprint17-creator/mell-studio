import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import products from "./Data/products";
import gallery from "./Data/gallery";
import galleryYasin from "./Data/gallery-yasin";
import ProductCard from "./components/ProductCard";

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

  /* =====================================================
     FOTO DARI KATALOG YANG SUDAH ADA
     ===================================================== */

  // FOTO UNDANGAN
  const semuaFotoUndangan =
    Object.values(gallery).flat();

  const fotoUndangan =
    "/images/luxury.jpg";

  // FOTO BUKU YASIN
  const fotoYasin =
    galleryYasin[0];

  return (
    <main className="min-h-screen bg-[#fcfaf6] text-[#343832]">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-[#e9dfcf] bg-white/95 backdrop-blur">

        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6">

          {/* LOGO ASLI MELL STUDIO */}

          <Link
            href="/"
            className="relative block h-14 w-48"
          >
            <Image
              src="/images/logo/logo-new.png"
              alt="Mell Studio"
              fill
              priority
              sizes="200px"
              className="object-contain object-left"
            />
          </Link>

          <div className="flex items-center gap-7">

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

            {/* SOCIAL MEDIA */}

            <div className="flex items-center gap-4 border-l border-[#e5dccd] pl-5">

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

          </div>

        </div>

      </header>


      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7f1e7]">

        {/* ORNAMEN KIRI */}

        <div className="pointer-events-none absolute -left-10 top-5 opacity-45">

          <svg
            width="220"
            height="220"
            viewBox="0 0 220 220"
            fill="none"
          >

            <path
              d="M15 205C55 155 70 90 155 25"
              stroke="#9aa58b"
              strokeWidth="1.4"
            />

            <path
              d="M55 145C35 125 28 100 38 78"
              stroke="#9aa58b"
              strokeWidth="1"
            />

            <ellipse
              cx="38"
              cy="78"
              rx="7"
              ry="18"
              transform="rotate(-25 38 78)"
              fill="#b7c0aa"
            />

            <ellipse
              cx="82"
              cy="110"
              rx="7"
              ry="18"
              transform="rotate(65 82 110)"
              fill="#b7c0aa"
            />

            <circle
              cx="155"
              cy="25"
              r="10"
              stroke="#b89452"
            />

          </svg>

        </div>


        {/* ORNAMEN KANAN */}

        <div className="pointer-events-none absolute -bottom-10 -right-10 rotate-180 opacity-40">

          <svg
            width="240"
            height="240"
            viewBox="0 0 220 220"
            fill="none"
          >

            <path
              d="M15 205C55 155 70 90 155 25"
              stroke="#9aa58b"
              strokeWidth="1.4"
            />

            <ellipse
              cx="85"
              cy="105"
              rx="7"
              ry="18"
              transform="rotate(65 85 105)"
              fill="#b7c0aa"
            />

            <circle
              cx="155"
              cy="25"
              r="10"
              stroke="#b89452"
            />

          </svg>

        </div>


        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-28">

          {/* HERO TEXT */}

          <div className="relative z-10">

            <div className="mb-6 flex items-center gap-4">

              <span className="h-px w-12 bg-[#b89452]" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a17b3e]">
                Mell Studio
              </p>

              <span className="h-px w-12 bg-[#b89452]" />

            </div>


            <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#30342f] sm:text-6xl">

              Undangan &amp;
              <br />
              Buku Yasin

            </h1>


            <p className="mt-6 max-w-xl font-serif text-2xl italic leading-relaxed text-[#91816d] sm:text-3xl">
              Untuk setiap momen dan kebutuhan Anda.
            </p>


            <div className="mt-7 h-px w-28 bg-[#c5a76c]" />


            <p className="mt-7 max-w-xl text-base leading-8 text-[#68675f]">

              Koleksi undangan pernikahan dan Buku Yasin
              dengan desain elegan, material berkualitas,
              serta finishing yang dibuat dengan perhatian
              pada setiap detail.

            </p>


            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/katalog/undangan?jenis=undangan"
                className="rounded-xl bg-[#b4873f] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#997034]"
              >
                Lihat Undangan
              </Link>


              <Link
                href="/katalog/undangan?jenis=yasin"
                className="rounded-xl border border-[#b89452] bg-white/70 px-7 py-3.5 text-sm font-semibold text-[#8c6c38] transition hover:bg-white"
              >
                Lihat Buku Yasin
              </Link>

            </div>

          </div>


          {/* LOGO */}

          <div className="relative z-10 flex justify-center md:justify-end">

            <div className="relative flex h-72 w-full max-w-xl items-center justify-center overflow-hidden rounded-[2rem] border border-[#dfcfb0] bg-white/90 p-10 shadow-[0_25px_60px_rgba(90,70,40,0.12)] sm:h-80">

              <Image
                src="/images/logo/logo-new.png"
                alt="Mell Studio"
                width={1200}
                height={459}
                priority
                sizes="(max-width: 768px) 90vw, 500px"
                className="relative z-10 h-auto w-full max-w-lg object-contain"
              />

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

          {/* JUDUL */}

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


          {/* KARTU KATEGORI */}

          <div className="grid gap-7 md:grid-cols-2">


            {/* =================================================
                UNDANGAN
                ================================================= */}

            <Link
              href="/katalog/undangan?jenis=undangan"
              className="group relative overflow-hidden rounded-3xl border border-[#e8ddca] bg-[#faf7f1] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl md:min-h-[330px]"
            >

              {/* TEKS */}

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


              {/* FOTO UNDANGAN */}

              {fotoUndangan && (

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

              )}


              {/* ORNAMEN KECIL */}

              <div className="pointer-events-none absolute left-0 top-0 opacity-35">

                <svg
                  width="105"
                  height="105"
                  viewBox="0 0 105 105"
                  fill="none"
                >

                  <path
                    d="M5 100C25 65 35 35 90 10"
                    stroke="#9aa58b"
                    strokeWidth="1"
                  />

                  <ellipse
                    cx="32"
                    cy="53"
                    rx="5"
                    ry="13"
                    transform="rotate(-25 32 53)"
                    fill="#b7c0aa"
                  />

                  <ellipse
                    cx="58"
                    cy="32"
                    rx="5"
                    ry="13"
                    transform="rotate(65 58 32)"
                    fill="#b7c0aa"
                  />

                </svg>

              </div>

            </Link>


            {/* =================================================
                BUKU YASIN
                ================================================= */}

            <Link
              href="/katalog/undangan?jenis=yasin"
              className="group relative overflow-hidden rounded-3xl border border-[#e8ddca] bg-[#faf7f1] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl md:min-h-[330px]"
            >

              {/* TEKS */}

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


              {/* FOTO YASIN */}

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


              {/* ORNAMEN KECIL */}

              <div className="pointer-events-none absolute right-0 top-0 opacity-30">

                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                >

                  <path
                    d="M10 110C35 75 50 40 105 10"
                    stroke="#9aa58b"
                    strokeWidth="1"
                  />

                  <ellipse
                    cx="55"
                    cy="55"
                    rx="5"
                    ry="14"
                    transform="rotate(65 55 55)"
                    fill="#b7c0aa"
                  />

                  <circle
                    cx="105"
                    cy="10"
                    r="8"
                    stroke="#b89452"
                  />

                </svg>

              </div>

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
          LOKASI PERCETAKAN
          ===================================================== */}

      <section
        id="lokasi"
        className="bg-[#f4eee4] py-20"
      >

        <div className="mx-auto max-w-5xl px-6">

          <div className="grid overflow-hidden rounded-3xl border border-[#e1d4ba] bg-white shadow-lg md:grid-cols-2">

            {/* INFORMASI LOKASI */}

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


            {/* KARTU ARAH */}

            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#3f463d] p-10">

              <div className="pointer-events-none absolute -right-5 -top-5 opacity-20">

                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                >

                  <path
                    d="M15 185C55 140 70 80 160 20"
                    stroke="#d8c7a4"
                    strokeWidth="1.5"
                  />

                  <ellipse
                    cx="75"
                    cy="115"
                    rx="7"
                    ry="18"
                    transform="rotate(65 75 115)"
                    fill="#d8c7a4"
                  />

                  <ellipse
                    cx="115"
                    cy="75"
                    rx="7"
                    ry="18"
                    transform="rotate(65 115 75)"
                    fill="#d8c7a4"
                  />

                </svg>

              </div>


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