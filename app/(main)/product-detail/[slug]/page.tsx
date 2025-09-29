import ProductDetail from "@/components/ProductDetail";
import React from "react";

export default async function page({ params }: any) {
  const { slug } = await params;

  console.log(params, "params");

  return (
    <div>
      <ProductDetail slug={slug} />
    </div>
  );
}
