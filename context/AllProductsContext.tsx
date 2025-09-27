"use client";
import api from "@/lib/axious";
import { createContext, useContext, useState, ReactNode } from "react";

interface AllProductsPageContextType {
  loading: boolean;
  categoryList: any[];
  productTypeList: any[];
  callUsBannerInfo: any;
  allProductsList: any;
  fetchAllCategoryList: () => Promise<void>;
  fetchAllProductTypes: () => Promise<void>;
  fetchCallUsContent: () => Promise<void>;
  fetchAllProducts: () => Promise<void>;
}

const AllProductsPageContext = createContext<
  AllProductsPageContextType | undefined
>(undefined);

interface AllProductsProviderProps {
  children: ReactNode;
}
export function AllProductsPageProvider({
  children,
}: AllProductsProviderProps) {
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState<any[]>([]);
  const [productTypeList, setProductTypeList] = useState<any[]>([]);
  const [callUsBannerInfo, setCallUsBannerInfo] = useState<any[]>([]);
  const [allProductsList, setAllProductsList] = useState<any[]>([]);
  const fetchAllCategoryList = async () => {
    setLoading(true);
    try {
      const response = await api.get("/product-categories");
      setCategoryList(response.data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const fetchAllProductTypes = async () => {
    setLoading(true);
    try {
      const response = await api.get("/product-types");
      setProductTypeList(response.data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const fetchCallUsContent = async () => {
    setLoading(true);
    try {
      const response = await api.get("/our-products/call-us-now");
      setCallUsBannerInfo(response.data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const response = await api.get("our-products-list?page=1");
      setAllProductsList(response.data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <AllProductsPageContext.Provider
      value={{
        loading,
        categoryList,
        fetchAllCategoryList,
        productTypeList,
        fetchAllProductTypes,
        fetchCallUsContent,
        callUsBannerInfo,
        allProductsList,
        fetchAllProducts,
      }}
    >
      {children}
    </AllProductsPageContext.Provider>
  );
}

export const useAllProductsPageContext = () => {
  const context = useContext(AllProductsPageContext);
  if (!context) {
    throw new Error(
      "ContactUs PageContext must be used within LandingPageProvider"
    );
  }
  return context;
};
