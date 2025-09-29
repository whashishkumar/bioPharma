"use client";
import React, { useEffect } from "react";
import ProductDescription from "./ProductDetail";
import EnquiryForm from "./EnquiryForm";
import { useAllProductsPageContext } from "@/context/AllProductsContext";

export default function ProductDetail({ slug }: any) {
  const { fetchSingleProductDetail, singleProductDetail } =
    useAllProductsPageContext();
  const { product } = singleProductDetail || {};
  const { title } = product || {};

  useEffect(() => {
    fetchSingleProductDetail(slug);
  }, []);

  return (
    <div className="sub-container">
      <div className="grid grid-cols-1  lg:grid-cols-2 py-12 gap-10">
        <div className="flex justify-center items-center">
          <ProductDescription singleProduct={product} />
        </div>
        <EnquiryForm productName={title} />
      </div>
    </div>
  );
}
