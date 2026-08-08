import gallery from "../Data/gallery";

interface ProductGalleryProps {
  productId: number;
  productName: string;
}

export default function ProductGallery({
  productId,
  productName,
}: ProductGalleryProps) {
  const images =
    gallery[productId as keyof typeof gallery] || [];

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="mb-5 text-xl font-bold text-slate-900">
        Sampel {productName}
      </h3>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl bg-slate-100"
          >
            <img
              src={image}
              alt={`${productName} sampel ${index + 1}`}
              className="aspect-square w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}