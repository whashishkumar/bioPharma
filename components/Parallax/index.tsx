// import Image from "next/image";
// import React from "react";

// export default function Parallex() {
//   return (
//     <>
//       <div
//         className="sticky h-[51rem] bg-fixed bg-cover bg-center -z-100 -mt-[5.24rem]"
//         style={{
//           backgroundImage: "url('/images/parallexbanner.webp')",
//         }}
//       />
//       {/* <div className={`absolute inset-0 bg-black/40 z-[-1]`} /> */}
//       <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 flex items-end justify-center">
//         <div className="flex justify-center items-center flex-col gap-5">
//           <div className="flex flex-col items-center justify-end h-[200px]">
//             {/* Capsule outline */}
//             <div className="relative w-[35px] h-[68px] border-2 border-white rounded-full flex !justify-center mb-4">
//               <span className="absolute top-[12px] w-[6px] h-[6px] bg-white rounded-full animate-scroll-dot" />
//               <span className="absolute top-[12px] w-[6px] h-[6px] bg-white rounded-full animate-scroll-dot" />
//             </div>
//             {/* Double chevron arrows */}
//             <div className="flex flex-col items-center gap-[2px]">
//               <span className="block w-[14px] h-[14px] border-b-[3px] border-r-[3px] border-white rotate-45 opacity-60 animate-arrow" />
//               <span className="block w-[14px] h-[14px] border-b-[3px] border-r-[3px] border-white rotate-45 opacity-30 animate-arrow delay-[0.3s]" />
//             </div>
//           </div>
//           <h1 className="text-[2rem] md:text-[2rem] lg:text-[6.25rem] font-extrabold text-center w-auto m-0 whitespace-nowrap uppercase text-white">
//             Quality that cares
//           </h1>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";

export default function Parallex() {
  return (
    <div className="relative -mt-[5.24rem]">
      <div
        className="sticky top-0 h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[51rem] bg-scroll lg:bg-fixed bg-cover bg-center bg-no-repeat -z-10 overflow-hidden"
        style={{
          backgroundImage: "url('/images/parallexbanner.webp')",
        }}
      />
      <div className="absolute bottom-[0%] md:bottom-[0%] lg:-bottom-[4%] left-1/2 -translate-x-1/2 w-full flex items-end justify-center px-4 z-10">
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 text-center max-w-full">
          <div className="flex flex-col items-center justify-end h-[80px] sm:h-[100px] md:h-[120px] lg:h-[200px]">
            <div className="relative w-[28px] h-[55px] sm:w-[30px] sm:h-[60px] md:w-[32px] md:h-[65px] lg:w-[35px] lg:h-[68px] border-2 border-white rounded-full flex justify-center mb-3 md:mb-4">
              <span className="absolute top-[12px] w-[5px] h-[5px] md:w-[6px] md:h-[6px] bg-white rounded-full animate-scroll-dot" />
            </div>
            <div className="flex flex-col items-center gap-[2px] md:gap-[3px]">
              <span className="block w-[12px] h-[12px] md:w-[14px] md:h-[14px] border-b-[2px] md:border-b-[3px] border-r-[2px] md:border-r-[3px] border-white rotate-45 opacity-70 animate-arrow" />
              <span className="block w-[12px] h-[12px] md:w-[14px] md:h-[14px] border-b-[2px] md:border-b-[3px] border-r-[2px] md:border-r-[3px] border-white rotate-45 opacity-40 animate-arrow delay-[0.3s]" />
            </div>
          </div>

          {/* Title text */}
          <h1 className="red-hat text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[6.25rem] xl:text-[7rem] font-black uppercase text-white leading-tight px-2 break-words sm:whitespace-nowrap">
            Quality that cares
          </h1>
        </div>
      </div>
    </div>
  );
}
