"use client";

import api from "@/lib/axious";

import { createContext, ReactNode, useContext, useState } from "react";

interface OurServicesPageContextType {
  ourServicesData: any[];
  loading: boolean;
  fetchOurServiceHeroPageData: () => Promise<void>;
  getServicesEnquiry: (formData: any) => Promise<void>;
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

  const fetchOurServiceHeroPageData = async () => {
    setLoading(true);
    try {
      const response = await api.get("/service-page/second-section");
      setOurServicesData(response.data || {});
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const getServicesEnquiry = async (formData: any) => {
    setLoading(true);
    try {
      const response = await api.post("/enquiry-form", formData);
      return response.data;
    } catch (error: any) {
      console.error(
        "Failed to submit enquiry:",
        error.response?.data || error.message
      );
      throw error;
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
      "ourServices PageContext must be used within LandingPageProvider"
    );
  }
  return context;
};
