"use client";
import React, { useEffect } from "react";
import Button from "@/ui/Button";
import Link from "next/link";
import { useAllProductsPageContext } from "@/context/AllProductsContext";

type ExplorePharmaData = {
  heading: string;
  sub_heading: string;
  button_text?: string;
  button_link?: string;
};

export default function ExplorePharmaProducts() {
  const { fetchCallUsContent, callUsBannerInfo } = useAllProductsPageContext();
  const { heading, sub_heading, button_text, button_link, image } =
    callUsBannerInfo?.data || {};

  useEffect(() => {
    fetchCallUsContent();
  }, []);

  return (
    <div className="relative z-10 h-[550px] bg-[#f9f9f9] ">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="relative flex flex-col justify-center items-center text-center text-gray-900 h-full px-4">
        <p className="text-2xl mt-2 font-normal text-[#172C45] mt-6 text-center red-hat uppercase">
          {heading}
        </p>
        <h2 className="red-hat capitalize text-xl font-normal mb-2 mt-6 text-center">
          {sub_heading}
        </h2>
        {button_text && button_link && (
          <Link href={`tel:${button_link}`}>
            <Button className="mt-10 red-hat">{button_text}</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
