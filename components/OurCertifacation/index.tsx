"use client";
import { useLandingPageContext } from "@/context/LandingPageContext";
import PageTitle from "@/ui/PageTitle";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function OurCertification() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { loading, ourCertification, fetchOurCertifacation } =
    useLandingPageContext();

  const {
    section_name,
    section_heading,
    section_sub_heading,
    custom_fields,
    image,
  }: any = ourCertification || {};

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    fetchOurCertifacation();
  }, []);

  return (
    <div className="hero-sub-container">
      <div className="sub-container">
        <div className="py-16">
          <PageTitle
            tag={section_name}
            tagClass="border border-[#172C451A] rounded-full px-4 py-2 text-sm capitalize text-[#172C45] leading-[16px] mb-4 w-auto inline-block"
            // tagClass="border border-[#172C451A] rounded-full max-w-[160px] w-full sm:w-auto p-2 text-sm capitalize text-[#172C45] leading-[16px] mb-4"
            heading={section_heading}
            headingClass="text-[2.875rem] mt-2 font-normal text-[#172C45] leading-[3.438rem]"
            subHeading={section_sub_heading}
            subHeadingClass="text-base font-normal mt-2 text-[#45566A] leading-[25px] lg:mt-15"
            wrapperClass="grid lg:grid-cols-2 gap-8"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12 justify-items-center">
            {custom_fields?.map((cert: any, id: any) => (
              <div key={id} className="w-full max-w-[150px]">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={150}
                  height={150}
                  className="rounded-lg object-contain w-full h-70"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Image src={"/images/play.png"} alt={"play"} height={800} width={1820} /> */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gray-100">
        {image && (
          <div>
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              preload="auto"
              poster={image}
              className="w-full h-full object-cover"
            >
              <source src="/videos/pharma1.mp4" type="video/mp4" />
              <source src="/videos/pharma.mp4" type="video/webm" />
              Your browser does not support this video.
            </video>
            {/* <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center text-white text-5xl opacity-80 hover:opacity-100 transition cursor-pointer"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
}
