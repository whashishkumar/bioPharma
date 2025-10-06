"use client";
import api from "@/lib/axious";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
  useCallback,
} from "react";

interface AllProductsPageContextType {
  loading: boolean;
  loadingProducts: boolean;
  productLoading: boolean;
  deailPageLoader: boolean;
  categoryList: any;
  productTypeList: any;
  callUsBannerInfo: any;
  allProductsList: any[];
  singleProductDetail: any;
  bannerInfo: Record<string, any>;
  fetchAllCategoryList: () => Promise<void>;
  fetchAllProductTypes: () => Promise<void>;
  fetchCallUsContent: () => Promise<void>;
  fetchOurProductList: (params: {
    mainCategory?: string;
    subCategory?: string;
    currentPage?: number;
  }) => Promise<void>;
  fetchSingleProductDetail: (productSlug: string) => Promise<void>;
  getProductEnquiry: (formData: any) => Promise<any>;
  fetchBannerInfo: () => Promise<any>;
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
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [deailPageLoader, setDeailPageLoader] = useState(false);
  const [productLoading, setProductLoading] = useState(false);
  const [categoryList, setCategoryList] = useState<any[]>([]);
  const [productTypeList, setProductTypeList] = useState<any[]>([]);
  const [callUsBannerInfo, setCallUsBannerInfo] = useState<any[]>([]);
  const [allProductsList, setAllProductsList] = useState<any[]>([]);
  const [singleProductDetail, setSingleProductDetail] = useState<any>({});
  const [bannerInfo, setBannerInfo] = useState<any>({});
  // Track fetched APIs
  const fetched = useRef({
    categories: false,
    productTypes: false,
    callUs: false,
    singleProductDetail: false,
    bannerInfo: false,
  });

  const withLoading = async (fn: () => Promise<void>) => {
    setLoading(true);
    try {
      await fn();
    } finally {
      setLoading(false);
    }
  };

  const withLoadingProduct = async (fn: () => Promise<void>) => {
    setLoadingProducts(true);
    try {
      await fn();
    } finally {
      setLoadingProducts(false);
    }
  };

  const withProductDetail = async (fn: () => Promise<void>) => {
    setDeailPageLoader(true);
    try {
      await fn();
    } finally {
      setDeailPageLoader(false);
    }
  };

  const fetchAllCategoryList = async () => {
    if (fetched.current.categories) return;
    await withLoadingProduct(async () => {
      const res = await api.get("/home/product-categories");
      setCategoryList(res.data || []);
      fetched.current.categories = true;
    });
  };

  const fetchAllProductTypes = async () => {
    if (fetched.current.productTypes) return;
    await withLoadingProduct(async () => {
      const res = await api.get("/product-types");
      setProductTypeList(res.data || []);
      fetched.current.productTypes = true;
    });
  };

  const fetchCallUsContent = async () => {
    if (fetched.current.callUs) return;
    await withLoading(async () => {
      const res = await api.get("/our-products/call-us-now");
      setCallUsBannerInfo(res.data || []);
      fetched.current.callUs = true;
    });
  };

  const fetchOurProductList = useCallback(
    async ({
      mainCategory,
      subCategory,
      currentPage = 1,
    }: {
      mainCategory?: string;
      subCategory?: string;
      currentPage?: number;
    }) => {
      setProductLoading(true);
      try {
        const parts = ["/our-products-list"];
        if (mainCategory) parts.push(mainCategory);
        if (subCategory) parts.push(subCategory);

        const url = `${parts.join("/")}?page=${currentPage}`;
        const res = await api.get(url);
        setAllProductsList(res.data || []);
      } finally {
        setProductLoading(false);
      }
    },
    [] // useCallback ensures this function is stable
  );

  const fetchSingleProductDetail = async (productSlug: string) => {
    if (fetched.current.singleProductDetail) return;
    await withProductDetail(async () => {
      const res = await api.get(`/our-products/${productSlug}`);
      setSingleProductDetail(res.data || {});
    });
  };

  const getProductEnquiry = async (formData: any) => {
    setLoading(true);
    try {
      const res = await api.post("/product-enquiry", formData);
      return res.data;
    } finally {
      setLoading(false);
    }
  };

  const fetchBannerInfo = async () => {
    if (Object.keys(bannerInfo).length > 0) return;
    setLoading(true);
    try {
      const response = await api.get("/all-pages-banners");
      setBannerInfo(response.data || {});
    } finally {
      setLoading(false);
    }
  };

  return (
    <AllProductsPageContext.Provider
      value={{
        loading,
        loadingProducts,
        categoryList,
        fetchAllCategoryList,
        productTypeList,
        fetchAllProductTypes,
        callUsBannerInfo,
        fetchCallUsContent,
        allProductsList,
        fetchOurProductList,
        singleProductDetail,
        fetchSingleProductDetail,
        getProductEnquiry,
        deailPageLoader,
        bannerInfo,
        fetchBannerInfo,
        productLoading,
      }}
    >
      {children}
    </AllProductsPageContext.Provider>
  );
}

export const useAllProductsPageContext = () => {
  const context = useContext(AllProductsPageContext);
  if (!context)
    throw new Error(
      "useAllProductsPageContext must be used within AllProductsPageProvider"
    );
  return context;
};
