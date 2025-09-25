import PageTitle from "@/ui/PageTitle";
import React from "react";
import Image from "next/image";
import Button from "@/ui/Button";

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
  return (
    <>
      <div className="hero-sub-container">
        <div className="bg-product-category rounded-[20px]">
          <div className="sub-container">
            <div className="py-16 grid lg:grid-cols-2 gap-20">
              <div>
                <PageTitle
                  tag="PCD Business Opportunity"
                  tagClass="border border-[#00A859] rounded-full w-[240px] p-2 text-sm capitalize text-[#172C45] leading-[16px]"
                  heading="Trusted PCD Pharma Business Opportunity Today "
                  headingClass="text-[2.875rem] mt-2 font-normal text-[#172C45] leading-[3.438rem] mt-6"
                  subHeading=" Partner with Biobox Pharma and unlock growth opportunities with our PCD Pharma Franchise. Get exclusive monopoly rights, premium quality products, and unmatched support to help you build a successful pharma business."
                  subHeadingClass="text-base font-normal mt-2 text-[#45566A] leading-[25px] mt-2"
                />
                <div className="flex flex-col gap-10 mt-8">
                  {businessItems.map((item) => (
                    <div key={item.id} className="flex gap-8">
                      {item.image && (
                        <div>
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={50}
                            height={50}
                            className="object-contain"
                          />
                        </div>
                      )}
                      <div className="flex flex-col max-w-[472px]">
                        <h3 className="text-lg font-semibold text-xl text-[#172C45] sanchez leading-[26px]">
                          {item.title}
                        </h3>
                        <p className="font-normal text-base text-[#172C45] sanchez mt-3 leading-[26px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-16">
                  <Button children={"Contact Us"} />
                </div>
              </div>
              <div className="flex justify-center flex-col items-center">
                <Image
                  src="/images/pcdB.png"
                  alt="PCD Opportunity"
                  width={500}
                  height={500}
                  className="object-contain rounded-xl"
                />
                <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-8 mt-10 text-center md:text-left">
                  <div className="primary-font font-bold text-3xl flex flex-col md:flex-row items-center gap-2">
                    <h4>25+</h4>
                    <p className="primary-font font-normal text-sm max-w-[120px]">
                      Years Of Experience
                    </p>
                  </div>

                  <div className="flex -space-x-2">
                    {avatars.map((avatar) => (
                      <img
                        key={avatar.id}
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-contain"
                        src={avatar.src}
                        alt={avatar.alt}
                      />
                    ))}
                  </div>

                  <div className="primary-font text-sm flex flex-col items-center md:items-start">
                    <p>Trusted By</p>
                    <p className="primary-font font-bold text-sm">
                      5K Satisfied Clients
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
