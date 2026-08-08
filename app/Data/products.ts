export interface Product {
  id: number;
  name: string;
  category: string;
  material: string;
  finishing: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "CG Series",
    category: "Undangan Emplop Blangko",
    material: "BC Lux 200 Gram",
    finishing:
      "Cetak Mesin Printer Epson, Canon, HP Print.",
    description:
      "Undangan blangko adalah undangan yang sudah memiliki desain cetakan. Pelanggan hanya perlu mengisi text undangan sesuai kebutuhan.",
    image: "/images/cg-series.jpg",
  },

  {
    id: 2,
    name: "AD Series",
    category: "Undangan Emplop Blangko",
    material: "BC Lux 200 Gram",
    finishing:
      "Cetak Mesin Printer Epson, Canon, HP Print.",
    description:
      "Undangan blangko adalah undangan yang sudah memiliki desain cetakan. Pelanggan hanya perlu mengisi text undangan sesuai kebutuhan.",
    image: "/images/ad-series.jpg",
  },

  {
    id: 3,
    name: "Emplop Mini Series",
    category: "Undangan Emplop Mini",
    material:
      "Bagian amplop BC Lux 200 Gram dan isi BC Lux 150 Gram",
    finishing:
      "Cetak Mesin Printer Epson, Canon, HP Print.",
    description:
      "Amplop tersedia dalam 8 pilihan warna. Untuk desain isi dapat custom, namun tidak bisa menggunakan warna full blok. Konsep desain lebih cocok dengan gaya minimalis.",
    image: "/images/emplop-mini.jpg",
  },

  {
    id: 4,
    name: "Seri Exclusive",
    category:
      "Undangan Custom Desain Type Emplop & Hardcover",
    material:
      "Ivory 210 Gram / Art Paper 260 Gram (Ukuran Isi A5 dan Trifold)",
    finishing:
      "Hot Print Gold pada 2 titik: Nama pendek pada bagian amplop dan nama lengkap pengantin pada bagian isi.",
    description:
      "Desain sepenuhnya custom sesuai keinginan calon pengantin. Bebas menentukan tema, warna, font, dan konsep desain. Tersedia model undangan softcover maupun hardcover dengan pilihan finishing premium.",
    image: "/images/exclusive.jpg",
  },

  {
    id: 5,
    name: "Seri Hardcover Custom A4",
    category: "Undangan Hardcover Tebal",
    material:
      "Sampul depan Kertas Foto 150 Gram dan isi Kertas BC Lux 150 Gram",
    finishing:
      "Cetak Mesin Printer Epson, Canon, HP Print.",
    description:
      "Undangan hardcover tebal yang dapat dibuat dengan desain custom sesuai konsep pernikahan.",
    image: "/images/hardcover-custom-a4.jpg",
  },

  {
    id: 6,
    name: "Seri Luxury",
    category: "Undangan Acrylic Premium",
    material:
      "Acrylic Premium",
    finishing:
      "Finishing premium sesuai model undangan acrylic.",
    description:
      "Undangan acrylic premium dengan tampilan mewah dan elegan. Cocok untuk pasangan yang menginginkan undangan eksklusif dengan desain modern dan berkelas.",
    image: "/images/luxury.jpg",
  },

  {
    id: 7,
    name: "Seri Minimalis",
    category:
      "Undangan A4 Lipat 2 atau A4 Lipat 3",
    material:
      "Kertas BC Lux 150 Gram",
    finishing:
      "Cetak Mesin Printer Epson, Canon, HP Print.",
    description:
      "Undangan dengan desain minimalis yang dapat custom sesuai kebutuhan. Tidak menggunakan full blok warna, lebih cocok dengan konsep desain minimalis dan elegan.",
    image: "/images/minimalis.jpg",
  },

  {
    id: 8,
    name: "Seri Rustic",
    category:
      "Undangan Rustic",
    material:
      "Kertas Samson 150 Gram dan dapat dipadukan dengan bahan kertas lainnya.",
    finishing:
      "Cetak Mesin Printer Epson, Canon, HP Print.",
    description:
      "Terdapat berbagai macam model rustic. Contoh sampel tersedia langsung di percetakan Mell Studio.",
    image: "/images/rustic.jpg",
  },
];

export default products;