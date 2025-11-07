"use client";
import { useLandingPageContext } from "@/context/LandingPageContext";
import PageTitle from "@/ui/PageTitle";
import AboutProductCard from "@/ui/AboutProductCard";
import SwipeSlider from "@/ui/SwipeSlider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";

export default function OurProducts() {
  const router = useRouter();

  const {
    pharmaProducts,
    fetchPharmaProductsMenu,
    pharmaProductsMenu,
    fetchPharmaProducts,
  } = useLandingPageContext();

  const { section_name, section_heading, section_sub_heading }: any =
    pharmaProductsMenu || {};
  const { product_categories, product }: any = pharmaProducts || {};
  const [activeProduct, setActiveProduct] = useState<string | undefined>(
    product_categories?.[0]?.title || "critical-care"
  );

  const handleClickProduct = (slug: any) => {
    router.push(`/product-detail/${slug}`);
  };

  const handleSelectProductType = (slug: any) => {
    setActiveProduct(slug);
    fetchPharmaProducts(slug);
  };
  useEffect(() => {
    fetchPharmaProductsMenu();
    fetchPharmaProducts(activeProduct);
  }, []);

  return (
    <div className="hero-sub-container">
      <div className="sub-container">
        <div className="py-16">
          <PageTitle
            tag={section_name}
            tagClass="border border-[#172C451A] rounded-full px-4 py-2 text-sm capitalize text-[#172C45] leading-[16px] mb-4 w-max inline-block"
            // tagClass="border border-[#172C451A] rounded-full max-w-[160px] w-full sm:w-auto p-2 text-sm capitalize text-[#172C45] leading-[16px] mb-4"
            heading={section_heading}
            headingClass="text-[2.875rem] mt-2 font-normal text-[#172C45] leading-[3.438rem]"
            subHeading={section_sub_heading}
            subHeadingClass="text-base font-normal mt-2 text-[#45566A] leading-[25px] lg:mt-15"
            wrapperClass="grid lg:grid-cols-2 gap-8"
          />
          <div className="flex flex-wrap  justify-start md:justify-start lg:justify-center gap-4 py-10 ">
            {/* <SwipeSlider
              slidesPerView={5}
              bottomSwipeBtn={false}
              swipebtn={true}
              spaceBetween={10}
              autoPlay={false}
            > */}
            {product_categories?.slice(0, 8)?.map((product: any) => (
              <div
                key={product.id}
                onClick={() => handleSelectProductType(product.slug)}
                className={`
        flex flex-col items-center px-5 py-2 border rounded-lg cursor-pointer
        hover:bg-[#00A859] hover:text-white hover:border-[#00A859]
        ${
          activeProduct === product.slug
            ? "bg-[#00A859] text-white border-[#00A859]"
            : "bg-white text-gray-800 border-gray-300"
        }
        sm:px-8 sm:py-2
        md:px-8 md:py-2
      `}
              >
                <p className="text-base font-bold leading-[32px] red-hat capitalize">
                  {product.title}
                </p>
              </div>
            ))}
            {/* </SwipeSlider> */}
          </div>
          {product?.length > 0 ? (
            <SwipeSlider
              slidesPerView={4}
              bottomSwipeBtn={false}
              swipebtn={false}
              spaceBetween={20}
            >
              {product?.map((product: any) => (
                <AboutProductCard
                  key={product.id}
                  {...product}
                  handleClickProduct={() => handleClickProduct(product.slug)}
                />
              ))}
            </SwipeSlider>
          ) : (
            <p className="flex justify-center items-center w-full mt-auto">
              No Product Found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
