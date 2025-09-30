"use client";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import ScrollToTop from "@/components/ScrollToTop";
import { useAuth } from "@/context/AuthContext";
import React from "react";
import { ReactNode } from "react";

const heroBannerData = {
  backgroundImage: "/images/header-image.jpg",
  tag: "About Us",
  heading: "Commitment to quality healthcare, its diverse product range",
  subHeading: "Delivering Care with Eye Dose.",
};

export default function layout({ children }: { children: ReactNode }) {
  const { loading } = useAuth();

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div className="relative">
      <HeroBanner
        heroData={heroBannerData}
        innerBanner={true}
        innerBannerHeight={"h-[350]"}
      />
      <main>{children}</main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
