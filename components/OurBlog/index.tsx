import Button from "@/ui/Button";
import PageTitle from "@/ui/PageTitle";
import React from "react";
import BlogPostCard from "./BlogPostCard";

export default function OurBlogs() {
  return (
    <div className="hero-sub-container">
      <div className="bg-white">
        <div className="py-16">
          <div className="hero-child-container">
            <div className="grid  grid-cols-1 lg:grid-cols-2">
              <PageTitle
                tag="Our Blogs"
                tagClass="border border-[#172C451A] rounded-full max-w-[120px] p-2 text-sm capitalize text-[#172C45] leading-[16px]"
                heading="Stay updated with latest in science and innovation "
                headingClass="text-[2.875rem] mt-2 font-normal text-[#172C45] leading-[3.438rem] mt-6"
              />
              <div>
                <div className="flex lg:justify-end lg:mt-14">
                  <Button children={"view All Blogs"} />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <BlogPostCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
