"use client";
import { useLandingPageContext } from "@/context/LandingPageContext";
import ExpertiseCard from "@/ui/ExpertiseCard";
import PageTitle from "@/ui/PageTitle";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const cards = [
  {
    id: 1,
    title: "Ortho & Surgery",
    description: "Advanced orthopedic & surgical care",
    bgImage: "/images/s1.png",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 2,
    title: "Cardiology",
    description: "Expert heart care solutions",
    bgImage: "/images/s2.png",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 3,
    title: "Neurology",
    description: "Advanced care for bones and surgeries",
    bgImage: "/images/s3.png",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 11,
    title: "Ortho & Surgery",
    description: "Advanced orthopedic & surgical care",
    bgImage: "/images/s4.png",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 21,
    title: "Cardiology",
    description: "Expert heart care solutions",
    bgImage: "/images/s5.png",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 13,
    title: "Neurology",
    description: "Advanced care for bones and surgeries",
    bgImage: "/images/cat.jpg",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 18,
    title: "Ortho & Surgery",
    description: "Advanced orthopedic & surgical care",
    bgImage: "/images/cat.jpg",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 28,
    title: "Cardiology",
    description: "Expert heart care solutions",
    bgImage: "/images/cat.jpg",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 83,
    title: "Neurology",
    description: "Advanced care for bones and surgeries",
    bgImage: "/images/cat.jpg",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 181,
    title: "Ortho & Surgery",
    description: "Advanced orthopedic & surgical care",
    bgImage: "/images/cat.jpg",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 281,
    title: "Cardiology",
    description: "Expert heart care solutions",
    bgImage: "/images/cat.jpg",
    icon: "/images/categoryIcon.png",
  },
  {
    id: 183,
    title: "Neurology",
    description: "Advanced care for bones and surgeries",
    bgImage: "/images/cat.jpg",
    icon: "/images/categoryIcon.png",
  },
];

export default function ProductCategories() {
  const { productCategories, fetchProductCategories } = useLandingPageContext();
  const { data }: any = productCategories;
  const router = useRouter();

  useEffect(() => {
    fetchProductCategories();
  }, []);

  const handleClickCard = (slug: string) => {
    router.push(`/our-products/${slug}`);
  };

  console.log(productCategories, "productCategories");

  return (
    <div className="hero-sub-container">
      {/* <div className="bg-product-category rounded-[20px]"> */}
      <div className="sub-container">
        <div className="py-16">
          <PageTitle
            tag="Products Categories"
            tagClass="border border-[#00A859] rounded-full px-4 py-2 text-sm capitalize text-[#172C45] leading-[16px] w-auto inline-block"
            heading="Trusted Pharma Categories with Innovation, Quality, and Care"
            headingClass="text-[2.875rem] mt-2 font-normal text-[#172C45] leading-[3.438rem]"
            subHeading="From everyday health concerns to complex therapeutic needs, our product categories are designed to deliver trust and results. Covering General, Cardiac, Diabetic, Gynae, Ortho & more – we ensure complete care under one trusted name."
            subHeadingClass="text-base font-normal mt-2 text-[#45566A] leading-[25px] lg:mt-14"
            wrapperClass="grid lg:grid-cols-2 gap-10"
          />
          <ExpertiseCard expertiesData={productCategories} />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
