"use client";
import api from "@/lib/axious";
import React, { createContext, useContext, useState, ReactNode } from "react";
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
  blogDetailLoading: boolean;
  blogDetail: Record<string, any>;
  fetchBlogs: (page: any) => Promise<void>;
  fetchSingleBlog: (slug: string) => Promise<void>;
}

const BlogsContext = createContext<BlogsContextType | undefined>(undefined);

export const BlogsProvider = ({ children }: { children: ReactNode }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [blogDetail, setBlogDetail] = useState<Record<string, any>>({});
  const [blogDetailLoading, setBlogDetailLoading] = useState<boolean>(false);

  const withBlogLoading = async (fn: () => Promise<void>) => {
    setLoading(true);
    try {
      await fn();
    } finally {
      setLoading(false);
    }
  };
  const withBlogDetailLoading = async (fn: () => Promise<void>) => {
    setBlogDetailLoading(true);
    try {
      await fn();
    } finally {
      setBlogDetailLoading(false);
    }
  };

  const fetchBlogs = async (page: any) => {
    await withBlogLoading(async () => {
      try {
        const res = await api.get(`/posts?page=${page}&per_page=${12}`);
        setBlogs(res.data || []);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      }
    });
  };

  const fetchSingleBlog = async (slug: string) => {
    if (blogDetail[slug]) return;
    await withBlogDetailLoading(async () => {
      try {
        const res = await api.get(`/posts/${slug}`);
        setBlogDetail(res.data);
      } catch (error) {
        console.error("Failed to fetch blog", error);
      }
    });
  };

  return (
    <BlogsContext.Provider
      value={{
        blogs,
        loading,
        fetchBlogs,
        fetchSingleBlog,
        blogDetail,
        blogDetailLoading,
      }}
    >
      {children}
    </BlogsContext.Provider>
  );
};

export const useBlogsContext = () => {
  const context = useContext(BlogsContext);
  if (!context) {
    throw new Error("useBlogsContext must be used within a BlogsProvider");
  }
  return context;
};
