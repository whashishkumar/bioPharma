import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Tazobox-4.5",
    image: "/images/p1.png",
    alt: "Tazobactam Injection",
  },
  {
    id: 2,
    name: "Amoxicillin-500",
    image: "/images/p2.png",
    alt: "Amoxicillin Capsule",
  },
  {
    id: 3,
    name: "Cefixime-200",
    image: "/images/p3.png",
    alt: "Cefixime Tablet",
  },
  {
    id: 4,
    name: "Metformin-500",
    image: "/images/p4.png",
    alt: "Metformin Tablet",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10">
      {products.map((product) => (
        <div
          key={product.id}
          className=" bg-white rounded-xl shadow-[0_0_14px_0_#99999940] overflow-hidden md:max-w-sm"
        >
          <div className="p-4 flex justify-center items-center h-64">
            <Image
              className="object-contain w-full h-full"
              src={product.image}
              alt={product.alt}
              width={300}
              height={236}
              priority
            />
          </div>
          <div className="p-4 pt-0">
            <h2 className="mt-1 text-lg text-center py-2 red-hat font-bold text-[#172C45]">
              {product.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
