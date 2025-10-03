import ProductCard from "@/components/ProductCard";
import SwipeSlider from "@/ui/SwipeSlider";
import React from "react";

interface ProductType {
  id: string | number;
  slug: string;
  title: string;
  filteredProducts: any;
}

interface ProductListingProps {
  productstTypes: ProductType[];
  filteredProducts: any;
  handleProductType: (type: string) => Promise<void>;
  activeProduct: any;
  handleGetProductDetail: any;
}

export default function ProductListing({
  productstTypes,
  filteredProducts,
  handleProductType,
  activeProduct,
  handleGetProductDetail,
}: ProductListingProps) {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50 bg-white py-4">
        <div className="flex flex-wrap gap-3 ">
          <SwipeSlider
            slidesPerView={6}
            bottomSwipeBtn={false}
            swipebtn={true}
            spaceBetween={10}
            autoPlay={false}
          >
            {productstTypes?.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductType(product?.slug)}
                className={`flex flex-col items-center px-5 py-2 border rounded-lg cursor-pointer hover:bg-[#00A859] hover:text-white hover:border-[#00A859]
            ${
              activeProduct === product.slug
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
          </SwipeSlider>
        </div>
      </div>
      <div className="pt-6 overflow-y-auto  scrollbar-hide">
        <ProductCard
          products={filteredProducts}
          handleGetProductDetail={handleGetProductDetail}
        />
      </div>
    </div>
  );
}
