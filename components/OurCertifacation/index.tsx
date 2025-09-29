"use client";
import { useLandingPageContext } from "@/context/LandingPageContext";
import PageTitle from "@/ui/PageTitle";
import Image from "next/image";
import React, { useEffect } from "react";

const certifications = [
  { id: 1, src: "/images/certifacation.png", alt: "Certification 1" },
  { id: 2, src: "/images/c1.png", alt: "Certification 2" },
  { id: 3, src: "/images/c2.png", alt: "Certification 3" },
  { id: 4, src: "/images/c3.png", alt: "Certification 4" },
  { id: 5, src: "/images/c4.png", alt: "Certification 5" },
  { id: 6, src: "/images/c2.png", alt: "Certification 3" },
];

export default function OurCertification() {
  const { loading, ourCertification, fetchOurCertifacation } =
    useLandingPageContext();

  const {
    section_name,
    section_heading,
    section_sub_heading,
    custom_fields,
  }: any = ourCertification || {};

  useEffect(() => {
    fetchOurCertifacation();
  }, []);

  return (
    <div className="hero-sub-container">
      <div className="sub-container">
        <div className="py-16">
          <PageTitle
            tag={section_name}
            tagClass="border border-[#172C451A] rounded-full w-[160px] p-2 text-sm capitalize text-[#172C45] leading-[16px] mb-4"
            heading={section_heading}
            headingClass="text-[2.875rem] mt-2 font-normal text-[#172C45] leading-[3.438rem]"
            subHeading={section_sub_heading}
            subHeadingClass="text-base font-normal mt-2 text-[#45566A] leading-[25px] lg:mt-15"
            wrapperClass="grid lg:grid-cols-2 gap-8"
          />

          {/* Responsive Grid for Certifications */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12 justify-items-center">
            {custom_fields?.map((cert: any) => (
              <div key={cert.id} className="w-full max-w-[150px]">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={150}
                  height={195}
                  className="rounded-lg object-contain w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image src={"/images/play.png"} alt={"play"} height={800} width={1820} />
    </div>
  );
}
