"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useBlogsContext } from "@/context/OurBlogsContext";
import { parseBlogContent } from "@/utils/parseContent";
import Loader from "@/ui/Loader";
import { useEffect } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
  url: string;
}

interface Tag {
  id: number;
  name: string;
  slug: string;
}

interface Blog {
  id: number;
  name: string;
  description: string;
  content: string;
  image: string;
  categories: Category[];
  tags: Tag[];
  created_at: string;
}

interface BlogDescriptionProps {
  blog: Blog;
}

export default function BlogDescription({ slug }: any) {
  const { blogDetail, blogDetailLoading } = useBlogsContext();
  const { data }: any = blogDetail;
  const { fetchSingleBlog } = useBlogsContext();
  const htmlContent = parseBlogContent(data?.content);

  useEffect(() => {
    fetchSingleBlog(slug);
  }, []);

  console.log(data, "blodDetail");

  return (
    <div className="hero-child-container">
      <div className="py-10">
        {blogDetailLoading ? (
          <Loader />
        ) : (
          <div className="px-4">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-6">
              {data?.image && (
                <Image
                  src={data?.image.replace("Image preview", "")}
                  alt={"blog.name"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#172C45] mb-4 poppins">
              {data?.name}
            </h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {data?.categories.map((cat: any) => (
                <a
                  key={cat.id}
                  href={cat.url}
                  className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full hover:bg-green-200 transition"
                >
                  {cat.name}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {data?.tags.map((tag: any) => (
                <span
                  key={tag.id}
                  className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full "
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <p className="text-gray-700 text-lg mb-6">{data?.description}</p>
            <div
              className="prose text-gray-700 text-lg mb-6"
              dangerouslySetInnerHTML={{
                __html: htmlContent,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
