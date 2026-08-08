import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
};

export default function CategoryCard({
  title,
  description,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-8 font-semibold text-slate-800 group-hover:translate-x-1 transition">
        Lihat Kategori →
      </div>
    </Link>
  );
}