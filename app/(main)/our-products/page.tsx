import AllProducts from "@/components/AllProducts";
import AllProductsList from "@/components/AllProductsList";
import ExplorePharmaProducts from "@/components/ExploreProducts";
import FaqSection from "@/components/Faq";
import React from "react";
export default function page() {
  return (
    <>
      <AllProductsList />
      <ExplorePharmaProducts />
      <FaqSection />
    </>
  );
}
