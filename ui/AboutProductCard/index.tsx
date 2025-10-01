import Image from "next/image";

interface ProductCardTypes {
  id: number | string;
  title: string;
  image: string;
  alt: string;
  handleClickProduct: () => Promise<void>;
}
export default function AboutProductCard({
  id,
  title,
  image,
  handleClickProduct,
}: ProductCardTypes) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const imageUrl = `${baseUrl}${imagePath}/${image}`;

  return (
    <div>
      <div
        key={id}
        className="bg-white rounded-xl  overflow-hidden border border-[#99999940]/60 shadow-sm"
      >
        <div className="p-4 flex justify-center items-center h-64">
          {image ? (
            <Image
              className="object-contain w-full h-full"
              src={image}
              alt="alt"
              width={500}
              height={500}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              No image
            </div>
          )}
        </div>
        <div className="p-4 pt-0 cursor-pointer">
          <h2
            className="mt-1 text-lg text-center py-2 red-hat font-bold text-[#172C45]"
            onClick={handleClickProduct}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
