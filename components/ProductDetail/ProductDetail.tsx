"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

// Dummy data for testing

interface Product {
  brand_name?: string;
  title?: string;
  desc?: string;
  combination?: string;
  image?: string | null;
  pack?: string;
  mrp?: number;
  type?: string;
  category?: string;
}

interface ProductDescriptionProps {
  singleProduct: Product;
  loading?: boolean;
}

export default function ProductDescription({
  singleProduct,
  loading,
}: ProductDescriptionProps) {
  const router = useRouter();

  const {
    brand_name,
    title,
    desc,
    combination,
    image,
    pack,
    mrp,
    type,
    category,
  } = singleProduct || {};

  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const imageUrl = `${baseUrl}${imagePath}/${image}`;

  const handleGetToProductPrevPage = () => {
    router.back();
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 shadow-md rounded-2xl w-full">
      {/* Product Image */}
      <div className="flex justify-center items-center w-full md:w-1/2">
        <div className="w-full h-64 md:h-80 flex justify-center items-center overflow-hidden">
          {image && (
            <Image
              src={imageUrl}
              alt={title || "product-image"}
              width={300}
              height={300}
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-4 w-full md:w-1/2 sanchez p-6">
        {type && (
          <span className="bg-green-600 text-white text-sm font-semibold px-4 py-1 rounded-full capitalize max-w-[120px] text-center">
            {type}
          </span>
        )}

        <h1 className="text-xl md:text-2xl font-bold text-gray-900 red-hat">
          {title || "No Title Available"}
        </h1>

        {brand_name && (
          <p className="text-gray-700 font-medium">
            <span className="font-bold">Brand Name: </span>
            {brand_name}
          </p>
        )}

        {category && (
          <p className="text-gray-700 font-medium">
            <span className="font-bold">Category: </span>
            {category}
          </p>
        )}

        {combination && (
          <p className="text-gray-700 font-medium">
            <span className="font-bold">Combination: </span>
            {combination}
          </p>
        )}

        {desc && (
          <p className="text-gray-700 leading-6">
            <span className="font-bold">Description: </span>
            {desc}
          </p>
        )}

        {pack && (
          <p className="text-gray-700 font-medium">
            <span className="font-bold">Pack: </span>
            {pack}
          </p>
        )}

        <p className="text-red-600 font-bold">
          <span className="font-bold">Price: </span>
          {mrp ? `₹ ${mrp}` : " -- "}
        </p>

        <button
          onClick={handleGetToProductPrevPage}
          className="mt-4 px-6 py-2 bg-[#00A859] text-white font-semibold rounded-md hover:bg-[#008f4a] transition cursor-pointer"
        >
          Back to Products
        </button>
      </div>
    </div>
  );
}
