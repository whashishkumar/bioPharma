import PageTitle from "@/ui/PageTitle";
import Image from "next/image";
import React from "react";

export default function OurProducts() {
  return (
    <div className="hero-sub-container">
      <div className="sub-container">
        <div className="py-16">
          <PageTitle
            tag="Our Products"
            tagClass="border border-[#00A859] rounded-full w-[160px] p-2 text-sm capitalize text-[#172C45] leading-[16px] mb-4"
            heading="Innovative Pharma Products Ensuring Quality and Trust"
            headingClass="text-[2.875rem] mt-2 font-normal text-[#172C45] leading-[3.438rem]"
            subHeading="Our range of pharmaceutical products is crafted with precision and care. Each product meets global quality standards to ensure safety, efficacy, and reliability for patients and healthcare professionals."
            subHeadingClass="text-base font-normal mt-2 text-[#45566A] leading-[25px] lg:mt-15"
            wrapperClass="grid lg:grid-cols-2 gap-8"
          />
        </div>
      </div>
    </div>
  );
}
