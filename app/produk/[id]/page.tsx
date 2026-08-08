import products from "../../Data/products";
import gallery from "../../Data/gallery";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-white p-10 text-center">
        <p className="text-lg text-slate-600">
          Produk tidak ditemukan
        </p>
      </main>
    );
  }

  const sampleImages =
    gallery[product.id as keyof typeof gallery] || [];

  return (
    <main className="min-h-screen bg-white">

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2">

        {/* FOTO PRODUK UTAMA */}
        <div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* SAMPel UNDANGAN */}
          {sampleImages.length > 0 && (
            <div className="mt-8">

              <h2 className="mb-5 text-2xl font-bold text-slate-900">
                Sampel {product.name}
              </h2>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

                {sampleImages.map((image, index) => (
                  <a
                    key={index}
                    href={image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-xl bg-slate-100"
                  >
                    <img
                      src={image}
                      alt={`${product.name} sampel ${index + 1}`}
                      className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </a>
                ))}

              </div>

              <p className="mt-3 text-sm text-slate-500">
                Klik gambar untuk melihat ukuran penuh
              </p>

            </div>
          )}

        </div>


        {/* DETAIL PRODUK */}
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

            <div>
              <h3 className="font-bold text-slate-900">
                Material
              </h3>

              <p className="text-slate-600">
                {product.material}
              </p>
            </div>


            <div>
              <h3 className="font-bold text-slate-900">
                Finishing
              </h3>

              <p className="text-slate-600">
                {product.finishing}
              </p>
            </div>


            <div>
              <h3 className="font-bold text-slate-900">
                Informasi Pemesanan
              </h3>

              <p className="text-slate-600">
                Semua pesanan sudah termasuk label cetak nama
                tamu dan dikemas menggunakan plastik pembungkus.
              </p>
            </div>


            <div>
              <h3 className="font-bold text-slate-900">
                Bonus
              </h3>

              <p className="text-slate-600">
                Tersedia bonus undangan website untuk tipe
                undangan tertentu sesuai jumlah pesanan.
              </p>
            </div>

          </div>


          {/* WHATSAPP */}
          <a
            href={`https://wa.me/6282192148895?text=Halo%20Mell%20Studio,%20saya%20tertarik%20dengan%20${encodeURIComponent(
              product.name
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
  );
}