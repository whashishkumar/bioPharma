import PageTitle from "@/ui/PageTitle";
import Image from "next/image";
import React from "react";

const certifications = [
  { id: 1, src: "/images/certifacation.png", alt: "Certification 1" },
  { id: 2, src: "/images/certifacation.png", alt: "Certification 2" },
  { id: 3, src: "/images/certifacation.png", alt: "Certification 3" },
  { id: 4, src: "/images/certifacation.png", alt: "Certification 4" },
  { id: 5, src: "/images/certifacation.png", alt: "Certification 5" },
  { id: 6, src: "/images/certifacation.png", alt: "Certification 6" },
];
export default function OurCertifacation() {
  return (
    <div className="hero-sub-container">
      <div className="sub-container">
        <div className="py-16">
          <PageTitle
            tag="Our Certification "
            tagClass="border border-[#00A859] rounded-full w-[160px] p-2 text-sm capitalize text-[#172C45] leading-[16px] mb-4"
            heading="Trusted Certifications Ensuring Quality and Excellence"
            headingClass="text-[2.875rem] mt-2 font-normal  text-[#172C45] leading-[3.438rem]"
            subHeading="At Biobox Pharma, we are committed to delivering high-quality, affordable pharmaceutical solutions.  Our focus on innovation, patient safety, and regulatory excellence ensures better healthcare outcomes.  With a strong distribution network, we aim to make trusted medicines accessible worldwide."
            subHeadingClass="text-base font-normal mt-2 text-[#45566A] leading-[25px]"
            wrapperClass="grid lg:grid-cols-2 gap-8"
          />
          <div className="flex flex-wrap gap-20 mt-12">
            {certifications.map((cert) => (
              <div key={cert.id}>
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  height={195}
                  width={150}
                  className="rounded-lg object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
