"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import products from "../../Data/products";
import ProductCard from "../../components/ProductCard";
import gallery from "../../Data/gallery";
import galleryYasin from "../../Data/gallery-yasin";

type KatalogAktif = "Undangan" | "Buku Yasin";

type FotoGallery = {
  src: string;
  kode: string;
  nama: string;
  seriId?: number;
};

export default function UndanganPage() {
  const [katalogAktif, setKatalogAktif] = useState<KatalogAktif>("Undangan");
  const [seriAktif, setSeriAktif] = useState("Semua");
  const [fotoAktif, setFotoAktif] = useState<number | null>(null);

  const nomorWhatsApp = "6282192148895";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const jenis = params.get("jenis");

    if (jenis === "yasin") {
      setKatalogAktif("Buku Yasin");
    } else {
      setKatalogAktif("Undangan");
    }

    setFotoAktif(null);
  }, []);

  const daftarSeri = [
    "Semua",
    "CG Series",
    "AD Series",
    "Seri Emplop Mini",
    "Seri Exclusive",
    "Seri Hardcover Custom A4",
    "Seri Luxury",
    "Seri Minimalis",
    "Seri Rustic",
  ];

  const seriGallery: Record<string, number> = {
    "CG Series": 1,
    "AD Series": 2,
    "Seri Emplop Mini": 3,
    "Seri Exclusive": 4,
    "Seri Hardcover Custom A4": 5,
    "Seri Luxury": 6,
    "Seri Minimalis": 7,
    "Seri Rustic": 8,
  };

  const kodeSeri: Record<number, string> = {
    1: "CG",
    2: "AD",
    3: "MINI",
    4: "EX",
    5: "HCA4",
    6: "LUX",
    7: "MIN",
    8: "RUS",
  };

  const namaSeriById: Record<number, string> = {
    1: "CG Series",
    2: "AD Series",
    3: "Seri Emplop Mini",
    4: "Seri Exclusive",
    5: "Seri Hardcover Custom A4",
    6: "Seri Luxury",
    7: "Seri Minimalis",
    8: "Seri Rustic",
  };

  const semuaFotoUndangan: FotoGallery[] = Object.entries(gallery).flatMap(
    ([id, fotoList]) => {
      const seriId = Number(id);
      const kode = kodeSeri[seriId];

      return fotoList.map((src, index) => ({
        src,
        seriId,
        nama: namaSeriById[seriId],
        kode: `${kode}-${String(index + 1).padStart(2, "0")}`,
      }));
    }
  );

  const semuaFotoYasin: FotoGallery[] = galleryYasin.map((src, index) => ({
    src,
    nama: "Buku Yasin",
    kode: `YASIN-${String(index + 1).padStart(2, "0")}`,
  }));

  const fotoGallery: FotoGallery[] =
    katalogAktif === "Buku Yasin"
      ? semuaFotoYasin
      : seriAktif === "Semua"
        ? semuaFotoUndangan
        : semuaFotoUndangan.filter(
            (foto) => foto.seriId === seriGallery[seriAktif]
          );

  const undanganProducts = products.filter((product) => {
    const dataProduk = (
      product.name +
      " " +
      product.category +
      " " +
      product.material +
      " " +
      product.finishing
    ).toLowerCase();

    return (
      dataProduk.includes("undangan") ||
      dataProduk.includes("series") ||
      dataProduk.includes("seri")
    );
  });

  const filteredProducts =
    katalogAktif === "Undangan"
      ? seriAktif === "Semua"
        ? undanganProducts
        : undanganProducts.filter((product) => {
            const namaProduk = product.name.toLowerCase();
            const namaSeri = seriAktif.toLowerCase();

            return (
              namaProduk === namaSeri || namaProduk.includes(namaSeri)
            );
          })
      : [];

  useEffect(() => {
    if (fotoAktif === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFotoAktif(null);
      }

      if (event.key === "ArrowRight") {
        setFotoAktif((current) => {
          if (current === null || fotoGallery.length === 0) return null;
          return (current + 1) % fotoGallery.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setFotoAktif((current) => {
          if (current === null || fotoGallery.length === 0) return null;
          return (current - 1 + fotoGallery.length) % fotoGallery.length;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fotoAktif, fotoGallery.length]);

  useEffect(() => {
    if (fotoAktif !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [fotoAktif]);

  const fotoSebelumnya = () => {
    setFotoAktif((current) => {
      if (current === null || fotoGallery.length === 0) return null;
      return (current - 1 + fotoGallery.length) % fotoGallery.length;
    });
  };

  const fotoBerikutnya = () => {
    setFotoAktif((current) => {
      if (current === null || fotoGallery.length === 0) return null;
      return (current + 1) % fotoGallery.length;
    });
  };

  const pesanWhatsApp = () => {
    if (fotoAktif === null) return;

    const foto = fotoGallery[fotoAktif];
    if (!foto) return;

    const pesan =
      katalogAktif === "Buku Yasin"
        ? `Halo Mell Studio, saya tertarik dengan desain Buku Yasin ${foto.kode}. Mohon info harga dan detailnya.`
        : `Halo Mell Studio, saya tertarik dengan desain undangan ${foto.kode}. Mohon info harga dan detailnya.`;

    const url =
      `https://wa.me/${nomorWhatsApp}?text=` + encodeURIComponent(pesan);

    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            {katalogAktif === "Buku Yasin"
              ? "Katalog Buku Yasin"
              : "Katalog Undangan Pernikahan Gorontalo"}
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            {katalogAktif === "Buku Yasin"
              ? "Koleksi Buku Yasin Mell Studio dengan berbagai pilihan desain dan finishing."
              : "Temukan berbagai pilihan undangan pernikahan Mell Studio Gorontalo, mulai dari undangan hardcover, softcover, custom, acrylic, rustic, dan berbagai desain lainnya."}
          </p>
        </div>

        {katalogAktif === "Undangan" && (
          <>
            <div className="mb-12 flex flex-wrap justify-center gap-3 border-b border-gray-200 pb-4">
              {daftarSeri.map((seri) => (
                <button
                  key={seri}
                  type="button"
                  onClick={() => {
                    setSeriAktif(seri);
                    setFotoAktif(null);
                  }}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                    seriAktif === seri
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-gray-100 text-slate-600 hover:bg-gray-200 hover:text-slate-900"
                  }`}
                >
                  {seri}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900">
                {seriAktif === "Semua"
                  ? "Semua Koleksi Undangan"
                  : seriAktif}
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                {fotoGallery.length} sampel undangan
              </p>
            </div>
          </>
        )}

        {katalogAktif === "Buku Yasin" && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900">
              Buku Yasin
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              {fotoGallery.length} sampel Buku Yasin
            </p>
          </div>
        )}

        {fotoGallery.length > 0 && (
          <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {fotoGallery.map((foto, index) => (
              <button
                key={`${foto.src}-${index}`}
                type="button"
                onClick={() => setFotoAktif(index)}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                aria-label={`Buka desain ${foto.kode}`}
              >
                <Image
                  src={foto.src}
                  alt={`${foto.nama} - ${foto.kode}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {foto.kode}
                </div>

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
              </button>
            ))}
          </div>
        )}

        {katalogAktif === "Undangan" && filteredProducts.length > 0 && (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900">
                Produk Undangan Mell Studio
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Pilihan produk undangan pernikahan Mell Studio di Gorontalo
                dengan berbagai bahan, desain, dan finishing.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}

        {fotoGallery.length === 0 && (
          <div className="mt-10 rounded-xl bg-gray-50 py-16 text-center text-gray-500">
            Belum ada sampel tersedia.
          </div>
        )}
      </section>

      {fotoAktif !== null && fotoGallery[fotoAktif] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setFotoAktif(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Preview foto produk"
        >
          <button
            type="button"
            onClick={() => setFotoAktif(null)}
            className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Tutup preview"
          >
            ×
          </button>

          <div className="absolute left-1/2 top-5 z-30 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
            <span className="font-semibold">
              {fotoGallery[fotoAktif].kode}
            </span>
            <span className="mx-2 text-white/40">•</span>
            {fotoAktif + 1} / {fotoGallery.length}
          </div>

          <div
            className="relative h-[76vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={fotoGallery[fotoAktif].src}
              alt={`${fotoGallery[fotoAktif].nama} - ${fotoGallery[fotoAktif].kode}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {fotoGallery.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                fotoSebelumnya();
              }}
              className="absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white backdrop-blur-sm transition hover:bg-white/20 sm:left-6"
              aria-label="Foto sebelumnya"
            >
              ‹
            </button>
          )}

          {fotoGallery.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                fotoBerikutnya();
              }}
              className="absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-6"
              aria-label="Foto berikutnya"
            >
              ›
            </button>
          )}

          <div
            className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={pesanWhatsApp}
              className="rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700 hover:shadow-xl"
            >
              Pesan Desain Ini
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
