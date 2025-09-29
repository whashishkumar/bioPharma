"use client";
import api from "@/lib/axious";
import { createContext, useContext, useState, ReactNode } from "react";

interface LandingPageContextType {
  loading: boolean;
  navigationList: any[];
  heroSectionInfo: any[];
  aboutUs: any[];
  ourCertification: any[];
  fetchAboutSection: () => Promise<void>;
  fetchNaviagtionList: () => Promise<void>;
  fetchHeroSection: () => Promise<void>;
  fetchOurCertifacation: () => Promise<void>;
}

const LandingPageContext = createContext<LandingPageContextType | undefined>(
  undefined
);

interface LandingPageProviderProps {
  children: ReactNode;
}

export function LandingPageProvider({ children }: LandingPageProviderProps) {
  const [loading, setLoading] = useState(false);
  const [navigationList, setNavigationList] = useState<any[]>([]);
  const [heroSectionInfo, setHeroSectionInfo] = useState<any>([]);
  const [aboutUs, setAboutUs] = useState<any>([]);
  const [ourCertification, setOurCertification] = useState<any>([]);

  const fetchNaviagtionList = async () => {
    setLoading(true);
    try {
      const res = await api.get("/menus");
      setNavigationList(res.data);
    } catch (error) {
      console.error("Failed to fetch about section:", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchHeroSection = async () => {
    setLoading(true);
    try {
      const res = await api.get("/hero-section/homepage-hero-section");
      setHeroSectionInfo(res.data);
    } catch (error) {
      console.error("Failed to fetch about section:", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchAboutSection = async () => {
    setLoading(true);
    try {
      const res = await api.get("/about-section/homepage-about-section");
      setAboutUs(res.data);
    } catch (error) {
      console.error("Failed to fetch about section:", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchOurCertifacation = async () => {
    setLoading(true);
    try {
      const res = await api.get("/our-certifications");
      setOurCertification(res.data);
    } catch (error) {
      console.error("Failed to fetch about section:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LandingPageContext.Provider
      value={{
        aboutUs,
        loading,
        fetchAboutSection,
        navigationList,
        fetchNaviagtionList,
        heroSectionInfo,
        fetchHeroSection,
        ourCertification,
        fetchOurCertifacation,
      }}
    >
      {children}
    </LandingPageContext.Provider>
  );
}

export const useLandingPageContext = () => {
  const context = useContext(LandingPageContext);
  if (!context) {
    throw new Error(
      "useLandingPageContext must be used within LandingPageProvider"
    );
  }
  return context;
};
