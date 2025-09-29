"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ProductListing from "./ProductListing";
import { useAllProductsPageContext } from "@/context/AllProductsContext";
import Pagination from "@/ui/Pagination";
import { useRouter } from "next/navigation";

export default function AllProductsList({ category }: any) {
  const {
    loading,
    categoryList,
    fetchAllCategoryList,
    productTypeList,
    fetchAllProductTypes,
    allProductsList,
    fetchOurProductList,
  } = useAllProductsPageContext();

  const router = useRouter();

  const { data } = categoryList || {};
  const { data: productsTypes = [] } = productTypeList || {};
  const {
    current_page: currentPageFromApi = 1,
    last_page: totalPages = 1,
    products = [],
  } = allProductsList || {};

  console.log(data.data, "categoryList");

  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    category || null
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, activeProduct]);

  useEffect(() => {
    fetchOurProductList({
      mainCategory: selectedCategory || undefined,
      subCategory: activeProduct || undefined,
      currentPage,
    });
  }, [selectedCategory, activeProduct, currentPage]);

  useEffect(() => {
    fetchAllCategoryList();
    fetchAllProductTypes();
  }, []);

  const handleProductType = async (type: string): Promise<void> => {
    setActiveProduct(type);
    if (selectedCategory) {
      router.push(`/our-products/${selectedCategory}?type=${type}`);
    } else {
      router.push(`/our-products?type=${type}`);
    }
  };

  const handleSelectCategory = async (category: string): Promise<void> => {
    setSelectedCategory(category);
    router.push(`/our-products/${category}`);
  };

  const handlePageChange = async (page: number): Promise<void> => {
    setCurrentPage(page);
  };

  const handleGetProductDetail = (slug: any) => {
    router.push(`/product-detail/${slug}`);
  };

  return (
    <div>
      <div className="sub-container">
        <div className="grid grid-cols-1 md:grid-cols-[20%_75%] gap-5 md:gap-[5%] py-16">
          <div className="w-full md:w-auto md:sticky md:top-8 self-start ">
            <Sidebar
              categories={data?.data}
              handleSelectCategory={handleSelectCategory}
              selectedCategory={selectedCategory || ""}
            />
          </div>

          <div className="w-full">
            <ProductListing
              filteredProducts={products}
              productstTypes={productsTypes}
              handleProductType={handleProductType}
              activeProduct={activeProduct}
              handleGetProductDetail={handleGetProductDetail}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
