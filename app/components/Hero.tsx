import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

        {/* Kiri */}
        <div>
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
            Percetakan Undangan & Buku Yasin
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
            Premium
            <br />
            Wedding Invitation
            <br />
            & Buku Yasin
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Mell Studio menghadirkan undangan pernikahan dan buku Yasin
            dengan desain elegan, material berkualitas, dan hasil cetak
            yang rapi untuk setiap momen istimewa Anda.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/katalog"
              className="rounded-full bg-slate-800 px-7 py-4 font-medium text-white transition hover:bg-slate-900"
            >
              Lihat Katalog
            </Link>

            <a
              href="https://wa.me/62xxxxxxxxxxx"
              className="rounded-full border border-slate-300 px-7 py-4 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Hubungi WhatsApp
            </a>
          </div>
        </div>

        {/* Kanan */}
        <div>
          <div className="flex aspect-[4/5] items-center justify-center rounded-3xl border border-slate-200 bg-slate-50">
            <p className="text-slate-400">
              Foto Produk Unggulan Mell Studio
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}