"use client";
import api from "@/lib/axious";
import { createContext, useContext, useState, ReactNode } from "react";

interface LandingPageContextType {
  menuListItems: any[];
  loading: boolean;
  fetchAboutSection: () => Promise<void>;
}

const LandingPageContext = createContext<LandingPageContextType | undefined>(
  undefined
);

interface LandingPageProviderProps {
  children: ReactNode;
}

export function LandingPageProvider({ children }: LandingPageProviderProps) {
  const [menuListItems, setMenuListItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAboutSection = async () => {
    setLoading(true);
    try {
      const res = await api.get("/home/about_section");
      setMenuListItems(res.data);
    } catch (error) {
      console.error("Failed to fetch about section:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LandingPageContext.Provider
      value={{ menuListItems, loading, fetchAboutSection }}
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
