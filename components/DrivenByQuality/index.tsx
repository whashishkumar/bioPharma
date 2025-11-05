"use client";
import React, { useEffect, useState, useRef } from "react";

const statsConfig = [
  { number: 350, suffix: "+", label: "Brands in India" },
  { number: 200, suffix: "+", label: "Patents" },
  { number: 70, suffix: "+", label: "Countries" },
  { number: 11000, suffix: "+", label: "Employees" },
];

export default function ByQuality() {
  const [counts, setCounts] = useState(statsConfig.map(() => 0));
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

  const animateNumbers = () => {
    const duration = 2000; // 2 seconds for smoother animation
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);

    statsConfig.forEach((stat, index) => {
      let frame = 0;
      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        // Easing function for smooth animation (easeOutQuart)
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.round(easeProgress * stat.number);

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = currentCount;
          return updated;
        });

        if (frame === totalFrames) {
          clearInterval(interval);
          // Ensure final value is exact
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = stat.number;
            return updated;
          });
        }
      }, frameRate);
    });
  };

  return (
    <div className="bg-white">
      <section
        ref={sectionRef}
        className="relative bg-cover bg-center text-[#45566a] py-20 px-5 md:px-10"
      >
        <div className="hero-sub-container">
          <div className="relative z-10 mx-auto flex flex-wrap justify-center gap-y-10 gap-x-20 text-center poppins">
            {statsConfig.map((stat, i) => (
              <div key={i} className="w-[45%] sm:w-[40%] md:w-[20%]">
                <h2 className="text-[2.5rem] md:text-[4rem] font-extrabold leading-none">
                  {counts[i].toLocaleString()}
                  {stat.suffix}
                </h2>
                <p className="text-base md:text-lg font-medium mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
