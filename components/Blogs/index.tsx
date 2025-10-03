"use client";
import { useBlogsContext } from "@/context/OurBlogsContext";
import Loader from "@/ui/Loader";
import PageTitle from "@/ui/PageTitle";
import Pagination from "@/ui/Pagination";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { blogs, loading, fetchBlogs, fetchSingleBlog } = useBlogsContext();
  const { data }: any = blogs;

  const handleReadBlog = (slug: any) => {
    fetchSingleBlog(slug);
    router.push(`/blogs/${slug}`);
  };

  const handlePageChange = async (page: number): Promise<void> => {
    setCurrentPage(page);
    console.log(page, "one");
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="sub-container">
      <div className="py-16">
        {loading ? (
          <Loader />
        ) : (
          <div>
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
                  className="bg-white flex flex-col h-full shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow poppins"
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
                    <h2 className="text-lg font-semibold text-[#172C45] mb-4 poppins mb-2  ">
                      {blog.name}
                    </h2>
                    <p className="text-base text-[#172C45] poppins line-clamp-3 mb-4 font-normal">
                      {blog.description}
                    </p>
                    {blog.content && (
                      <p className="text-base mb-4 text-[#172C45]">
                        {blog.content}
                      </p>
                    )}

                    {blog.categories && (
                      <div className="flex flex-wrap gap-2 mb-4 ">
                        {blog.categories.map((cat: any) => (
                          <span
                            key={cat.id}
                            className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full red-hat"
                          >
                            {cat.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Learn More Button */}
                    <button
                      className="text-lg font-semibold text-[#172C45] red-hat flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
                      onClick={() => handleReadBlog(blog.slug)}
                    >
                      Learn More <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              currentPage={1}
              totalPages={3}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}
