import BlogDescription from "@/components/BlogDescription";
import React from "react";

export default async function page({ params }: any) {
  const { slug } = await params;

  return <BlogDescription slug={slug} />;
}
