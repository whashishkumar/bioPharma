"use client";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import ScrollToTop from "@/components/ScrollToTop";
import { useAllProductsPageContext } from "@/context/AllProductsContext";
import { useAuth } from "@/context/AuthContext";
import Loader from "@/ui/Loader";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const { loading } = useAuth();
  const { bannerInfo, fetchBannerInfo } = useAllProductsPageContext();

  const pathname = usePathname();
  const firstPath = pathname === "/" ? "/" : `/${pathname.split("/")[1]}`;
  const firstSegment = pathname === "/" ? "" : pathname.split("/")[1];

  const defaultHeroData = {
    heading: "About Us",
    image: "/images/bannerH.jpg",
    section_name: firstSegment,
  };

  const heroInfo =
    bannerInfo &&
    bannerInfo[pathname] &&
    Object.keys(bannerInfo[firstPath]).length > 0
      ? bannerInfo[pathname]
      : defaultHeroData;

  useEffect(() => {
    fetchBannerInfo();
  }, [fetchBannerInfo]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative">
      <HeroBanner
        heroData={heroInfo}
        innerBanner={true}
        innerBannerHeight="h-[320px]"
      />
      <main>{children}</main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
