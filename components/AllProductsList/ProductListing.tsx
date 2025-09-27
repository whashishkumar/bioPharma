import ProductCard from "@/components/ProductCard";
import SwipeSlider from "@/ui/SwipeSlider";
import React from "react";
import Sidebar from "./Sidebar";

import { SwiperEvents } from "swiper/types";
import Pagination from "@/ui/Pagination";

const products = [
  {
    id: 1,
    name: "Tazobox-4.5",
    image: "/images/p1.png",
    alt: "Tazobactam Injection",
  },
  {
    id: 2,
    name: "Amoxicillin-500",
    image: "/images/p2.png",
    alt: "Amoxicillin Capsule",
  },
  {
    id: 3,
    name: "Cefixime-200",
    image: "/images/p3.png",
    alt: "Cefixime Tablet",
  },
  {
    id: 4,
    name: "Metformin-500",
    image: "/images/p4.png",
    alt: "Metformin Tablet",
  },
  {
    id: 5,
    name: "Cefixime-200",
    image: "/images/p3.png",
    alt: "Cefixime Tablet",
  },
  {
    id: 6,
    name: "Metformin-500",
    image: "/images/p4.png",
    alt: "Metformin Tablet",
  },
];
interface ProductType {
  id: string | number;
  slug: string;
  title: string;
  filteredProducts: any;
}

interface ProductListingProps {
  productstTypes: ProductType[];
  filteredProducts: any;
}

export default function ProductListing({
  productstTypes,
  filteredProducts,
}: ProductListingProps) {
  const [activeProduct, setActiveProduct] = React.useState<
    string | number | null
  >(null);

  const handleCategory = (cat: ProductType) => {
    setActiveProduct(cat.id);
  };

  return (
    <div className="relative">
      <div className="sticky top-0 z-50 bg-white py-4">
        <div className="flex flex-wrap gap-3 ">
          {productstTypes?.map((product) => (
            <div
              key={product.id}
              onClick={() => handleCategory(product)}
              className={`flex flex-col items-center px-5 py-2 border rounded-lg cursor-pointer hover:bg-[#00A859] hover:text-white hover:border-[#00A859]
            ${
              activeProduct === product.id
                ? "bg-[#00A859] text-white border-[#00A859]"
                : "bg-white text-gray-800 border-gray-300"
            }
          `}
            >
              <p className="text-base font-bold leading-[32px] red-hat capitalize">
                {product.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-6 overflow-y-auto  scrollbar-hide">
        <ProductCard products={filteredProducts} />
      </div>
    </div>
  );
}
