"use client";
import React from "react";
import Image from "next/image";
import Button from "@/ui/Button";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description?: string;
  image?: string;
  type: string;
  pack?: string;
  mrp?: number;
}

interface ProductCardProps {
  products?: Product[];
  className?: string;
  handleGetProductDetail: (type: string) => void;
}

interface CardProps {
  product: Product;
  handleGetProductDetail: () => void;
}

export default function ProductCard({
  products = [],
  className = "",
  handleGetProductDetail,
}: ProductCardProps) {
  const Card = ({ product, handleGetProductDetail }: CardProps) => {
    const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
    const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
    const imageUrl = `${baseUrl}${imagePath}/${product.image}`;

    return (
      <div
        className="bg-white rounded-lg overflow-hidden flex flex-col border border-black/5 hover:shadow-md transition
                flex-1 min-w-[250px] max-w-[320px] "
      >
        {/* Image Section */}
        <div className="w-full h-[150px] flex items-center justify-center">
          {imageUrl && product.image !== null ? (
            <Image
              src={imageUrl}
              alt="product-image"
              height={150}
              width={300}
              className="object-contain h-full w-full"
            />
          ) : (
            <p className="flex justify-center items-center text-sm font-sanchez text-gray-600">
              No Image Available
            </p>
          )}
        </div>

        {/* Content Section */}
        <div className="p-3 flex flex-col gap-1">
          <span className="bg-[#157fd3] max-w-[140px] text-white text-lg font-semibold px-3 py-1 rounded-full capitalize text-center red-hat">
            {product.type}
          </span>

          <h3 className="text-base font-bold text-gray-800 capitalize font-sanchez truncate red-hat">
            {product.title}
          </h3>

          <p className="text-base text-gray-700 capitalize truncate font-sanchez red-hat">
            {product.description ||
              "This is the complete product description. It gives full details about the product, its benefits, usage, and specifications."}
          </p>

          <p className="text-base text-gray-700 capitalize red-hat">
            {product.pack}
          </p>

          <p className="text-lg font-bold text-orange-500 font-sanchez red-hat">
            {product.mrp ? `₹ ${product.mrp}` : "₹"}
          </p>

          <button
            className="flex justify-center red-hat bg-[#157fd3] hover:bg-[#157fd3] py-3 rounded-xl text-white cursor-pointer"
            onClick={handleGetProductDetail}
          >
            Get Details
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`w-full ${className}`}>
      {products?.length > 0 ? (
        <div className="flex flex-wrap gap-10 sm:justify-center  md:justify-start ">
          {products?.map((p: any, id: number) => (
            <Card
              key={id}
              product={p}
              handleGetProductDetail={() => handleGetProductDetail(p?.slug)}
            />
          ))}
        </div>
      ) : (
        <p className="flex justify-center items-center text-gray-600 text-base font-red-hat capitalize">
          No products found
        </p>
      )}
    </div>
  );
}
