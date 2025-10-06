"use client";
import Button from "@/ui/Button";
import PageTitle from "@/ui/PageTitle";
import React, { useEffect } from "react";
import BlogPostCard from "./BlogPostCard";
import { useRouter } from "next/navigation";
import { useLandingPageContext } from "@/context/LandingPageContext";
import { useBlogsContext } from "@/context/OurBlogsContext";

export default function OurBlogs() {
  const { ourBlogs, fetchBlogsBanner } = useLandingPageContext();
  const { fetchBlogs, blogs } = useBlogsContext();
  const router = useRouter();
  // const { section_heading, section_name ,data}: any = ourBlogs;
  // const { data }: any = blogs;
  const { section_heading, section_name, data: ourBlogsData }: any = ourBlogs;
  const { data: blogsData }: any = blogs;
  useEffect(() => {
    fetchBlogs(1);
    fetchBlogsBanner();
  }, []);

  return (
    <div className="hero-sub-container">
      <div className="bg-white">
        <div className="py-16">
          <div className="hero-child-container">
            <div className="grid  grid-cols-1 lg:grid-cols-2">
              <PageTitle
                tag={section_name}
                tagClass="border border-[#172C451A] rounded-full px-4 py-2 text-sm capitalize text-[#172C45] leading-[16px] inline-block"
                // tagClass="border border-[#172C451A] rounded-full max-w-[120px] p-2 text-sm capitalize text-[#172C45] leading-[16px]"
                heading={section_heading}
                headingClass="text-[2.875rem] mt-2 font-normal text-[#172C45] leading-[3.438rem] mt-6"
              />
              <div>
                <div className="flex lg:justify-end lg:mt-14">
                  <Button
                    children={"view All Blogs"}
                    onClick={() => router.push("/blogs")}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <BlogPostCard blogs={blogsData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
