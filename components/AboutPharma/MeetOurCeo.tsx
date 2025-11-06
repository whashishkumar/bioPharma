import Image from "next/image";
import React from "react";

export default function CEOSectiion({ ceoImage, ceodata }: any) {
  return (
    <section className="hero-child-container flex flex-col lg:flex-row bg-[#f1f1f1] rounded-[1.5rem] overflow-hidden  mx-auto !px-0 shadow-sm">
      <div className="relative w-full lg:w-[40%]">
        <Image
          src={ceoImage}
          alt="Executive Portrait"
          width={550}
          height={550}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 w-[80px] h-[80px] border-l-[8px] border-b-[8px] border-[#01a859] rounded-bl-[1.5rem]" />
      </div>
      <div className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-10 bg-[#f5f5f5] w-full lg:w-[60%]">
        <div className="flex items-center mb-6">
          <span className="text-[#01a859] text-4xl font-bold">“</span>
          <div className="flex-1 h-[3px] bg-[#01a859] ml-3"></div>
        </div>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed poppins">
          {ceodata?.meet_desc}
        </p>
        <div className="mt-6">
          <h3 className="text-[#01a859] text-lg sm:text-xl  uppercase font-bold sanchez">
            {ceodata?.heading}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base mt-1 sanchez">
            {ceodata?.cio_name}
          </p>
        </div>
        <div className="flex items-center mt-8">
          <div className="flex-1 h-[3px] bg-[#01a859] mr-3"></div>
          <span className="text-[#01a859] text-4xl font-bold">”</span>
        </div>
      </div>
    </section>
  );
}
