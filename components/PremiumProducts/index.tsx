import PageTitle from "@/ui/PageTitle";
import ProductCard from "@/ui/ProductCard";
import SwipeSlider from "@/ui/SwipeSlider";
import React from "react";

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
  return (
    <>
      <div className="bg-white">
        <div className="hero-sub-container">
          <div className="hero-child-container">
            <div className="py-14">
              <PageTitle
                tag="Revolutiononing HealthCare"
                tagClass="border border-[#00A859] rounded-full px-4 py-1 text-sm sm:text-base capitalize text-[#172C45] leading-4 sm:leading-5 w-max"
                heading="Innovating Healthcare With Over 2500 Premium Products."
                subHeading="At Biobox Pharma, we are redefining healthcare through cutting-edge innovation and unwavering excellence. Our commitment to advanced research and quality ensures superior solutions for a healthier future."
                headingClass="text-2xl sm:text-3xl md:text-[2.875rem] mt-2 font-normal text-[#172C45] leading-snug sm:leading-normal md:leading-[3.438rem] mt-6 text-center"
                wrapperClass="w-full mx-auto px-4"
                subHeadingClass=" mt-6 text-center"
                tagWrapper="flex flex-col items-center"
              />
              {/* <div className="flex flex-wrap justify-between gap-10 mt-12 sm:justify-center">
                <ProductCard />
              </div> */}
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
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
