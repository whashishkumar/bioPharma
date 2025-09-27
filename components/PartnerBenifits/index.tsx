"use client";
import PageTitle from "@/ui/PageTitle";
import React, { useEffect } from "react";
import BenifitCard from "./BenifitCard";
import { useAboutUsPageContext } from "@/context/AboutUsPageContext";

export default function PartnerBenifits() {
  const { benifitsWithUsData, loading, fetchBenifitsWithUsData } =
    useAboutUsPageContext();
  const { section_heading, section_sub_heading, benefits }: any =
    benifitsWithUsData || {};

  useEffect(() => {
    fetchBenifitsWithUsData();
  }, []);

  return (
    <>
      <div className="hero-sub-container">
        <div className="bg-product-category rounded-[20px]">
          <div className="hero-child-container">
            <div className="py-14">
              <PageTitle
                tag="Benefits"
                tagClass="border border-[#00A859] rounded-full px-4 py-1 text-sm sm:text-base capitalize text-[#172C45] leading-4 sm:leading-5 w-max"
                heading={section_heading}
                subHeading={section_sub_heading}
                headingClass="text-2xl sm:text-3xl md:text-[2.875rem] mt-2 font-normal text-[#172C45] leading-snug sm:leading-normal md:leading-[3.438rem] mt-6 max-w-full sm:max-w-xl md:max-w-2xl text-center"
                wrapperClass="w-full mx-auto px-4"
                subHeadingClass=" mt-6 text-center"
                tagWrapper="flex flex-col items-center"
              />
              <div className="flex flex-wrap justify-between gap-10 mt-12 sm:justify-center">
                <BenifitCard cardData={benefits} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
