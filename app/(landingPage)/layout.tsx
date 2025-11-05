"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Parallex from "@/components/Parallax";
import ScrollToTop from "@/components/ScrollToTop";
import { useLandingPageContext } from "@/context/LandingPageContext";
import Loader from "@/ui/Loader";

import React, { useEffect } from "react";
import { ReactNode } from "react";

const heroBannerData = {
  backgroundImage: "/images/header-image.jpg",
  tag: "Your partner in Health",
  heading: "Commitment to quality healthcare, its diverse product range",
  subHeading: "Delivering Care with Eye Dose.",
  buttons: [
    { id: 1, label: "Learn More", variant: "primary" },
    { id: 2, label: "Contact Us", variant: "secondary" },
  ],
  stats: {
    years: "25+",
    text: "Years Of Experience",
    clients: "5K Satisfied Clients",
  },
  avatars: [
    { id: 1, src: "/icons/Figure.png", alt: "Avatar 1" },
    { id: 2, src: "/icons/Figure.png", alt: "Avatar 2" },
    { id: 3, src: "/icons/Figure.png", alt: "Avatar 3" },
  ],
  sideImage: {
    src: "/images/Link.png",
    alt: "play-icon",
    height: 120,
    width: 120,
  },
};

export default function layout({ children }: { children: ReactNode }) {
  const { bannerLoading, heroSectionInfo, fetchHeroSection } =
    useLandingPageContext();

  useEffect(() => {
    fetchHeroSection();
  }, []);

  if (bannerLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  return (
    <>
      <Header />
      <Parallex />
      {/* <HeroBanner heroData={heroSectionInfo} /> */}
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
}
