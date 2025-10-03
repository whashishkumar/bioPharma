"use client";
import PageTitle from "@/ui/PageTitle";
import React, { useEffect } from "react";
import Image from "next/image";
import Button from "@/ui/Button";

import { useLandingPageContext } from "@/context/LandingPageContext";
import { useRouter } from "next/navigation";

const businessItems = [
  {
    id: 1,
    image: "/icons/icon.png",
    title: "Patient Centered Care",
    description:
      "We work day and night to solve the problems that can help them move forward for those who is seeking answers!",
  },
  {
    id: 2,
    image: "/icons/pdc2.png",
    title: "Quality Improvement",
    description:
      "Our team typically processes High Quality Standard Product Innovation",
  },
];

const avatars = [
  { id: 1, src: "/icons/Figure.png", alt: "Avatar 1" },
  { id: 2, src: "/icons/Figure.png", alt: "Avatar 2" },
  { id: 3, src: "/icons/Figure.png", alt: "Avatar 3" },
];

export default function PcdOppurnity() {
  const router = useRouter();
  const { PCDBusinessOpportunity, fetchPcdBusinessOpportunity } =
    useLandingPageContext();

  const {
    section_name,
    section_heading,
    section_sub_heading,
    data,
    image,
    images,
    trusted_by,
    years_label,
    years,
    button,
  }: any = PCDBusinessOpportunity || {};
  useEffect(() => {
    fetchPcdBusinessOpportunity();
  }, []);

  return (
    <>
      <div className="hero-sub-container">
        <div className="bg-product-category rounded-[20px]">
          <div className="sub-container">
            <div className="py-16 grid lg:grid-cols-2 gap-20">
              <div>
                <PageTitle
                  tag={section_name}
                  tagClass="border border-[#00A859] rounded-full px-4 py-2 text-sm capitalize text-[#172C45] leading-[16px] inline-block"
                  // tagClass="border border-[#00A859] rounded-full max-w-[240px] w-full sm:w-auto p-2 text-sm capitalize text-[#172C45] leading-[16px]"
                  heading={section_heading}
                  headingClass="text-[2.875rem] mt-2 font-normal text-[#172C45] leading-[3.438rem] mt-6"
                  subHeading={section_sub_heading}
                  subHeadingClass="text-base font-normal mt-2 text-[#45566A] leading-[25px] mt-2"
                />
                <div className="flex flex-col gap-10 mt-8">
                  {data?.map((item: any, id: number) => (
                    <div key={id} className="flex gap-8">
                      {item.image && (
                        <div>
                          <Image
                            src={item.image}
                            alt={"banner"}
                            width={50}
                            height={50}
                            className="object-contain"
                          />
                        </div>
                      )}
                      <div className="flex flex-col w-full max-w-[472px]">
                        <h3 className="text-lg font-semibold text-xl text-[#172C45] sanchez leading-[26px]">
                          {item.name}
                        </h3>
                        <p className="font-normal text-base text-[#172C45] sanchez mt-3 leading-[26px]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-16">
                  <Button
                    children={button?.[0]?.name}
                    onClick={() => router.push(button?.[0]?.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center flex-col items-center">
                {image && (
                  <Image
                    src={image}
                    alt="PCD Opportunity"
                    width={500}
                    height={500}
                    className="object-contain rounded-xl"
                  />
                )}
                <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-8 mt-10 text-center md:text-left">
                  <div className="primary-font font-bold text-3xl flex flex-col md:flex-row items-center gap-2">
                    <h4>{years}</h4>
                    <p className="primary-font font-normal text-sm whitespace-pre-line">
                      {years_label?.replace("Experience", "\nExperience")}
                    </p>
                  </div>

                  <div className="flex -space-x-2">
                    {images?.map((avatar: any, id: number) => (
                      <img
                        key={id}
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-contain"
                        src={avatar}
                        alt={"acator"}
                      />
                    ))}
                  </div>

                  <div className="primary-font text-sm flex flex-col items-center md:items-start">
                    <p>{trusted_by?.name}</p>
                    <p className="primary-font font-bold text-sm">
                      {trusted_by?.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
