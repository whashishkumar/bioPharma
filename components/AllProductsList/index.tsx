"use client";
import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import ProductListing from "./ProductListing";
import { useAllProductsPageContext } from "@/context/AllProductsContext";
import Pagination from "@/ui/Pagination";

export default function AllProductsList() {
  const {
    loading,
    categoryList,
    fetchAllCategoryList,
    productTypeList,
    fetchAllProductTypes,
    allProductsList,
    fetchAllProducts,
  } = useAllProductsPageContext();

  useEffect(() => {
    fetchAllCategoryList();
    fetchAllProductTypes();
    fetchAllProducts();
  }, []);

  const { data }: any = categoryList;
  const { data: productsTypes }: any = productTypeList;

  const { current_page, last_page, products } = allProductsList;

  useEffect(() => {
    fetchAllCategoryList();
    fetchAllProductTypes();
  }, []);

  return (
    <div className="hero-sub-container">
      <div className="sub-container">
        <div className="grid grid-cols-1 md:grid-cols-[20%_75%] gap-5 md:gap-[5%] py-16">
          <div className="w-full md:w-auto md:sticky md:top-8 self-start">
            <Sidebar categories={data} />
          </div>
          <div className="w-full">
            <ProductListing
              filteredProducts={products}
              productstTypes={productsTypes}
            />
            <Pagination
              currentPage={current_page}
              totalPages={last_page}
              onPageChange={function (page: number): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
