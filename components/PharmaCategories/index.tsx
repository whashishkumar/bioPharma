"use client";
import { useLandingPageContext } from "@/context/LandingPageContext";
import PageTitle from "@/ui/PageTitle";
import Image from "next/image";
import React, { useEffect } from "react";

const categories = [
  {
    id: 1,
    title: "Suspension",
    image: "/images/s1.png",
  },
  {
    id: 2,
    title: "Tablets",
    image: "/images/s2.png",
  },
  {
    id: 3,
    title: "Sachets",
    image: "/images/s3.png",
  },
  {
    id: 4,
    title: "Softgels",
    image: "/images/s4.png",
  },
  {
    id: 5,
    title: "Skincare Products",
    image: "/images/s5.png",
  },
  {
    id: 6,
    title: "Eye Drops",
    image: "/images/s6.png",
  },
  {
    id: 7,
    title: "Syrups",
    image: "/images/s7.png",
  },
  {
    id: 8,
    title: "Capsules",
    image: "/images/s8.png",
  },
];

export default function PharmaCategories() {
  const { typesOfProducts, fetchProductTypes } = useLandingPageContext();
  const { section_name, section_heading, section_sub_heading, data }: any =
    typesOfProducts || {};

  useEffect(() => {
    fetchProductTypes();
  });

  return (
    <div className="hero-sub-container">
      <div className="bg-pharma-category rounded-[20px]">
        <div className="sub-container">
          <div className="py-16">
            <PageTitle
              tag={section_name}
              tagClass="border border-[#00A859] rounded-full px-4 py-2 text-sm capitalize text-[#172C45] leading-[16px] mb-4 w-auto inline-block"
              // tagClass="border border-[#00A859] rounded-full max-w-[180px] w-full sm:w-auto p-2 text-sm capitalize text-[#172C45] leading-[16px] mb-4"
              heading={section_heading}
              headingClass="text-[2.875rem] mt-2 font-normal  text-[#172C45] leading-[3.438rem]"
              subHeading={section_sub_heading}
              subHeadingClass="text-base font-normal mt-2 text-[#45566A] leading-[25px] lg:mt-15"
              wrapperClass="grid lg:grid-cols-2 gap-10"
            />
            <div className="flex flex-wrap gap-6 justify-center mt-10">
              {data?.slice(0, 8).map((cat: any) => {
                const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
                const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
                const imageUrl = `${baseUrl}${imagePath}/${cat.image}`;
                return (
                  <div
                    key={cat.id}
                    className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] max-w-[299px]"
                  >
                    {cat.image && (
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        width={299}
                        height={263}
                        className="block rounded-t-lg object-cover"
                      />
                    )}
                    <p className="h-[63px] bg-white flex justify-center items-center rounded-b-lg text-xl font-semibold text-[#172C45] red-hat leading-[32px]">
                      {cat.title}
                    </p>
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
