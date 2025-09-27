import Image from "next/image";

interface ProductCardTypes {
  id: number | string;
  name: string;
  image: string;
  alt: string;
}
export default function ProductCard({
  id,
  name,
  image,
  alt,
}: ProductCardTypes) {
  return (
    <div>
      <div
        key={id}
        className="bg-white rounded-xl  overflow-hidden md:max-w-sm border border-[#99999940]/60 shadow-sm"
      >
        <div className="p-4 flex justify-center items-center h-64">
          <Image
            className="object-contain w-full h-full"
            src={image}
            alt={alt}
            width={300}
            height={236}
            priority
          />
        </div>
        <div className="p-4 pt-0">
          <h2 className="mt-1 text-lg text-center py-2 red-hat font-bold text-[#172C45]">
            {name}
          </h2>
        </div>
      </div>
    </div>
  );
}
