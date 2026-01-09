/** @format */

// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { useRef, ReactNode } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import Image from "next/image";
// import type { Swiper as SwiperType } from "swiper";

// type SwipeSliderProps = {
//   children: ReactNode | ReactNode[];
//   slidesPerView?: number;
//   spaceBetween?: number;
//   autoPlay?: boolean;
//   delay?: number;
//   bottomSwipeBtn?: boolean;
//   textQuort?: boolean;
//   swipebtn?: boolean;
//   breakpoints?: any;
// };

// export default function SwipeSlider({
//   children,
//   slidesPerView = 3,
//   spaceBetween = 20,
//   autoPlay = true,
//   delay = 4000,
//   bottomSwipeBtn = false,
//   textQuort = false,
//   swipebtn = false,
//   breakpoints = {},
// }: SwipeSliderProps) {
//   const swiperRef = useRef<SwiperType | null>(null);

//   return (
//     <div className="relative w-full ">
//       {textQuort && (
//         <Image
//           src={"/images/strReview.png"}
//           alt="quote"
//           height={40}
//           width={40}
//         />
//       )}

//       {/* Swiper */}
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         spaceBetween={spaceBetween}
//         autoplay={autoPlay ? { delay, disableOnInteraction: false } : false}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         className="w-full h-full"
//         breakpoints={
//           breakpoints && Object.keys(breakpoints).length > 0
//             ? breakpoints
//             : {
//                 640: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//                 1280: { slidesPerView: 4 },
//               }
//         }
//       >
//         {Array.isArray(children)
//           ? children.map((child, idx) => (
//               <SwiperSlide key={idx}>{child}</SwiperSlide>
//             ))
//           : [<SwiperSlide key="single">{children}</SwiperSlide>]}
//       </Swiper>

//       {/* Left Arrow */}
//       {swipebtn && (
//         <button
//           // disabled={(swiperRef?.current?.slides?.length ?? 0) <= 2}
//           onClick={() => swiperRef.current?.slidePrev()}
//           className="arrow-btn-box absolute top-1/2 -translate-y-1/2 left-[-20px] flex justify-center items-center z-10
//              cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <IoIosArrowBack className="arow-icon text-2xl" />
//         </button>
//       )}

//       {/* Right Arrow */}
//       {swipebtn && (
//         <button
//           // disabled={(swiperRef?.current?.slides?.length ?? 0) <= 2}
//           onClick={() => swiperRef.current?.slideNext()}
//           className={`arrow-btn-box absolute top-1/2 -translate-y-1/2 right-[-20px] flex justify-center items-center z-10
//     ${
//       (swiperRef?.current?.slides?.length ?? 0) <= 2
//         ? "opacity-50 cursor-not-allowed"
//         : "cursor-pointer"
//     }`}
//         >
//           <IoIosArrowForward className="arow-icon text-2xl" />
//         </button>
//       )}

//       {/* Bottom Navigation Buttons */}
//       {bottomSwipeBtn && (
//         <div className="flex gap-5 mt-4">
//           <button
//             onClick={() => swiperRef.current?.slidePrev()}
//             className="arrow-btn-box flex justify-center items-center cursor-pointer "
//             // disabled={(swiperRef?.current?.slides?.length ?? 0) <= 2}
//           >
//             <IoIosArrowBack className="arow-icon" />
//           </button>
//           <button
//             onClick={() => swiperRef.current?.slideNext()}
//             className="arrow-btn-box flex justify-center items-center cursor-pointer"
//             // disabled={(swiperRef?.current?.slides?.length ?? 0) <= 2}
//           >
//             <IoIosArrowForward className="arow-icon" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, ReactNode } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import type { Swiper as SwiperType } from 'swiper';

type SwipeSliderProps = {
	children: ReactNode | ReactNode[];
	slidesPerView?: number;
	spaceBetween?: number;
	autoPlay?: boolean;
	delay?: number;
	bottomSwipeBtn?: boolean;
	textQuort?: boolean;
	swipebtn?: boolean;
	breakpoints?: any;
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
	breakpoints = {},
}: SwipeSliderProps) {
	const swiperRef = useRef<SwiperType | null>(null);

	return (
		<div
			className='relative w-full'
			// 🛑 Pause autoplay when mouse enters
			// onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
			// ▶️ Resume autoplay when mouse leaves
			// onMouseLeave={() => swiperRef.current?.autoplay?.start()}
		>
			{textQuort && (
				<Image
					src={'/images/strReview.png'}
					alt='quote'
					height={40}
					width={40}
				/>
			)}

			<Swiper
				modules={[Navigation, Autoplay]}
				spaceBetween={spaceBetween}
				autoplay={autoPlay}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				className='w-full h-full'
				breakpoints={
					Object.keys(breakpoints).length > 0
						? breakpoints
						: {
								640: { slidesPerView: 1 },
								768: { slidesPerView: 2 },
								1024: { slidesPerView: 3 },
								1280: { slidesPerView: 4 },
						  }
				}
			>
				{Array.isArray(children)
					? children.map((child, idx) => (
							<SwiperSlide key={idx}>{child}</SwiperSlide>
					  ))
					: [<SwiperSlide key='single'>{children}</SwiperSlide>]}
			</Swiper>

			{/* Left Arrow */}
			{swipebtn && (
				<button
					type='button'
					onClick={() => swiperRef.current?.slidePrev()}
					className='arrow-btn-box absolute top-1/2 -translate-y-1/2 left-[-20px] flex justify-center items-center z-10 cursor-pointer transition-opacity duration-300 opacity-100 hover:opacity-80'
				>
					<IoIosArrowBack className='arow-icon text-2xl' />
				</button>
			)}

			{/* Right Arrow */}
			{swipebtn && (
				<button
					onClick={() => swiperRef.current?.slideNext()}
					className='arrow-btn-box absolute top-1/2 -translate-y-1/2 right-[-20px] flex justify-center items-center z-10 cursor-pointer transition-opacity duration-300 opacity-100 hover:opacity-80'
				>
					<IoIosArrowForward className='arow-icon text-2xl' />
				</button>
			)}

			{/* Bottom Navigation Buttons */}
			{bottomSwipeBtn && (
				<div className='flex gap-5 mt-4'>
					<button
						onClick={() => swiperRef.current?.slidePrev()}
						className='arrow-btn-box flex justify-center items-center cursor-pointer '
					>
						<IoIosArrowBack className='arow-icon' />
					</button>
					<button
						onClick={() => swiperRef.current?.slideNext()}
						className='arrow-btn-box flex justify-center items-center cursor-pointer'
					>
						<IoIosArrowForward className='arow-icon' />
					</button>
				</div>
			)}
		</div>
	);
}
