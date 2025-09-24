import PageTitle from "@/ui/PageTitle";
import Image from "next/image";
import React from "react";

const missionItems = [
  {
    id: 1,
    title: "Mission",
    description:
      "Biobox Pharma is dedicated to improving global health through innovative and effective pharmaceutical solutions. We strive to ensure quality, affordability, and accessibility for every patient.",
    icon: "/icons/whyIcon.png",
  },
  {
    id: 2,
    title: "Vision",
    description:
      "Our vision is to lead the pharmaceutical industry with groundbreaking research and development, ensuring a healthier future for communities worldwide.",
    icon: "/icons/whyIcon.png",
  },
  {
    id: 3,
    title: "Values",
    description:
      "Integrity, innovation, and patient-centricity are the core values that guide every decision and action at Biobox Pharma.",
    icon: "/icons/whyIcon.png",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="choose-usWrapper">
      <div className="hero-sub-container">
        <div className="sub-container">
          <div className="py-16 grid grid-cols-1 lg:grid-cols-[40%_60%]  gap-15">
            <div className="flex  items-center relative w-full h-[560px]">
              <Image
                src="/images/vision.png"
                alt="bg"
                fill
                className="rounded-lg w-full object-fill"
              />
            </div>
            <div>
              <PageTitle
                tag="Why choose us"
                tagClass="border rounded-full w-[160px] p-2 text-sm capitalize text-[#172C45] leading-[16px]"
                subHeading="Choose BioBox Pharma for high-quality, affordable, and innovative pharmaceutical products manufactured in WHO-GMP-certified facilities. We offer monopoly-based PCD franchise opportunities."
                subHeadingClass="text-[1.75rem] font-normal mt-2 text-[ #45566A] leading-[25px]"
              />
              <div className="grid grid grid-cols-1 gap-6 mt-8 ">
                {missionItems.map((item) => (
                  <div key={item.id} className="flex gap-6 items-start">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      height={50}
                      width={50}
                      className="object-contain"
                    />
                    <div className="w-[630px]">
                      <p
                        className={`bg-[#00A859] w-[86px] h-[33px] rounded-lg flex justify-center items-center text-base font-semibold text-white mb-2`}
                      >
                        {item.title}
                      </p>
                      <span className="text-base font-normal primary-font text-[#45566A]">
                        {item.description}
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
