"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBrain,
  FaStethoscope,
  FaProjectDiagram,
  FaExpandArrowsAlt,
} from "react-icons/fa";
import Image from "next/image";

// const features = [
//   {
//     icon: <FaBrain className="w-8 h-8 text-[#01a859]/80" />,
//     title: "Our Mission",
//     description:
//       "To deliver advanced pharmaceutical solutions with a focus on global healthcare improvement.",
//   },
//   {
//     icon: <FaStethoscope className="w-8 h-8 text-[#01a859]/80" />,
//     title: "Our Core Value",
//     description:
//       "Integrity, Innovation, Quality, and Commitment to Healthcare Excellence",
//   },
//   {
//     icon: <FaProjectDiagram className="w-8 h-8 text-[#01a859]/80" />,
//     title: "Interoperable",
//     description:
//       "Seamless integration with existing healthcare systems and platforms, ensuring smooth data exchange and collaboration across the ecosystem.",
//   },
//   {
//     icon: <FaExpandArrowsAlt className="w-8 h-8 text-[#01a859]/80" />,
//     title: "Scalable",
//     description:
//       "Flexible solutions designed to grow with your needs, from startups to enterprise-level pharmaceutical organizations worldwide.",
//   },
// ];

export default function Mission({ features }: any) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex  flex-wrap justify-center items-center   gap-10 lg:py-12 bg-white">
      {features?.map((item: any, i: any) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center space-y-3 relative"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative w-24 h-24 flex items-center justify-center cursor-pointer">
            {/* Outer rotating ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-[#01a859]/70 border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
            />
            {/* Inner counter-rotating ring */}
            <motion.div
              className="absolute inset-1.5 rounded-full border-2 border-[#01a859]/70 border-b-transparent"
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "linear",
              }}
            />
            {/* Icon */}
            <div className="z-10">
              <Image src={item.icon} alt="icon" height={40} width={40} />
            </div>
          </div>
          <span className="text-[#01a859] font-semibold text-sm">
            {item.title}
          </span>

          {/* Hover Popup Card */}
          <AnimatePresence>
            {hoveredIndex === i && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full mt-4 z-50 w-64 bg-white rounded-lg shadow-2xl border border-[#01a859]/30 p-4"
              >
                {/* Arrow pointer */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-[#01a859]/30 rotate-45"></div>

                {/* Card content */}
                <div className="relative z-10 bg-white">
                  <h3 className="text-[#01a859] font-bold text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
