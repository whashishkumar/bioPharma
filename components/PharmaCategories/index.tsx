"use client";
import { useLandingPageContext } from "@/context/LandingPageContext";
import PageTitle from "@/ui/PageTitle";
import SwipeSlider from "@/ui/SwipeSlider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const handleProductTypeClick = (slug: string) => {
    router.push(`/our-products?type=${slug}`);
  };

  useEffect(() => {
    fetchProductTypes();
  });

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
            <div className="mt-10 overflow-hidden">
              <div
                className="marquee-container"
                onMouseEnter={(e) => {
                  const marquee =
                    e.currentTarget.querySelector(".marquee-content");
                  if (marquee) {
                    (marquee as HTMLElement).style.animationPlayState =
                      "paused";
                  }
                }}
                onMouseLeave={(e) => {
                  const marquee =
                    e.currentTarget.querySelector(".marquee-content");
                  if (marquee) {
                    (marquee as HTMLElement).style.animationPlayState =
                      "running";
                  }
                }}
              >
                <div className="marquee-content flex gap-6">
                  {/* Render items twice for seamless loop */}
                  {[...(data || []), ...(data || [])]?.map(
                    (cat: any, index: number) => {
                      const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
                      const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
                      const imageUrl = `${baseUrl}${imagePath}/${cat.image}`;
                      return (
                        <div
                          key={`${cat.id}-${index}`}
                          className={`group relative min-w-[299px] rounded-lg overflow-hidden shadow-md transition-all   ${
                            isVisible
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-20"
                          }`}
                          style={{
                            transitionDelay: `${index * 100}ms`,
                            transitionProperty: "opacity, transform",
                            transitionDuration: "700ms",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        >
                          <div className="relative overflow-hidden">
                            {cat.image && cat.image ? (
                              <Image
                                src={cat.image}
                                alt={cat.title}
                                width={299}
                                height={263}
                                className="w-full block rounded-t-lg object-cover transition-transform duration-700 ease-out transform group-hover:scale-110 group-hover:brightness-75"
                              />
                            ) : (
                              <span className="text-sm flex justify-center py-2">
                                Image Not found
                              </span>
                            )}
                          </div>

                          <button
                            className=" w-full h-[63px] bg-white flex justify-center items-center rounded-b-lg text-xl font-semibold text-[#172C45] red-hat leading-[32px] group-hover:bg-[#172C45]/95 group-hover:text-white transition-all duration-500 ease-out cursor-pointer"
                            onClick={() => handleProductTypeClick(cat.slug)}
                          >
                            {cat.title}
                          </button>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

              <style jsx>{`
                .marquee-container {
                  width: 100%;
                  overflow: hidden;
                }

                .marquee-content {
                  display: flex;
                  width: max-content;
                  animation: scroll-left 30s linear infinite;
                }

                @keyframes scroll-left {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
