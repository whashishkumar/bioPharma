"use client";
import api from "@/lib/axious";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the blog type
export interface Blog {
  id: string;
  title: string;
  excerpt?: string;
  image?: string;
  slug?: string;
  [key: string]: any;
}

interface BlogsContextType {
  blogs: Blog[];
  loading: boolean;
  blodDetail: any[];
  fetchBlogs: () => Promise<void>;
  fetchSingleblog: (slug: any) => Promise<void>;
}

const BlogsContext = createContext<BlogsContextType | undefined>(undefined);
export const BlogsProvider = ({ children }: { children: ReactNode }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [blodDetail, setBlodDetail] = useState<any[]>([]);
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await api("/posts");
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSingleblog = async (slug: any) => {
    // if (fetched.current.pharmaProducts || setPharmaProducts.length > 0) return;
    try {
      const res = await api.get(`posts/${slug}`);
      setBlodDetail(res.data);
      // fetched.current.pharmaProducts = true;
    } catch (error) {
      console.error("Failed to fetch", error);
    }
  };

  return (
    <BlogsContext.Provider
      value={{ blogs, loading, fetchBlogs, fetchSingleblog, blodDetail }}
    >
      {children}
    </BlogsContext.Provider>
  );
};

// Custom hook for consuming the context
export const useBlogsContext = () => {
  const context = useContext(BlogsContext);
  if (!context) {
    throw new Error("useBlogs must be used within a BlogsProvider");
  }
  return context;
};
