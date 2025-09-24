"use client";
import React from "react";
import Image from "next/image";

interface MarqueeItem {
  text: string;
  imageSrc: string;
  imageAlt?: string;
}

interface MarqueeProps {
  items: MarqueeItem[];
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ items, speed = 50 }) => {
  return (
    <div className="overflow-hidden relative w-full bg-gray-100 h-[74px] flex items-center">
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ animationDuration: `${speed * items.length}s` }}
      >
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mx-8 text-gray-700 font-medium primary-font"
          >
            <Image
              src={item.imageSrc}
              alt={item.imageAlt || item.text}
              width={32}
              height={32}
              className="object-contain"
            />
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: inline-flex;
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
