"use client";
import { useBlogsContext } from "@/context/OurBlogsContext";
import Loader from "@/ui/Loader";
import PageTitle from "@/ui/PageTitle";
import Pagination from "@/ui/Pagination";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Blogs() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { blogs, loading, fetchBlogs, fetchSingleBlog } = useBlogsContext();
  const { data, meta }: any = blogs || {};
  const { current_page, total, last_page }: any = meta || {};

  const handleReadBlog = (slug: any) => {
    fetchSingleBlog(slug);
    router.push(`/blogs/${slug}`);
  };

  const handlePageChange = async (page: number): Promise<void> => {
    setCurrentPage(page);
    await fetchBlogs(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchBlogs(currentPage);
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
                tagClass="border border-[#00A859] rounded-full px-4 py-1 text-sm sm:text-base capitalize text-[#172C45] leading-4 sm:leading-5 inline-block"
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
                        alt="blog"
                        fill
                        className="object-cover rounded-t-2xl"
                        priority
                      />
                    )}
                  </div>

                  <div className="flex flex-col flex-grow p-6">
                    <h2 className="text-lg font-semibold text-[#172C45] mb-2 poppins">
                      {blog.name}
                    </h2>
                    <p className="text-base text-[#172C45] poppins line-clamp-3 mb-4 font-normal">
                      {blog.description}
                    </p>

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

                    <button
                      className="text-lg font-semibold text-[#172C45] red-hat flex items-center gap-2 hover:gap-3 transition-all cursor-pointer mt-auto"
                      onClick={() => handleReadBlog(blog.slug)}
                    >
                      Learn More <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {total > 1 && (
              <Pagination
                currentPage={current_page || currentPage}
                totalPages={last_page}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
