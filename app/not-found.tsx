"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center  px-5 overflow-hidden">
      <div className="absolute bottom-[-40px] left-[-60px] w-[220px] h-[220px] bg-product-category rounded-full"></div>
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-product-category rounded-full"></div>
      <h1 className="text-[8rem] font-bold text-gray-900 mb-3 font-red-hat-display z-10">
        404
      </h1>
      <p className="text-xl font-semibold text-gray-800 mb-2 font-sanchez z-10">
        Looks like this page doesn’t exist!
      </p>
      <p className="text-base text-gray-700 mb-6 font-sanchez z-10">
        Go back to home and continue exploring.
      </p>

      <Link href="/" className="inline-block px-7 py-3  text-lg font-medium ">
        Back to Home
      </Link>
    </div>
  );
}
