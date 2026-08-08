import { Product } from "../Data/products";


interface ProductCardProps {
  product: Product;
}


export default function ProductCard({
  product,
}: ProductCardProps) {


  return (

    <div className="group overflow-hidden rounded-2xl bg-white shadow-md">


      <div className="aspect-[3/4] overflow-hidden bg-slate-100">

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

      </div>



      <div className="p-6">


        <p className="text-sm text-slate-500">
          {product.category}
        </p>



        <h3 className="mt-2 text-xl font-bold text-slate-900">
          {product.name}
        </h3>



        <p className="mt-3 text-sm leading-6 text-slate-600">
          {product.description}
        </p>




        <a

          href={`/produk/${product.id}`}

          className="mt-6 block rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-700"

        >

          Lihat Detail

        </a>



      </div>


    </div>

  );

}