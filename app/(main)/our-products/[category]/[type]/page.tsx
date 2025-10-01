import AllProductsList from "@/components/AllProductsList";
import ExplorePharmaProducts from "@/components/ExploreProducts";
import FaqSection from "@/components/Faq";
import React from "react";

export default async function page({ params }: any) {
  return (
    <div>
      <AllProductsList />
      <ExplorePharmaProducts />
      <FaqSection />
    </div>
  );
}
