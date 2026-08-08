import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-new.png"
            alt="Mell Studio"
            width={220}
            height={90}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">Beranda</Link>
          <Link href="/katalog">Katalog</Link>
          <Link href="/tentang">Tentang</Link>
          <Link href="/kontak">Kontak</Link>
        </nav>

        {/* WhatsApp */}
        <a
          href="https://wa.me/62xxxxxxxxxx"
          className="rounded-full bg-slate-700 px-5 py-3 text-white hover:bg-slate-800"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}