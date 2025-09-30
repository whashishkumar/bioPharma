"use client";
import api from "@/lib/axious";
import { createContext, useContext, useState, ReactNode, useRef } from "react";

interface ContactUsPageContextType {
  sectionOne: any[];
  sectionTwoData: any[];
  loading: boolean;
  fetchContactUsSectionOne: () => Promise<void>;
  fetchContactUsSectionTwo: () => Promise<void>;
}

const ContactUsPageContext = createContext<
  ContactUsPageContextType | undefined
>(undefined);

interface ContactUsProviderProps {
  children: ReactNode;
}

export function ContactUsPageProvider({ children }: ContactUsProviderProps) {
  const [loading, setLoading] = useState(false);
  const [sectionOne, setSectionOne] = useState<any[]>([]);
  const [sectionTwoData, setSectionTwoData] = useState<any[]>([]);

  // track which APIs have been fetched
  const fetched = useRef({ sectionOne: false, sectionTwo: false });

  const withLoading = async (fn: () => Promise<void>) => {
    setLoading(true);
    try {
      await fn();
    } finally {
      setLoading(false);
    }
  };

  const fetchContactUsSectionOne = async () => {
    if (fetched.current.sectionOne) return; // already fetched
    await withLoading(async () => {
      const res = await api.get("/contact-page/second-section");
      setSectionOne(res.data || []);
      fetched.current.sectionOne = true;
    });
  };

  const fetchContactUsSectionTwo = async () => {
    if (fetched.current.sectionTwo) return; // already fetched
    await withLoading(async () => {
      const res = await api.get("/contact-page/third-section");
      setSectionTwoData(res.data || []);
      fetched.current.sectionTwo = true;
    });
  };

  return (
    <ContactUsPageContext.Provider
      value={{
        loading,
        sectionOne,
        sectionTwoData,
        fetchContactUsSectionOne,
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
      "useContactUsPageContext must be used within ContactUsPageProvider"
    );
  }
  return context;
};
