"use client";
import { useLandingPageContext } from "@/context/LandingPageContext";
import PageTitle from "@/ui/PageTitle";
import Image from "next/image";
import React, { useEffect } from "react";

const cards = [
  {
    id: 1,
    title: "Ortho & Surgery",
    description: "Advanced orthopedic & surgical care",
    bgImage: "/images/s1.png",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 2,
    title: "Cardiology",
    description: "Expert heart care solutions",
    bgImage: "/images/s2.png",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 3,
    title: "Neurology",
    description: "Advanced care for bones and surgeries",
    bgImage: "/images/s3.png",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 11,
    title: "Ortho & Surgery",
    description: "Advanced orthopedic & surgical care",
    bgImage: "/images/s4.png",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 21,
    title: "Cardiology",
    description: "Expert heart care solutions",
    bgImage: "/images/s5.png",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 13,
    title: "Neurology",
    description: "Advanced care for bones and surgeries",
    bgImage: "/images/cat.jpg",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 18,
    title: "Ortho & Surgery",
    description: "Advanced orthopedic & surgical care",
    bgImage: "/images/cat.jpg",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 28,
    title: "Cardiology",
    description: "Expert heart care solutions",
    bgImage: "/images/cat.jpg",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 83,
    title: "Neurology",
    description: "Advanced care for bones and surgeries",
    bgImage: "/images/cat.jpg",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 181,
    title: "Ortho & Surgery",
    description: "Advanced orthopedic & surgical care",
    bgImage: "/images/cat.jpg",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 281,
    title: "Cardiology",
    description: "Expert heart care solutions",
    bgImage: "/images/cat.jpg",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 183,
    title: "Neurology",
    description: "Advanced care for bones and surgeries",
    bgImage: "/images/cat.jpg",
    icon: "/images/categoryIcon.png",
  },
];

export default function ProductCategories() {
  const { productCategories, fetchProductCategories } = useLandingPageContext();
  const { data }: any = productCategories;

  useEffect(() => {
    fetchProductCategories();
  }, []);

  return (
    <div className="hero-sub-container">
      <div className="bg-product-category rounded-[20px]">
        <div className="sub-container">
          <div className="py-16">
            <PageTitle
              tag="Products Categories"
              tagClass="border border-[#00A859] rounded-full px-4 py-2 text-sm capitalize text-[#172C45] leading-[16px] w-auto inline-block"
              heading="Trusted Pharma Categories with Innovation, Quality, and Care"
              headingClass="text-[2.875rem] mt-2 font-normal text-[#172C45] leading-[3.438rem]"
              subHeading="From everyday health concerns to complex therapeutic needs, our product categories are designed to deliver trust and results. Covering General, Cardiac, Diabetic, Gynae, Ortho & more – we ensure complete care under one trusted name."
              subHeadingClass="text-base font-normal mt-2 text-[#45566A] leading-[25px] lg:mt-14"
              wrapperClass="grid lg:grid-cols-2 gap-10"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5 py-14">
              {data?.slice(0, 12)?.map((card: any) => {
                const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
                const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
                const imageUrl = `${baseUrl}${imagePath}/${card?.image}`;
                const iconImgUrl = `${baseUrl}${imagePath}/${card?.icon_image}`;
                return (
                  <div key={card.id} className="group cursor-pointer w-full">
                    {/* <div className="relative h-[280px] w-full overflow-hidden rounded-xl bg-white">
                      {card.image && (
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      )}

                      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#172C45]/0 via-[#172C45]/60 to-[#172C45] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative z-20 flex h-full flex-col justify-between p-4 md:p-6">
                        <div className="bg-[#00A859] h-14 w-14 rounded-full flex justify-center items-center">
                          {card.icon_image && (
                            <Image
                              src={iconImgUrl}
                              height={20}
                              width={20}
                              alt="icon"
                              className="object-contain"
                            />
                          )}
                        </div>
                        <div>
                          <h3
                            className={`text-lg font-bold primary-font font-medium transition-colors duration-300 ${
                              card.image
                                ? "text-[#172C45] group-hover:text-white"
                                : "text-[#172C45]"
                            }`}
                          >
                            {card.title}
                          </h3>
                          <p
                            className={`mt-1 text-base font-normal primary-font transition-colors duration-300 ${
                              card.image
                                ? "text-[#606B78] group-hover:text-white"
                                : "text-[#606B78]"
                            }`}
                          >
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    </div> */}
                    <div className="relative h-[280px] w-full overflow-hidden rounded-xl bg-white group">
                      {card.image && (
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      )}

                      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#172C45]/0 via-[#172C45]/60 to-[#172C45] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative z-20 flex h-full flex-col justify-between p-4 ">
                        {/* Icon */}
                        <div className="bg-[#00A859] h-14 w-14 rounded-full flex justify-center items-center">
                          {card.icon_image && (
                            <Image
                              src={iconImgUrl}
                              height={20}
                              width={20}
                              alt="icon"
                              className="object-contain"
                            />
                          )}
                        </div>

                        {/* Text content */}
                        <div className="flex-1 mt-2 flex flex-col justify-end">
                          <h3
                            className={`text-lg font-bold primary-font font-medium transition-colors duration-300 line-clamp-2 ${
                              card.image
                                ? "text-[#172C45] group-hover:text-white"
                                : "text-[#172C45]"
                            }`}
                          >
                            {card.title}
                          </h3>
                          <p
                            className={`mt-1 text-base font-normal primary-font transition-colors duration-300 line-clamp-2 ${
                              card.image
                                ? "text-[#606B78] group-hover:text-white"
                                : "text-[#606B78]"
                            }`}
                          >
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
