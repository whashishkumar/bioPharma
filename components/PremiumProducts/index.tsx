"use client";
import { useLandingPageContext } from "@/context/LandingPageContext";
import PageTitle from "@/ui/PageTitle";
import ProductCard from "@/ui/ProductCard";
import SwipeSlider from "@/ui/SwipeSlider";
import React, { useEffect } from "react";

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
  {
    id: 5,
    name: "Cefixime-200",
    image: "/images/p3.png",
    alt: "Cefixime Tablet",
  },
  {
    id: 6,
    name: "Metformin-500",
    image: "/images/p4.png",
    alt: "Metformin Tablet",
  },
];

export default function PremiumProducts() {
  const { pharmaProducts, fetchPharmaProducts } = useLandingPageContext();
  const { section_name, section_heading, section_sub_heading }: any =
    pharmaProducts;
  console.log(pharmaProducts, "pharmaProducts");

  useEffect(() => {
    fetchPharmaProducts();
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="hero-sub-container">
          <div className="hero-child-container">
            <div className="py-14">
              <PageTitle
                tag={section_name}
                tagClass="border border-[#00A859] rounded-full px-4 py-1 text-sm sm:text-base capitalize text-[#172C45] leading-4 sm:leading-5 w-max"
                heading={section_heading}
                subHeading={section_sub_heading}
                headingClass="text-2xl sm:text-3xl md:text-[2.875rem] mt-2 font-normal text-[#172C45] leading-snug sm:leading-normal md:leading-[3.438rem] mt-6 text-center"
                wrapperClass="w-full mx-auto px-4"
                subHeadingClass=" mt-6 text-center"
                tagWrapper="flex flex-col items-center"
              />
              <div className="py-12">
                <SwipeSlider
                  slidesPerView={4}
                  bottomSwipeBtn={false}
                  swipebtn={false}
                  spaceBetween={20}
                >
                  {products?.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </SwipeSlider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
