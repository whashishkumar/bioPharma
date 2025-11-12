"use client";
import { useLandingPageContext } from "@/context/LandingPageContext";
import PageTitle from "@/ui/PageTitle";
import React, { useEffect, useState, useRef } from "react";

const statsConfig = {
  heading_tag: "Drivern by Quality Driven by trust",
  count: [
    { number: 200, suffix: "+", name: "Present in", label: "state" },
    { number: 70, suffix: "+", name: "Over", label: "clients" },
    { number: 11000, suffix: "+", name: "Close to", label: "Brands " },
    {
      number: 350,
      suffix: "+",
      name: "More then",
      label: "DGCI Approved Products",
    },
  ],
};

export default function ByQuality() {
  const { fetchStatics, statistics } = useLandingPageContext();
  const { custom_data, section_name }: any = statistics || {};
  const [counts, setCounts] = useState(custom_data?.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    fetchStatics();
  }, []);

  const animateNumbers = () => {
    const duration = 2000; // 2 seconds for smoother animation
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);

    custom_data?.forEach((stat: any, index: any) => {
      let frame = 0;
      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        // Easing function for smooth animation (easeOutQuart)
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.round(easeProgress * stat.number);

        setCounts((prev: any) => {
          const updated = [...prev];
          updated[index] = currentCount;
          return updated;
        });

        if (frame === totalFrames) {
          clearInterval(interval);
          // Ensure final value is exact
          setCounts((prev: any) => {
            const updated = [...prev];
            updated[index] = stat.number;
            return updated;
          });
        }
      }, frameRate);
    });
  };

  return (
    // <div className="bg-white">
    //   <div className="py-16">
    //     <div className="flex justify-center ">
    //       <PageTitle
    //         heading={section_name}
    //         headingClass="text-[2.875rem]  font-normal text-[#45566a] leading-[3.438rem] mb-9"
    //       />
    //     </div>
    //     <section
    //       ref={sectionRef}
    //       className="relative bg-cover bg-center text-[#45566a]  md:px-10"
    //     >
    //       <div className="hero-sub-container">
    //         <div className="relative z-10 mx-auto flex flex-wrap justify-center gap-y-10 gap-x-20 text-center poppins">
    //           {custom_data?.map((stat: any, i: any) => (
    //             <div key={i} className="w-[45%] sm:w-[40%] md:w-[20%]">
    //               <p className="text-base md:text-lg font-medium mt-2">
    //                 {stat.name}
    //               </p>
    //               <h2 className="text-[2rem] md:text-[4rem] font-extrabold leading-none py-2 text-[#01a859]">
    //                 {counts[i].toLocaleString()}
    //                 {stat.suffix}
    //               </h2>
    //               <p className="text-base md:text-lg font-medium mt-2">
    //                 {stat.label}
    //               </p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
    <div className="bg-white">
      <div className="py-10 md:py-16">
        <div className="flex justify-center px-4 sm:px-6">
          <PageTitle
            heading={section_name}
            headingClass="text-2xl sm:text-3xl md:text-[2.875rem] font-normal text-[#45566a] leading-tight md:leading-[3.438rem] mb-6 md:mb-9 text-center"
          />
        </div>
        <section
          ref={sectionRef}
          className="relative bg-cover bg-center text-[#45566a] px-4 sm:px-6 md:px-10"
        >
          <div className="hero-sub-container flex justify-center">
            <div className="relative z-10 w-full grid grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-8 md:gap-y-10 gap-x-6 sm:gap-x-10 md:gap-x-20 text-center poppins">
              {custom_data?.map((stat: any, i: any) => (
                <div key={i} className=" flex flex-col items-center">
                  <p className="text-sm sm:text-base md:text-lg font-medium mt-2">
                    {stat.name}
                  </p>
                  <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[4rem] font-extrabold leading-none py-2 text-[#01a859]">
                    {counts[i].toLocaleString()}
                    {stat.suffix}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg font-medium mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
