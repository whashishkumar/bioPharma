"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, ReactNode } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";

type SwipeSliderProps = {
  children: ReactNode | ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  autoPlay?: boolean;
  delay?: number;
  bottomSwipeBtn?: boolean;
  textQuort?: boolean;
  swipebtn?: boolean;
};

export default function SwipeSlider({
  children,
  slidesPerView = 3,
  spaceBetween = 20,
  autoPlay = true,
  delay = 4000,
  bottomSwipeBtn = false,
  textQuort = false,
  swipebtn = false,
}: SwipeSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative w-full ">
      {textQuort && (
        <Image
          src={"/images/strReview.png"}
          alt="quote"
          height={40}
          width={40}
        />
      )}

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={spaceBetween}
        autoplay={autoPlay ? { delay, disableOnInteraction: false } : false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView },
        }}
      >
        {Array.isArray(children)
          ? children.map((child, idx) => (
              <SwiperSlide key={idx}>{child}</SwiperSlide>
            ))
          : [<SwiperSlide key="single">{children}</SwiperSlide>]}
      </Swiper>

      {/* Left Arrow */}
      {swipebtn && (
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="arrow-btn-box absolute top-1/2 -translate-y-1/2 left-[-20px] flex justify-center items-center z-10 cursor-pointer"
        >
          <IoIosArrowBack className="arow-icon text-2xl " />
        </button>
      )}

      {/* Right Arrow */}
      {swipebtn && (
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="arrow-btn-box absolute top-1/2 -translate-y-1/2 right-[-20px] flex justify-center items-center z-10 cursor-pointer"
        >
          <IoIosArrowForward className="arow-icon text-2xl" />
        </button>
      )}

      {/* Bottom Navigation Buttons */}
      {bottomSwipeBtn && (
        <div className="flex gap-5 mt-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="arrow-btn-box flex justify-center items-center cursor-pointer "
          >
            <IoIosArrowBack className="arow-icon" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="arrow-btn-box flex justify-center items-center cursor-pointer"
          >
            <IoIosArrowForward className="arow-icon" />
          </button>
        </div>
      )}
    </div>
  );
}
