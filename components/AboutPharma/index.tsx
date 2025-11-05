"use client";
import Image from "next/image";
import { PiEyeBold } from "react-icons/pi";
import { IoIosCheckbox } from "react-icons/io";
import Link from "next/link";
import { useAboutUsPageContext } from "@/context/AboutUsPageContext";
import { useEffect } from "react";
import Loader from "@/ui/Loader";
import CEOSectiion from "./MeetOurCeo";
import Expertise from "./Expertise";

export default function AboutPharma() {
  const {
    loading,
    fetchAboutSectionOne,
    sectionOne,
    fetchAboutSectionCeo,
    ceoSectionData,
    fetchAboutSectionWhyWeUnique,
    whyWeUniqueData,
  } = useAboutUsPageContext();
  const { data }: any = sectionOne || {};
  const { data: ceoSection }: any = ceoSectionData || {};
  const { section_heading, points, images }: any = whyWeUniqueData || {};
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const imageUrl = `${baseUrl}${imagePath}/${data?.about_short_image}`;
  const bgImageUrl = `${baseUrl}${imagePath}/${data?.about_large_image}`;
  const ceoImage = `${baseUrl}${imagePath}/${ceoSection?.ceo_image}`;
  const uniqueImg1 = `${baseUrl}${imagePath}/${images?.image_1}`;
  const uniqueImg2 = `${baseUrl}${imagePath}/${images?.image_2}`;

  useEffect(() => {
    fetchAboutSectionOne();
    fetchAboutSectionCeo();
    fetchAboutSectionWhyWeUnique();
  }, []);

  return (
    <div className="sub-container">
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-16 px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <p className="text-[#172C45] uppercase font-bold sanchez">
              {data?.first_title}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#172C45] sanchez">
              {data?.second_title}
            </h2>
            <p className="text-[#45566A] red-hat font-normal text-base md:text-lg leading-7 md:leading-8">
              {data?.description}
            </p>

            {/* <div className="flex gap-4 items-start">
              {data?.core_value_title && (
                <PiEyeBold className="text-[#00A859] text-2xl md:text-3xl shrink-0" />
              )}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#172C45] sanchez">
                  {data?.core_value_title}
                </h3>
                <p className="text-[#45566A] red-hat font-normal text-base md:text-lg">
                  {data?.core_value_desc}
                </p>
              </div>
            </div> */}
            {/* <div className="flex gap-4 items-start">
              {data?.core_value_title && (
                <PiEyeBold className="text-[#00A859] text-2xl md:text-3xl shrink-0" />
              )}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#172C45] sanchez">
                  {data?.mission_title}
                </h3>
                <p className="text-[#45566A] red-hat font-normal text-base md:text-lg">
                  {data?.about_mission_desc}
                </p>
              </div>
            </div> */}
            {/* ))} */}
          </div>
          <div className="relative flex justify-center md:justify-end">
            {data?.about_short_image && (
              <Image
                src={imageUrl}
                alt="welcome"
                width={500}
                height={550}
                className=" max-w-full h-auto"
              />
            )}
            {data?.about_large_image && (
              <Image
                src={bgImageUrl}
                alt="welcome overlay"
                width={200}
                height={280}
                className="absolute left-6 top-6 md:left-12 md:top-12 hidden lg:flex"
              />
            )}
          </div>
        </div>
        <div className="py-16">
          <CEOSectiion ceoImage={ceoImage} ceodata={ceoSection} />
        </div>
        {/* <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-12  py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-start">
            {ceoSection?.ceo_image && (
              <Image
                src={ceoImage}
                alt="CEO"
                width={500}
                height={400}
                className=" max-w-full h-auto"
              />
            )}
          </div>
          <div className="space-y-6">
            <p className="text-[#172C45] uppercase font-bold sanchez">
              {ceoSection?.heading}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#172C45] sanchez">
              {ceoSection?.cio_name}
            </h2>
            <p className="text-[#45566A] red-hat font-normal text-base md:text-lg leading-7 md:leading-8">
              {ceoSection?.meet_desc}
            </p>
          </div>
        </div> */}
        {/* <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-16 px-4 sm:px-6 lg:px-8 lg:gap-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#172C45] sanchez">
              {section_heading}
            </h2>
            {points?.map(
              (pt: { title: string; description: string }, i: number) => (
                <div key={i} className="flex gap-4 items-start">
                  <IoIosCheckbox className="text-[#00A859] text-2xl md:text-3xl shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#172C45] sanchez">
                      {pt.title}
                    </h3>
                    <p className="text-[#45566A] red-hat font-normal text-base md:text-lg">
                      {pt.description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="relative flex justify-center md:justify-end">
            {images?.image_1 && (
              <Image
                src={uniqueImg1}
                alt="Unique 1"
                width={500}
                height={400}
                className=" max-w-full "
              />
            )}
            {images?.image_2 && (
              <Image
                src={uniqueImg2}
                alt="Unique overlay"
                width={220}
                height={300}
                className="absolute -left-10 bottom-[-30] w-[32%] sm:w-[40%] md:w-[45%] lg:w-[50%] object-contain hidden lg:flex"
              />
            )}
          </div>
        </div> */}
        <Expertise />
      </div>
      {/* )} */}
    </div>
  );
}
