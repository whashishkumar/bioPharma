"use client";
import api from "@/lib/axious";
import { createContext, ReactNode, useContext, useState, useRef } from "react";

interface OurServicesPageContextType {
  ourServicesData: any[];
  loading: boolean;
  ourServicesBanner: any[];
  fetchOurServiceHeroPageData: () => Promise<void>;
  getServicesEnquiry: (formData: any) => Promise<any>;
  fetchOurServicesBanner: () => Promise<void>;
}

const OurServicesContext = createContext<
  OurServicesPageContextType | undefined
>(undefined);

interface OurServicesContextProps {
  children: ReactNode;
}

export function OurServicesProvider({ children }: OurServicesContextProps) {
  const [loading, setLoading] = useState(false);
  const [ourServicesData, setOurServicesData] = useState<any[]>([]);
  const [ourServicesBanner, setOurServicesBanner] = useState<any[]>([]);
  // track if data is already fetched
  const fetched = useRef(false);

  const withLoading = async (fn: () => Promise<void>) => {
    setLoading(true);
    try {
      await fn();
    } finally {
      setLoading(false);
    }
  };

  const fetchOurServiceHeroPageData = async () => {
    if (fetched.current) return; // already fetched
    await withLoading(async () => {
      const response = await api.get("/service-page/second-section");
      setOurServicesData(response.data || []);
      fetched.current = true;
    });
  };

  const getServicesEnquiry = async (formData: any) => {
    setLoading(true);
    try {
      const response = await api.post("/enquiry-form", formData);
      return response.data;
    } finally {
      setLoading(false);
    }
  };
  const fetchOurServicesBanner = async () => {
    if (ourServicesBanner.length > 0) return;
    setLoading(true);
    try {
      const response = await api.get("/about-page/banner");
      setOurServicesBanner(response.data || []);
    } finally {
      setLoading(false);
    }
  };

  return (
    <OurServicesContext.Provider
      value={{
        ourServicesData,
        fetchOurServiceHeroPageData,
        loading,
        getServicesEnquiry,
        ourServicesBanner,
        fetchOurServicesBanner,
      }}
    >
      {children}
    </OurServicesContext.Provider>
  );
}

export const useOurServicesPageContext = () => {
  const context = useContext(OurServicesContext);
  if (!context) {
    throw new Error(
      "useOurServicesPageContext must be used within OurServicesProvider"
    );
  }
  return context;
};
