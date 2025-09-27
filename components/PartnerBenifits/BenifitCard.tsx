"use client";
import Image from "next/image";

export default function BenifitCard({ cardData }: any) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  return (
    <>
      {cardData?.map((card: any, id: number) => {
        const imageUrl = `${baseUrl}${imagePath}/${card.image}`;
        return (
          <div
            key={id}
            className="flex bg-white rounded-xl shadow-md overflow-hidden max-w-[560px] "
          >
            {card.image && (
              <div className="w-50 h-full flex-shrink-0">
                <Image
                  src={imageUrl}
                  alt={card.title}
                  width={160}
                  height={260}
                  className="w-full h-full object-cover rounded-l-xl"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-6 flex flex-col  gap-2 flex-1">
              <h3 className="text-2xl font-semibold text-[#172C45] sanchez ">
                {card.title}
              </h3>
              <p className="text-[#45566A] red-hat font-normal text-base leading-6 ">
                {card.description}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
