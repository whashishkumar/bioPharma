"use client";
import React, { useState } from "react";

type Blog = {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
  content: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "John Doe",
    date: "2025-09-30",
    description:
      "Learn the basics of React, including components, props, and state management.",
    content:
      "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage state efficiently. In this article, we cover how to get started with React step by step...",
  },
  {
    id: 2,
    title: "Tailwind CSS Tips & Tricks",
    author: "Jane Smith",
    date: "2025-09-28",
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
    description:
      "An introduction to Next.js, covering file-based routing, API routes, and SSR.",
    content:
      "Next.js is a React framework for building full-stack web applications. With features like file-based routing, API endpoints, and server-side rendering, it makes creating modern apps straightforward...",
  },
  {
    id: 4,
    title: "Tailwind CSS Tips & Tricks",
    author: "Jane Smith",
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
    description:
      "An introduction to Next.js, covering file-based routing, API routes, and SSR.",
    content:
      "Next.js is a React framework for building full-stack web applications. With features like file-based routing, API endpoints, and server-side rendering, it makes creating modern apps straightforward...",
  },
];

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState<Blog>(blogs[0]);

  return (
    <div className="sub-container">
      <div className="py-16 mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 red-hat">
        <div className="md:col-span-2  rounded-lg p-6 ">
          <h1 className="text-2xl font-bold mb-2">{selectedBlog.title}</h1>
          <p className="text-gray-500 text-sm mb-4">
            By {selectedBlog.author} • {selectedBlog.date}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {selectedBlog.content}
          </p>
        </div>
        {/* <div className="space-y-4 border rounded-lg p-4 shadow-sm red-hat">
          <h2 className="text-xl font-semibold mb-2">All Blogs</h2>
          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => setSelectedBlog(blog)}
              className={`cursor-pointer p-3 rounded-lg transition ${
                selectedBlog.id === blog.id
                  ? "bg-blue-100 border border-blue-400"
                  : "hover:bg-gray-100"
              }`}
            >
              <h3 className="font-medium">{blog.title}</h3>
              <p className="text-xs text-gray-500">
                {blog.author} • {blog.date}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
