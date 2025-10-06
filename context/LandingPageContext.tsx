"use client";
import api from "@/lib/axious";
import { createContext, useContext, useState, ReactNode, useRef } from "react";

interface LandingPageContextType {
  loading: boolean;
  bannerLoading: boolean;
  navigationList: any[];
  heroSectionInfo: any[];
  aboutUs: any[];
  ourCertification: any[];
  PCDBusinessOpportunity: any[];
  whyToChooseus: any[];
  productCategories: any[];
  typesOfProducts: any[];
  faq: any[];
  testimonials: any[];
  ourBlogs: any[];
  pharmaProducts: any;
  footerData: any[];
  pharmaProductsMenu: any[];
  fetchAboutSection: () => Promise<void>;
  fetchNaviagtionList: () => Promise<void>;
  fetchHeroSection: () => Promise<void>;
  fetchOurCertifacation: () => Promise<void>;
  fetchPcdBusinessOpportunity: () => Promise<void>;
  fetchWhyToChooseUs: () => Promise<void>;
  fetchProductCategories: () => Promise<void>;
  fetchProductTypes: () => Promise<void>;
  fetchFaq: () => Promise<void>;
  fetchTestimonials: () => Promise<void>;
  fetchBlogsBanner: () => Promise<void>;
  fetchPharmaProductsMenu: () => Promise<void>;
  fetchPharmaProducts: (slug?: string) => Promise<void>;
  fetchFooterList: () => Promise<void>;
  subScribeNewsLetter: (email: string) => Promise<void>;
}

const LandingPageContext = createContext<LandingPageContextType | undefined>(
  undefined
);
interface LandingPageProviderProps {
  children: ReactNode;
}

export function LandingPageProvider({ children }: LandingPageProviderProps) {
  const [loading, setLoading] = useState(false);
  const [bannerLoading, setBannerLoading] = useState(false);

  const [navigationList, setNavigationList] = useState<any[]>([]);
  const [heroSectionInfo, setHeroSectionInfo] = useState<any[]>([]);
  const [aboutUs, setAboutUs] = useState<any[]>([]);
  const [ourCertification, setOurCertification] = useState<any[]>([]);
  const [PCDBusinessOpportunity, setPCDBusinessOpportunity] = useState<any[]>(
    []
  );
  const [whyToChooseus, setWhyToChooseus] = useState<any[]>([]);
  const [productCategories, setProductCategories] = useState<any[]>([]);
  const [typesOfProducts, setTypesOfProducts] = useState<any[]>([]);
  const [faq, setFaq] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [ourBlogs, setOurBlogs] = useState<any[]>([]);
  const [pharmaProducts, setPharmaProducts] = useState<any>();
  const [footerData, setFooterData] = useState<any[]>([]);
  const [pharmaProductsMenu, setPharmaProductsMenu] = useState<any[]>([]);

  // Track which APIs are already fetched
  const fetched = useRef({
    navigation: false,
    hero: false,
    about: false,
    certification: false,
    pcd: false,
    whyToChooseus: false,
    productCategories: false,
    typesOfProducts: false,
    faq: false,
    testimonials: false,
    ourBlogs: false,
    pharmaProducts: false,
    footerData: false,
    pharmaProductsMenu: false,
    isSubscribed: false,
  });

  // Helper to manage loading across multiple calls
  const withLoading = async (fn: () => Promise<void>) => {
    setLoading(true);
    try {
      await fn();
    } finally {
      setLoading(false);
    }
  };

  const withBannerLoading = async (fn: () => Promise<void>) => {
    setBannerLoading(true);
    try {
      await fn();
    } finally {
      setBannerLoading(false);
    }
  };

  const fetchNaviagtionList = async () => {
    if (fetched.current.navigation || navigationList.length > 0) return;
    await withBannerLoading(async () => {
      try {
        const res = await api.get("/menus");
        setNavigationList(res.data);
        fetched.current.navigation = true;
      } catch (error) {
        console.error("Failed to fetch navigation list:", error);
      }
    });
  };

  const fetchHeroSection = async () => {
    if (fetched.current.hero || heroSectionInfo.length > 0) return;
    await withBannerLoading(async () => {
      try {
        const res = await api.get("/hero-section/homepage-hero-section");
        setHeroSectionInfo(res.data);
        fetched.current.hero = true;
      } catch (error) {
        console.error("Failed to fetch hero section:", error);
      }
    });
  };

  const fetchAboutSection = async () => {
    if (fetched.current.about || aboutUs.length > 0) return;
    await withLoading(async () => {
      try {
        const res = await api.get("/about-section/homepage-about-section");
        setAboutUs(res.data);
        fetched.current.about = true;
      } catch (error) {
        console.error("Failed to fetch about section:", error);
      }
    });
  };

  const fetchOurCertifacation = async () => {
    if (fetched.current.certification || ourCertification.length > 0) return;
    await withLoading(async () => {
      try {
        const res = await api.get("/our-certifications");
        setOurCertification(res.data);
        fetched.current.certification = true;
      } catch (error) {
        console.error("Failed to fetch certification section:", error);
      }
    });
  };

  const fetchPcdBusinessOpportunity = async () => {
    if (fetched.current.pcd || PCDBusinessOpportunity.length > 0) return;
    await withLoading(async () => {
      try {
        const res = await api.get("/pcd-business-opportunity");
        setPCDBusinessOpportunity(res.data);
        fetched.current.pcd = true;
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    });
  };

  const fetchWhyToChooseUs = async () => {
    if (fetched.current.whyToChooseus || whyToChooseus.length > 0) return;
    await withLoading(async () => {
      try {
        const res = await api.get("/why-choose-us");
        setWhyToChooseus(res.data);
        fetched.current.whyToChooseus = true;
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    });
  };

  const fetchProductCategories = async () => {
    if (fetched.current.productCategories || productCategories.length > 0)
      return;
    await withLoading(async () => {
      try {
        const res = await api.get("/home/product-categories");
        setProductCategories(res.data);
        fetched.current.productCategories = true;
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    });
  };
  const fetchProductTypes = async () => {
    if (fetched.current.typesOfProducts || typesOfProducts.length > 0) return;
    await withLoading(async () => {
      try {
        const res = await api.get("/product-types");
        setTypesOfProducts(res.data);
        fetched.current.typesOfProducts = true;
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    });
  };

  const fetchFaq = async () => {
    if (fetched.current.faq || faq.length > 0) return;
    await withLoading(async () => {
      try {
        const res = await api.get("/faq");
        setFaq(res.data);
        fetched.current.faq = true;
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    });
  };

  const fetchTestimonials = async () => {
    if (fetched.current.testimonials || testimonials.length > 0) return;
    await withLoading(async () => {
      try {
        const res = await api.get("/testimonials");
        setTestimonials(res.data);
        fetched.current.testimonials = true;
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    });
  };

  const subScribeNewsLetter = async (email: string) => {
    if (fetched.current.isSubscribed) return;
    return await withLoading(async () => {
      try {
        const res = await api.post("/subscription", { email });
        return res.data;
      } catch (error) {
        console.error("Failed to subscribe:", error);
        throw error;
      }
    });
  };

  const fetchBlogsBanner = async () => {
    if (fetched.current.isSubscribed || ourBlogs.length > 0) return;
    await withLoading(async () => {
      try {
        const res = await api.get("/home/blogs");
        setOurBlogs(res.data);
        fetched.current.ourBlogs = true;
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    });
  };

  const fetchPharmaProductsMenu = async () => {
    if (fetched.current.pharmaProductsMenu || pharmaProductsMenu.length > 0)
      return;
    await withLoading(async () => {
      try {
        const res = await api.get("/home/our-products");
        setPharmaProductsMenu(res.data);
        fetched.current.pharmaProductsMenu = true;
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    });
  };

  const fetchPharmaProducts = async (slug: any) => {
    // if (fetched.current.pharmaProducts || setPharmaProducts.length > 0) return;
    await withLoading(async () => {
      try {
        const res = await api.get(`/home/our-products/${slug}`);
        setPharmaProducts(res.data);
        fetched.current.pharmaProducts = true;
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    });
  };

  const fetchFooterList = async () => {
    if (fetched.current.footerData || footerData.length > 0) return;
    await withLoading(async () => {
      try {
        const res = await api.get("/footer-menu");
        setFooterData(res.data);
        fetched.current.footerData = true;
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    });
  };

  return (
    <LandingPageContext.Provider
      value={{
        bannerLoading,
        aboutUs,
        loading,
        fetchAboutSection,
        navigationList,
        fetchNaviagtionList,
        heroSectionInfo,
        fetchHeroSection,
        ourCertification,
        fetchOurCertifacation,
        PCDBusinessOpportunity,
        fetchPcdBusinessOpportunity,
        whyToChooseus,
        fetchWhyToChooseUs,
        productCategories,
        fetchProductCategories,
        typesOfProducts,
        fetchProductTypes,
        faq,
        fetchFaq,
        testimonials,
        fetchTestimonials,
        ourBlogs,
        fetchBlogsBanner,
        pharmaProducts,
        fetchPharmaProductsMenu,
        footerData,
        fetchFooterList,
        pharmaProductsMenu,
        fetchPharmaProducts,
        subScribeNewsLetter,
      }}
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
