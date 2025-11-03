// "use client";
// import { useLandingPageContext } from "@/context/LandingPageContext";
// import PageTitle from "@/ui/PageTitle";
// import Image from "next/image";
// import React, { useEffect } from "react";

// export default function WhyChooseUs() {
//   const { whyToChooseus, fetchWhyToChooseUs } = useLandingPageContext();
//   const { section_name, section_heading, image, custom_fields }: any =
//     whyToChooseus || {};

//   useEffect(() => {
//     fetchWhyToChooseUs();
//   }, []);

//   return (
//     <div className="choose-usWrapper">
//       <div className="hero-sub-container">
//         <div className="sub-container">
//           <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-15">
//             <div className="flex justify-center items-center">
//               <div className="relative w-full h-64 sm:h-[320px] md:h-[350px] lg:w-[90%] lg:h-[500px]">
//                 {image && (
//                   <Image
//                     src={image}
//                     alt="bg"
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-3xl"
//                   />
//                 )}
//                 <div className="absolute top-0 left-0 w-full h-full bg-black/15 rounded-3xl"></div>
//               </div>
//             </div>

//             <div className="flex justify-center items-center flex-col">
//               <PageTitle
//                 tag={section_name}
//                 tagClass="border rounded-full px-4 py-2 text-sm capitalize text-[#172C45] leading-[16px] w-auto inline-block"
//                 subHeading={section_heading}
//                 subHeadingClass="text-[1.75rem] font-normal mt-2 text-[#45566A]  mt-8"
//               />
//               <div className="grid grid-cols-1 gap-6 mt-8">
//                 {custom_fields?.map((item: any, id: any) => (
//                   <div key={id} className="flex gap-6 items-start">
//                     {item.image && (
//                       <Image
//                         src={item.image}
//                         alt={"icon"}
//                         height={50}
//                         width={50}
//                         className="object-contain shrink-0"
//                       />
//                     )}
//                     <div className="flex-1 w-full max-w-[663px]">
//                       <p className="bg-[#00A859] min-w-[86px]  max-w-[102px] px-3 h-[33px] rounded-lg flex justify-center items-center text-base font-semibold text-white mb-2">
//                         {item.name}
//                       </p>
//                       <span className="text-base font-normal primary-font text-[#45566A]">
//                         {item.value}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { useLandingPageContext } from "@/context/LandingPageContext";
import React, { useEffect, useState } from "react";
import PageTitle from "@/ui/PageTitle";

const logoss = [
  { src: "/images/ino.png", alt: "Akums" },
  { src: "/images/ino.png", alt: "Windlas" },
  { src: "/images/ino.png", alt: "Mascot" },
  { src: "/images/ino.png", alt: "Tirupati" },
  { src: "/images/ino.png", alt: "Windlas" },
  { src: "/images/ino.png", alt: "Tirupati" },
  { src: "/images/ino.png", alt: "Windlas" },
  { src: "/images/ino.png", alt: "Tirupati" },
  { src: "/images/ino.png", alt: "Windlas" },
];

export const useResponsiveRadius = () => {
  const [radius, setRadius] = useState(220);
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(120); // mobile
      } else if (window.innerWidth < 1024) {
        setRadius(160); // tablet
      } else {
        setRadius(220); // desktop
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);
  return radius;
};

export default function ManufacturerSection() {
  const { whyToChooseus, fetchWhyToChooseUs } = useLandingPageContext();
  const { section_name, section_heading, image, custom_fields, logos }: any =
    whyToChooseus || {};

  const radius = useResponsiveRadius();

  useEffect(() => {
    fetchWhyToChooseUs();
  }, []);

  return (
    <section className="py-12">
      <div className="hero-child-container">
        <PageTitle
          tag={section_name}
          tagClass="border rounded-full px-4 py-2 text-sm capitalize text-[#172C45] leading-[16px] w-auto inline-block"
          subHeading={section_heading}
          subHeadingClass="text-[1rem] lg:text-[1.75rem] font-normal mt-2 text-[#45566A] mt-8 text-center"
          wrapperClass="flex items-center flex-col"
        />

        <div className="grid md:grid-cols-2 py-10">
          {/* LEFT SECTION */}
          <div className="sub-container flex justify-end items-center !px-0">
            <div className="relative flex items-center justify-center h-[350px] md:w-full md:h-full hidden md:flex">
              {/* animate-rotate-slow rotate-slow-reverse */}
              {/* <div className="absolute w-full h-full  flex items-center justify-center left-2/4">
              {logos?.map((logo: any, i: any) => {
                const angle = (i / ((logos || logoss).length - 1)) * Math.PI;
                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      transform: `rotate(${
                        (angle * 360) / Math.PI
                      }deg) translateX(${radius}px) rotate(-${
                        (angle * 360) / Math.PI
                      }deg)`,
                    }}
                  >
                    <Image
                      src={logo?.image || logo.src}
                      alt={logo.alt}
                      width={80}
                      height={80}
                      className="rounded-md object-contain  w-[45px] h-[45px]  sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px]"
                    />
                  </div>
                );
              })}
            </div> */}
              <div className="absolute w-full h-full flex items-center justify-center left-2/4 rotate-slow-reverse animate-rotate-slow ">
                {logos?.map((logo: any, i: any) => {
                  const total = (logos || logoss).length - 1;
                  const spacingFactor = 1.2; // adjust spacing between logos
                  const angle = (i / total) * 2 * Math.PI * spacingFactor;

                  return (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        // 🔁 Mirrored (opposite side) by adding 180°
                        transform: `rotate(${
                          (angle * 180) / Math.PI + 180
                        }deg) translateX(${radius}px)`,
                      }}
                    >
                      <Image
                        src={logo?.image || logo.src}
                        alt={logo.alt}
                        width={80}
                        height={80}
                        className="rounded-md object-contain w-[45px] h-[45px] sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px] rotate-190"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="relative sub-container px-0">
            <div className="bg-white rounded-r-2xl !px-0 mx-0">
              <div className="absolute top-1/2 -left-15 lg:-left-3 transform -translate-x-1/2 -translate-y-1/2 z-90">
                {image && (
                  <Image
                    src={image}
                    alt="BioBox Pharma"
                    width={260}
                    height={90}
                    className="object-contain bg-[#1e344b]/95 w-[45px] h-[45px] rounded-sm md:w-[90px] md:h-[60px] lg:w-[250px] lg:h-[90px] hidden md:flex py-2"
                  />
                )}
              </div>
              <div className="flex justify-center md:justify-end lg:justify-center md:py-16 lg:py-0">
                <div className="lg:mt-12 text-gray-800 max-w-md space-y-8">
                  <div className="grid grid-cols-1 gap-6 lg:ml-16 lg:py-12">
                    {custom_fields?.map((item: any, id: any) => (
                      <div key={id} className="flex gap-6 items-start">
                        <div className="flex-1 w-full max-w-[663px]">
                          <p className="font-medium mb-2 text-[1.25rem] text-[#172C45]">
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
      </div>
    </section>
  );
}
