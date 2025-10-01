import AllProductsList from "@/components/AllProductsList";
import ExplorePharmaProducts from "@/components/ExploreProducts";
import FaqSection from "@/components/Faq";
import React from "react";

export default async function page({ params }: any) {
  const { category } = await params;

  return (
    <div>
      <AllProductsList category={category} />
      <ExplorePharmaProducts />
      <FaqSection />
    </div>
  );
}
