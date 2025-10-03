"use client";
import { useAboutUsPageContext } from "@/context/AboutUsPageContext";
import PageTitle from "@/ui/PageTitle";
import AboutProductCard from "@/ui/AboutProductCard";
import SwipeSlider from "@/ui/SwipeSlider";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const products = [
  {
    id: 1,
    title: "Tazobox-4.5",
    image: "/images/p1.png",
    alt: "Tazobactam Injection",
    slug: "tazobox-4-5",
  },
  {
    id: 2,
    title: "Amoxicillin-500",
    image: "/images/p2.png",
    alt: "Amoxicillin Capsule",
    slug: "amoxicillin-500",
  },
  {
    id: 3,
    title: "Cefixime-200",
    image: "/images/p3.png",
    alt: "Cefixime Tablet",
    slug: "cefixime-200",
  },
  {
    id: 4,
    title: "Metformin-500",
    image: "/images/p4.png",
    alt: "Metformin Tablet",
    slug: "metformin-500",
  },
  {
    id: 5,
    title: "Cefixime-200",
    image: "/images/p3.png",
    alt: "Cefixime Tablet",
    slug: "cefixime-200-2",
  },
  {
    id: 6,
    title: "Metformin-500",
    image: "/images/p4.png",
    alt: "Metformin Tablet",
    slug: "metformin-500-2",
  },
];

export default function PremiumProducts() {
  const router = useRouter();
  const { aboutUsProducts, fetchAboutUsProductsList } = useAboutUsPageContext();
  const { section_name, section_heading, section_sub_heading, product }: any =
    aboutUsProducts;

  console.log(product, "aboutUsProducts");

  const handleProductDetail = async (slug: any) => {
    router.push(`/product-detail/${slug}`);
  };

  useEffect(() => {
    fetchAboutUsProductsList();
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="hero-sub-container">
          <div className="hero-child-container">
            <div className="py-14">
              <PageTitle
                tag={section_name}
                tagClass="border border-[#00A859] rounded-full px-4 py-1 text-sm sm:text-base capitalize text-[#172C45] leading-4 sm:leading-5 inline-block"
                // tagClass="border border-[#00A859] rounded-full px-4 py-1 text-sm sm:text-base capitalize text-[#172C45] leading-4 sm:leading-5 w-max"
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
                  {product?.map((product: any) => (
                    <AboutProductCard
                      key={product.id}
                      {...product}
                      handleClickProduct={() =>
                        handleProductDetail(product.slug)
                      }
                    />
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
