"use client";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import ScrollToTop from "@/components/ScrollToTop";
import { useAboutUsPageContext } from "@/context/AboutUsPageContext";
import { useAuth } from "@/context/AuthContext";
import { useOurServicesPageContext } from "@/context/OurServicesPageContext";
import Loader from "@/ui/Loader";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { ReactNode } from "react";

const heroBannerData = {
  backgroundImage: "/images/header-image.jpg",
  tag: "About Us",
  heading: "Commitment to quality healthcare, its diverse product range",
  subHeading: "Delivering Care with Eye Dose.",
};

export default function layout({ children }: { children: ReactNode }) {
  const { loading } = useAuth();
  const { aboutUsBannerInfo, fetchAboutUsBanner } = useAboutUsPageContext();
  const { ourServicesBanner, fetchOurServicesBanner } =
    useOurServicesPageContext();
  const pathname = usePathname();

  useEffect(() => {
    fetchAboutUsBanner();
    fetchOurServicesBanner();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative">
      <HeroBanner
        heroData={ourServicesBanner}
        innerBanner={true}
        innerBannerHeight={"h-[350]"}
      />
      <main>{children}</main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
