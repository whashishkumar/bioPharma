"use client";
import api from "@/lib/axious";
import { createContext, useContext, useState, ReactNode } from "react";

interface AboutUsPageContextType {
  sectionOne: any[];
  ceoSectionData: any[];
  whyWeUniqueData: any[];
  benifitsWithUsData: any[];
  loading: boolean;
  fetchAboutSectionOne: () => Promise<void>;
  fetchAboutSectionCeo: () => Promise<void>;
  fetchAboutSectionWhyWeUnique: () => Promise<void>;
  fetchBenifitsWithUsData: () => Promise<void>;
}

const AboutUsPageContex = createContext<AboutUsPageContextType | undefined>(
  undefined
);

interface AboutUsProviderProps {
  children: ReactNode;
}

export function AboutUsPageProvider({ children }: AboutUsProviderProps) {
  const [sectionOne, setSectionOne] = useState<any[]>([]);
  const [ceoSectionData, setCeoSectionData] = useState<any[]>([]);
  const [whyWeUniqueData, setWhyWeUniqueData] = useState<any[]>([]);
  const [benifitsWithUsData, setBenifitsWithUsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAboutSectionOne = async () => {
    setLoading(true);
    try {
      const response = await api.get("/about-page/second-section");
      setSectionOne(response.data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const fetchAboutSectionCeo = async () => {
    setLoading(true);
    try {
      const response = await api.get("about-page/third-section");
      setCeoSectionData(response.data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const fetchAboutSectionWhyWeUnique = async () => {
    setLoading(true);
    try {
      const response = await api.get("/about-page/fourth-section");
      setWhyWeUniqueData(response.data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const fetchBenifitsWithUsData = async () => {
    setLoading(true);
    try {
      const response = await api.get("/about-page/fifth-section");
      setBenifitsWithUsData(response.data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <AboutUsPageContex.Provider
      value={{
        loading,
        sectionOne,
        ceoSectionData,
        whyWeUniqueData,
        benifitsWithUsData,
        fetchAboutSectionOne,
        fetchAboutSectionCeo,
        fetchAboutSectionWhyWeUnique,
        fetchBenifitsWithUsData,
      }}
    >
      {children}
    </AboutUsPageContex.Provider>
  );
}

export const useAboutUsPageContext = () => {
  const context = useContext(AboutUsPageContex);
  if (!context) {
    throw new Error(
      "aboutUsPageContext must be used within LandingPageProvider"
    );
  }
  return context;
};
