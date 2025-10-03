"use client";
import api from "@/lib/axious";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

interface AboutUsPageContextType {
  sectionOne: any[];
  ceoSectionData: any[];
  whyWeUniqueData: any[];
  benifitsWithUsData: any[];
  aboutUsProducts: any[];
  loading: boolean;
  fetchAboutSectionOne: () => Promise<void>;
  fetchAboutSectionCeo: () => Promise<void>;
  fetchAboutSectionWhyWeUnique: () => Promise<void>;
  fetchBenifitsWithUsData: () => Promise<void>;
  fetchAboutUsProductsList: () => Promise<void>;
}

const AboutUsPageContext = createContext<AboutUsPageContextType | undefined>(
  undefined
);

export function AboutUsPageProvider({ children }: { children: ReactNode }) {
  const [sectionOne, setSectionOne] = useState<any[]>([]);
  const [ceoSectionData, setCeoSectionData] = useState<any[]>([]);
  const [whyWeUniqueData, setWhyWeUniqueData] = useState<any[]>([]);
  const [benifitsWithUsData, setBenifitsWithUsData] = useState<any[]>([]);
  const [aboutUsProducts, setAboutUsProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const withLoading = useCallback(async (fetchFn: () => Promise<void>) => {
    setLoading(true);
    try {
      await fetchFn();
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchAboutSectionOne = () =>
    withLoading(async () => {
      if (sectionOne.length > 0) return;
      const response = await api.get("/about-page/second-section");
      setSectionOne(response.data || []);
    });

  const fetchAboutSectionCeo = () =>
    withLoading(async () => {
      if (ceoSectionData.length > 0) return;
      const response = await api.get("/about-page/third-section");
      setCeoSectionData(response.data || []);
    });

  const fetchAboutSectionWhyWeUnique = () =>
    withLoading(async () => {
      if (whyWeUniqueData.length > 0) return;
      const response = await api.get("/about-page/fourth-section");
      setWhyWeUniqueData(response.data || []);
    });

  const fetchBenifitsWithUsData = () =>
    withLoading(async () => {
      if (benifitsWithUsData.length > 0) return;
      const response = await api.get("/about-page/fifth-section");
      setBenifitsWithUsData(response.data || []);
    });

  const fetchAboutUsProductsList = () =>
    withLoading(async () => {
      if (aboutUsProducts.length > 0) return;
      const response = await api.get("/about-page/our-products");
      setAboutUsProducts(response.data || []);
    });

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
