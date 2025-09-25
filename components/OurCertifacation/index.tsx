import PageTitle from "@/ui/PageTitle";
import Image from "next/image";
import React from "react";

const certifications = [
  { id: 1, src: "/images/certifacation.png", alt: "Certification 1" },
  { id: 2, src: "/images/c1.png", alt: "Certification 2" },
  { id: 3, src: "/images/c2.png", alt: "Certification 3" },
  { id: 4, src: "/images/c3.png", alt: "Certification 4" },
  { id: 5, src: "/images/c4.png", alt: "Certification 5" },
  { id: 6, src: "/images/c2.png", alt: "Certification 3" },
];

export default function OurCertification() {
  return (
    <div className="hero-sub-container">
      <div className="sub-container">
        <div className="py-16">
          <PageTitle
            tag="Our Certification"
            tagClass="border border-[#172C451A] rounded-full w-[160px] p-2 text-sm capitalize text-[#172C45] leading-[16px] mb-4"
            heading="Trusted Certifications Ensuring Quality and Excellence"
            headingClass="text-[2.875rem] mt-2 font-normal text-[#172C45] leading-[3.438rem]"
            subHeading="At Biobox Pharma, we are committed to delivering high-quality, affordable pharmaceutical solutions. Our focus on innovation, patient safety, and regulatory excellence ensures better healthcare outcomes. With a strong distribution network, we aim to make trusted medicines accessible worldwide."
            subHeadingClass="text-base font-normal mt-2 text-[#45566A] leading-[25px] lg:mt-15"
            wrapperClass="grid lg:grid-cols-2 gap-8"
          />

          {/* Responsive Grid for Certifications */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12 justify-items-center">
            {certifications.map((cert) => (
              <div key={cert.id} className="w-full max-w-[150px]">
                <Image
                  src={cert.src}
                  alt={cert.alt}
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
