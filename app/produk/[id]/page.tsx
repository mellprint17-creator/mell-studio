import type { Metadata } from "next";
import Image from "next/image";
import products from "../../Data/products";
import gallery from "../../Data/gallery";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | Mell Studio",
      description: "Produk Mell Studio tidak ditemukan.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return {
    title: `${product.name} | Mell Studio`,

    description:
      `${product.name} - ${product.category}. ${product.description}`,

    alternates: {
      canonical: `https://mellstudio.id/produk/${product.id}`,
    },

    openGraph: {
      title: `${product.name} | Mell Studio`,

      description:
        `${product.name} - ${product.category}. ${product.description}`,

      url: `https://mellstudio.id/produk/${product.id}`,

      siteName: "Mell Studio",

      locale: "id_ID",

      type: "website",

      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: `${product.name} | Mell Studio`,

      description: product.description,

      images: [product.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProductDetail({
  params,
}: Props) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-900">
          Produk tidak ditemukan
        </h1>

        <p className="mt-3 text-slate-600">
          Produk Mell Studio yang Anda cari tidak tersedia.
        </p>
      </main>
    );
  }

  const sampleImages =
    gallery[product.id as keyof typeof gallery] || [];

  const productUrl =
    `https://mellstudio.id/produk/${product.id}`;

  const productImage =
    new URL(
      product.image,
      "https://mellstudio.id"
    ).toString();

  /*
   * =========================
   * SCHEMA PRODUCT
   * =========================
   */

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.name,

    description: product.description,

    image: [productImage],

    category: product.category,

    brand: {
      "@type": "Brand",
      name: "Mell Studio",
    },

    manufacturer: {
      "@type": "Organization",
      name: "Mell Studio",
      url: "https://mellstudio.id",
    },

    url: productUrl,
  };

  /*
   * =========================
   * SCHEMA BREADCRUMB
   * =========================
   */

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://mellstudio.id",
      },

      {
        "@type": "ListItem",
        position: 2,
        name: "Katalog Undangan",
        item: "https://mellstudio.id/katalog/undangan",
      },

      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  return (
    <>
      {/* =========================
          SCHEMA PRODUCT
      ========================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      {/* =========================
          SCHEMA BREADCRUMB
      ========================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema
          ),
        }}
      />

      <main>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2">

          {/* =========================
              FOTO PRODUK UTAMA
          ========================= */}

          <div>

            <div className="overflow-hidden rounded-3xl bg-slate-100">

              <Image
                src={product.image}
                alt={product.name}
                width={1200}
                height={1200}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

            </div>


            {/* =========================
                SAMPEL UNDANGAN
            ========================= */}

            {sampleImages.length > 0 && (
              <div className="mt-8">

                <h2 className="mb-5 text-2xl font-bold text-slate-900">
                  Sampel {product.name}
                </h2>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

                  {sampleImages.map(
                    (image, index) => (
                      <a
                        key={index}
                        href={image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block overflow-hidden rounded-xl bg-slate-100"
                      >

                        <div className="relative aspect-square w-full">

                          <Image
                            src={image}
                            alt={`${product.name} sampel ${index + 1}`}
                            fill
                            loading="lazy"
                            sizes="(max-width: 640px) 50vw, 33vw"
                            className="object-cover transition duration-300 group-hover:scale-105"
                          />

                        </div>

                      </a>
                    )
                  )}

                </div>

                <p className="mt-3 text-sm text-slate-500">
                  Klik gambar untuk melihat ukuran penuh
                </p>

              </div>
            )}

          </div>


          {/* =========================
              DETAIL PRODUK
          ========================= */}

          <div>

            <p className="text-sm text-slate-500">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-slate-900">
              {product.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {product.description}
            </p>


            <div className="mt-8 space-y-5">

              {/* MATERIAL */}

              <div>

                <h2 className="font-bold text-slate-900">
                  Material
                </h2>

                <p className="text-slate-600">
                  {product.material}
                </p>

              </div>


              {/* FINISHING */}

              <div>

                <h2 className="font-bold text-slate-900">
                  Finishing
                </h2>

                <p className="text-slate-600">
                  {product.finishing}
                </p>

              </div>


              {/* INFORMASI PEMESANAN */}

              <div>

                <h2 className="font-bold text-slate-900">
                  Informasi Pemesanan
                </h2>

                <p className="text-slate-600">
                  Semua pesanan sudah termasuk label
                  cetak nama tamu dan dikemas
                  menggunakan plastik pembungkus.
                </p>

              </div>


              {/* BONUS */}

              <div>

                <h2 className="font-bold text-slate-900">
                  Bonus
                </h2>

                <p className="text-slate-600">
                  Tersedia bonus undangan website
                  untuk tipe undangan tertentu
                  sesuai jumlah pesanan.
                </p>

              </div>

            </div>


            {/* =========================
                WHATSAPP
            ========================= */}

            <a
              href={`https://wa.me/6282192148895?text=${encodeURIComponent(
                `Halo Mell Studio, saya tertarik dengan ${product.name}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-xl bg-green-600 px-8 py-3 font-medium text-white transition hover:bg-green-700"
            >
              Konsultasi WhatsApp
            </a>

          </div>

        </div>
      </main>
    </>
  );
}