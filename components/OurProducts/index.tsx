"use client";
import PageTitle from "@/ui/PageTitle";
import ProductCard from "@/ui/ProductCard";
import { useState } from "react";
import React from "react";

const productTypes = [
  { id: 1, name: "critical Care", icon: "/icons/electronics.png" },
  { id: 2, name: "Derma Care", icon: "/icons/clothing.png" },
  { id: 3, name: "Gyne Care", icon: "/icons/books.png" },
  { id: 4, name: "Dentel Care", icon: "/icons/furniture.png" },
  { id: 5, name: "ENT", icon: "/icons/toys.png" },
  { id: 6, name: "Pediatric", icon: "/icons/sports.png" },
  { id: 7, name: "AyurVedic", icon: "/icons/sports.png" },
];

export default function OurProducts() {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  return (
    <div className="hero-sub-container">
      <div className="sub-container">
        <div className="py-16">
          <PageTitle
            tag="Our Products"
            tagClass="border border-[#172C451A] rounded-full w-[160px] p-2 text-sm capitalize text-[#172C45] leading-[16px] mb-4"
            heading="Innovative Pharma Products Ensuring Quality and Trust"
            headingClass="text-[2.875rem] mt-2 font-normal text-[#172C45] leading-[3.438rem]"
            subHeading="Our range of pharmaceutical products is crafted with precision and care. Each product meets global quality standards to ensure safety, efficacy, and reliability for patients and healthcare professionals."
            subHeadingClass="text-base font-normal mt-2 text-[#45566A] leading-[25px] lg:mt-15"
            wrapperClass="grid lg:grid-cols-2 gap-8"
          />
          <div className="flex flex-wrap  justify-start md:justify-start lg:justify-center gap-4 py-10 ">
            {productTypes.map((product) => (
              <div
                key={product.id}
                onClick={() => setActiveProduct(product.id)}
                className={`
        flex flex-col items-center px-5 py-2 border rounded-lg cursor-pointer
        hover:bg-[#00A859] hover:text-white hover:border-[#00A859]
        ${
          activeProduct === product.id
            ? "bg-[#00A859] text-white border-[#00A859]"
            : "bg-white text-gray-800 border-gray-300"
        }
        sm:px-8 sm:py-2
        md:px-8 md:py-2
      `}
              >
                <p className="text-base font-bold leading-[32px] red-hat capitalize">
                  {product.name}
                </p>
              </div>
            ))}
          </div>

          <ProductCard />
        </div>
      </div>
    </div>
  );
}
