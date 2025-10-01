"use client";
import { useBlogsContext } from "@/context/OurBlogsContext";
import PageTitle from "@/ui/PageTitle";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Blog = {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
  content: string;
  image?: string;
};

const blog: Blog[] = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "John Doe",
    date: "2025-09-30",
    description:
      "Learn the basics of React, including components, props, and state management.",
    content:
      "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage state efficiently. In this article, we cover how to get started with React step by step...",
    image: "/images/arti1.jpg",
  },
  {
    id: 2,
    title: "Tailwind CSS Tips & Tricks",
    author: "Jane Smith",
    date: "2025-09-28",
    image: "/images/arti1.jpg",
    description:
      "Discover how to use Tailwind CSS effectively to style your applications quickly.",
    content:
      "Tailwind CSS is a utility-first CSS framework that makes styling easier and more maintainable. In this guide, we’ll look at tips and tricks like responsive design, custom themes, and using @apply for DRY code...",
  },
  {
    id: 3,
    title: "Next.js for Beginners",
    author: "Alice Johnson",
    date: "2025-09-25",
    image: "/images/arti1.jpg",
    description:
      "An introduction to Next.js, covering file-based routing, API routes, and SSR.",
    content:
      "Next.js is a React framework for building full-stack web applications. With features like file-based routing, API endpoints, and server-side rendering, it makes creating modern apps straightforward...",
  },
  {
    id: 4,
    title: "Tailwind CSS Tips & Tricks",
    author: "Jane Smith",
    image: "/images/arti1.jpg",
    date: "2025-09-28",
    description:
      "Discover how to use Tailwind CSS effectively to style your applications quickly.",
    content:
      "Tailwind CSS is a utility-first CSS framework that makes styling easier and more maintainable. In this guide, we’ll look at tips and tricks like responsive design, custom themes, and using @apply for DRY code...",
  },
  {
    id: 6,
    title: "Next.js for Beginners",
    author: "Alice Johnson",
    date: "2025-09-25",
    image: "/images/arti1.jpg",
    description:
      "An introduction to Next.js, covering file-based routing, API routes, and SSR.",
    content:
      "Next.js is a React framework for building full-stack web applications. With features like file-based routing, API endpoints, and server-side rendering, it makes creating modern apps straightforward...",
  },
];

export default function Blogs() {
  const router = useRouter();
  const { blogs, loading, fetchBlogs, fetchSingleblog } = useBlogsContext();
  const { data }: any = blogs;

  const handleReadBlog = (slug: any) => {
    fetchSingleblog(slug);
    router.push(`/blogs/${slug}`);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="sub-container">
      <div className="py-16">
        <div className="pb-12">
          <PageTitle
            tag={"Our Blogs"}
            tagClass="border border-[#00A859] rounded-full px-4 py-1 text-sm sm:text-base capitalize text-[#172C45] leading-4 sm:leading-5 w-max"
            headingClass="text-2xl sm:text-3xl md:text-[2.875rem] mt-2 font-normal text-[#172C45] leading-snug sm:leading-normal md:leading-[3.438rem] mt-6 max-w-full sm:max-w-xl md:max-w-2xl text-center"
            wrapperClass="w-full mx-auto px-4"
            tagWrapper="flex flex-col items-center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.map((blog: any) => (
            <div
              key={blog.id}
              className="bg-white flex flex-col h-full shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow red-hat"
            >
              <div className="relative h-60 w-full">
                {blog.image && (
                  <Image
                    src={blog.image}
                    alt={"blog"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                    priority
                  />
                )}
              </div>

              <div className="flex flex-col flex-grow p-6">
                <h2 className="text-xl font-semibold text-[#172C45] mb-2">
                  {blog.name}
                </h2>
                <p className="text-gray-700 text-base mb-4 flex-grow">
                  {blog.description}
                </p>
                {blog.content && (
                  <p className="text-gray-600 text-base mb-4">{blog.content}</p>
                )}

                {blog.categories && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.categories.map((cat: any) => (
                      <span
                        key={cat.id}
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                      >
                        {cat.name}
                      </span>
                    ))}
                  </div>
                )}

                {/* Learn More Button */}
                <button
                  className="mt-auto text-green-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  onClick={() => handleReadBlog(blog.slug)}
                >
                  Learn More <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
