"use client";
import api from "@/lib/axious";
import { createContext, useContext, useState, ReactNode } from "react";

type Category = {
  id: number | string;
  title: string;
  slug: string;
};

type productTypes = {
  id: number | string;
  title: string;
  slug: string;
};

type CategoryResponse = {
  data: Category[];
};

type ProductTypeResponse = {
  data: productTypes[];
};

interface AllProductsPageContextType {
  loading: boolean;
  categoryList: any;
  productTypeList: any;
  callUsBannerInfo: any;
  allProductsList: any;
  singleProductDetail: any;
  fetchAllCategoryList: () => Promise<void>;
  fetchAllProductTypes: () => Promise<void>;
  fetchCallUsContent: () => Promise<void>;
  fetchOurProductList: (type: any) => Promise<void>;
  fetchSingleProductDetail: (type: any) => Promise<void>;
  getProductEnquary: (fomeData: any) => Promise<void>;
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
  const [categoryList, setCategoryList] = useState<CategoryResponse>({
    data: [],
  });
  const [productTypeList, setProductTypeList] = useState<ProductTypeResponse>({
    data: [],
  });
  const [callUsBannerInfo, setCallUsBannerInfo] = useState<any[]>([]);
  const [allProductsList, setAllProductsList] = useState<any[]>([]);
  const [singleProductDetail, setSingleProductDetail] = useState<any[]>([]);
  const fetchAllCategoryList = async () => {
    setLoading(true);
    try {
      const response = await api.get("/home/product-categories");
      setCategoryList({ data: response.data || [] });
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

  // const fetchAllProducts = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await api.get("our-products-list?page=1");
  //     setAllProductsList(response.data || []);
  //   } catch (error) {
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchOurProductList = async ({
    mainCategory,
    subCategory,
    currentPage = 1,
  }: {
    mainCategory?: string;
    subCategory?: string;
    currentPage?: number;
  }) => {
    setLoading(true);
    try {
      const parts = ["/our-products-list"];
      // Add mainCategory if exists
      if (mainCategory) {
        parts.push(mainCategory);
      }
      // Add subCategory only if exists
      if (subCategory) {
        parts.push(subCategory);
      }

      // Construct final URL
      const url = `${parts.join("/")}?page=${currentPage}`;
      const response = await api.get(url);
      // Update your state
      setAllProductsList(response.data || []);
    } catch (error) {
      console.error("Failed to fetch product list:", error);
    } finally {
      setLoading(false);
    }
  };

  // /product-enquiry
  const fetchSingleProductDetail = async (productSlug: string) => {
    setLoading(true);
    try {
      const response = await api.get(`/our-products/${productSlug}`);
      setSingleProductDetail(response.data || {});
    } catch (error: any) {
      console.error(
        "Failed to fetch product detail:",
        error.response?.data || error.message
      );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getProductEnquary = async (formData: any) => {
    setLoading(true);
    try {
      const response = await api.post("/product-enquiry", formData);
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
        fetchOurProductList,
        fetchSingleProductDetail,
        singleProductDetail,
        getProductEnquary,
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
