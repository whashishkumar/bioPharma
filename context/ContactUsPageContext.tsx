"use client";
import api from "@/lib/axious";
import { createContext, useContext, useState, ReactNode } from "react";

interface ContactUsPageCoxtextType {
  sectionOne: any[];
  sectionTwoData: any[];
  loading: boolean;
  fetchContactUsSectionOne: () => Promise<void>;
  fetchContactUsSectionTwo: () => Promise<void>;
}

const ContactUsPageContext = createContext<
  ContactUsPageCoxtextType | undefined
>(undefined);

interface ContactUsProviderProps {
  children: ReactNode;
}

export function ContactUsPageProvider({ children }: ContactUsProviderProps) {
  const [loading, setLoading] = useState(false);
  const [sectionOne, setSectionOne] = useState<any[]>([]);
  const [sectionTwoData, setSectionTwoData] = useState<any[]>([]);
  const fetchContactUsSectionOne = async () => {
    setLoading(true);
    try {
      const response = await api.get("/contact-page/second-section");
      setSectionOne(response.data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const fetchContactUsSectionTwo = async () => {
    setLoading(true);
    try {
      const response = await api.get("/contact-page/third-section");
      setSectionTwoData(response.data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <ContactUsPageContext.Provider
      value={{
        loading,
        fetchContactUsSectionOne,
        sectionOne,
        sectionTwoData,
        fetchContactUsSectionTwo,
      }}
    >
      {children}
    </ContactUsPageContext.Provider>
  );
}

export const useContactUsPageContext = () => {
  const context = useContext(ContactUsPageContext);
  if (!context) {
    throw new Error(
      "ContactUs PageContext must be used within LandingPageProvider"
    );
  }
  return context;
};
