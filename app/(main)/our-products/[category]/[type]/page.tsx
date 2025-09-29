import AllProductsList from "@/components/AllProductsList";
import React from "react";

export default async function page({ params }: any) {
  return (
    <div>
      <AllProductsList />
    </div>
  );
}
