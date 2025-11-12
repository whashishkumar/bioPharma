"use client";
import Image from "next/image";
import { useRef } from "react";
import { FaHeartbeat, FaVirus, FaStethoscope, FaRibbon } from "react-icons/fa";

export default function ExpertiseCard({ expertiesData }: any) {
  // const data = [
  //   {
  //     id: 1,
  //     title: "Gynaecology",
  //     description:
  //       "Supporting comprehensive women's health through all life stages.",
  //     icon: <FaHeartbeat className="w-22 h-22 text-[#6C3EA0]" />,
  //   },
  //   {
  //     id: 2,
  //     title: "Cardiovascular",
  //     description:
  //       "Delivering innovative solutions to improve heart health worldwide.",
  //     icon: <FaStethoscope className="w-22 h-22 text-[#6C3EA0]" />,
  //   },
  //   {
  //     id: 3,
  //     title: "Infectious Diseases",
  //     description:
  //       "Innovating advanced treatments to combat global infectious diseases.",
  //     icon: <FaVirus className="w-22 h-22 text-[#6C3EA0]" />,
  //   },
  //   {
  //     id: 4,
  //     title: "Oncology",
  //     description:
  //       "Developing effective therapies to improve cancer care and outcomes.",
  //     icon: <FaRibbon className="w-22 h-22 text-[#6C3EA0]" />,
  //   },
  //   {
  //     id: 5,
  //     title: "Gynaecology",
  //     description:
  //       "Supporting comprehensive women's health through all life stages.",
  //     icon: <FaHeartbeat className="w-22 h-22 text-[#6C3EA0]" />,
  //   },
  //   {
  //     id: 6,
  //     title: "Cardiovascular",
  //     description:
  //       "Delivering innovative solutions to improve heart health worldwide.",
  //     icon: <FaStethoscope className="w-22 h-22 text-[#6C3EA0]" />,
  //   },
  //   {
  //     id: 7,
  //     title: "Infectious Diseases",
  //     description:
  //       "Innovating advanced treatments to combat global infectious diseases.",
  //     icon: <FaVirus className="w-22 h-22 text-[#6C3EA0]" />,
  //   },
  //   {
  //     id: 8,
  //     title: "Oncology",
  //     description:
  //       "Developing effective therapies to improve cancer care and outcomes.",
  //     icon: <FaRibbon className="w-22 h-22 text-[#6C3EA0]" />,
  //   },
  // ];

  const { section_heading, points, images, data, image }: any =
    expertiesData || {};
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const uniqueImg1 = `${baseUrl}${imagePath}/${images?.image_1}`;
  const uniqueImg2 = `${baseUrl}${imagePath}/${images?.image_2}`;
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardData = points ? points : data;

  return (
    <section className="mx-auto ">
      {/* Left Section */}
      {points && (
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#172C45] mb-8 text-center lg:text-left flex justify-center py-10 sanchez ">
          {section_heading}
        </h2>
      )}

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className="relative flex-shrink-0 w-full lg:w-1/2 flex justify-center items-center lg:sticky lg:top-24 lg:self-start">
          <div className="relative w-[90%] max-w-[520px] aspect-square overflow-hidden lg:mt-25">
            {image && (
              <Image
                // src="/images/leftbanner.webp"
                src={image}
                alt="Researcher with microscope"
                width={550}
                height={550}
                className="object-cover w-full h-full"
              />
            )}
          </div>
        </div>

        {/* Right Section - Sticky Scroll with Blur Effect */}
        <div className="relative w-full">
          <div className="flex flex-col gap-6">
            {cardData?.map((item: any, index: any) => (
              <div
                key={`${item.id}-${index}`}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`sticky bg-white p-6 rounded-lg transition-all duration-300 `}
                style={{
                  top: `${130 + index * 0}px`,
                }}
              >
                <div className="flex items-start gap-4 ">
                  <div className="border-l-2 border-[#01a859] pl-4">
                    {(item.icon_image || item.image_icon) && (
                      <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] flex items-center justify-center">
                        <Image
                          src={item.icon_image || item.image_icon}
                          alt="Researcher with microscope"
                          width={80}
                          height={80}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-[#45566A] sanchez">
                      {item.title}
                    </h3>
                    <p className=" text-lg mt-2 leading-relaxed text-[#45566A] poppins">
                      {item.description || item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
