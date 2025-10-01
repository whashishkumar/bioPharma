"use client";
import api from "@/lib/axious";
import { createContext, useContext, useState, ReactNode } from "react";

interface AboutUsPageContextType {
  sectionOne: any[];
  ceoSectionData: any[];
  whyWeUniqueData: any[];
  benifitsWithUsData: any[];
  loading: boolean;
  aboutUsProducts: any[];
  fetchAboutSectionOne: () => Promise<void>;
  fetchAboutSectionCeo: () => Promise<void>;
  fetchAboutSectionWhyWeUnique: () => Promise<void>;
  fetchBenifitsWithUsData: () => Promise<void>;
  fetchAboutUsProductsList: () => Promise<void>;
}

const AboutUsPageContext = createContext<AboutUsPageContextType | undefined>(
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
  const [aboutUsProducts, setAboutUsProducts] = useState<any[]>([]);

  const fetchAboutSectionOne = async () => {
    if (sectionOne.length > 0) return; // already fetched
    setLoading(true);
    try {
      const response = await api.get("/about-page/second-section");
      setSectionOne(response.data || []);
    } finally {
      setLoading(false);
    }
  };

  const fetchAboutSectionCeo = async () => {
    if (ceoSectionData.length > 0) return;
    setLoading(true);
    try {
      const response = await api.get("/about-page/third-section");
      setCeoSectionData(response.data || []);
    } finally {
      setLoading(false);
    }
  };

  const fetchAboutSectionWhyWeUnique = async () => {
    if (whyWeUniqueData.length > 0) return;
    setLoading(true);
    try {
      const response = await api.get("/about-page/fourth-section");
      setWhyWeUniqueData(response.data || []);
    } finally {
      setLoading(false);
    }
  };

  const fetchBenifitsWithUsData = async () => {
    if (benifitsWithUsData.length > 0) return;
    setLoading(true);
    try {
      const response = await api.get("/about-page/fifth-section");
      setBenifitsWithUsData(response.data || []);
    } finally {
      setLoading(false);
    }
  };

  const fetchAboutUsProductsList = async () => {
    if (benifitsWithUsData.length > 0) return;
    setLoading(true);
    try {
      const response = await api.get("/about-page/our-products");
      setAboutUsProducts(response.data || []);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AboutUsPageContext.Provider
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
        aboutUsProducts,
        fetchAboutUsProductsList,
      }}
    >
      {children}
    </AboutUsPageContext.Provider>
  );
}

export const useAboutUsPageContext = () => {
  const context = useContext(AboutUsPageContext);
  if (!context) {
    throw new Error(
      "useAboutUsPageContext must be used within AboutUsPageProvider"
    );
  }
  return context;
};
