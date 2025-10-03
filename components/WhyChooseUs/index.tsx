"use client";
import { useLandingPageContext } from "@/context/LandingPageContext";
import PageTitle from "@/ui/PageTitle";
import Image from "next/image";
import React, { useEffect } from "react";

export default function WhyChooseUs() {
  const { whyToChooseus, fetchWhyToChooseUs } = useLandingPageContext();
  const { section_name, section_heading, image, custom_fields }: any =
    whyToChooseus || {};

  useEffect(() => {
    fetchWhyToChooseUs();
  }, []);

  return (
    <div className="choose-usWrapper">
      <div className="hero-sub-container">
        <div className="sub-container">
          <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-15">
            <div className="flex justify-center items-center">
              <div className="relative w-full h-64 sm:h-[320px] md:h-[350px] lg:w-[90%] lg:h-[500px]">
                {image && (
                  <Image
                    src={image}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl"
                  />
                )}
                <div className="absolute top-0 left-0 w-full h-full bg-black/15 rounded-3xl"></div>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col">
              <PageTitle
                tag={section_name}
                tagClass="border rounded-full px-4 py-2 text-sm capitalize text-[#172C45] leading-[16px] w-auto inline-block"
                subHeading={section_heading}
                subHeadingClass="text-[1.75rem] font-normal mt-2 text-[#45566A]  mt-8"
              />
              <div className="grid grid-cols-1 gap-6 mt-8">
                {custom_fields?.map((item: any, id: any) => (
                  <div key={id} className="flex gap-6 items-start">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={"icon"}
                        height={50}
                        width={50}
                        className="object-contain shrink-0"
                      />
                    )}
                    <div className="flex-1 w-full max-w-[663px]">
                      <p className="bg-[#00A859] min-w-[86px]  max-w-[102px] px-3 h-[33px] rounded-lg flex justify-center items-center text-base font-semibold text-white mb-2">
                        {item.name}
                      </p>
                      <span className="text-base font-normal primary-font text-[#45566A]">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
