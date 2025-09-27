"use client";
import React from "react";

type Category = {
  id: number | string;
  title: string;
  slug: string;
};

export default function Sidebar({ categories }: { categories: Category[] }) {
  return (
    <nav className="flex flex-col gap-3 items-start">
      <p className="font-redhat text-lg font-bold leading-5 cursor-pointer">
        Categories
      </p>
      <div className="flex flex-col">
        {categories?.map((category) => (
          <button
            key={category.id}
            className={`
              text-left font-sanchez text-base font-normal leading-5 capitalize
              px-2 py-1.5 rounded-md cursor-pointer transition-colors
              hover:text-[var(--color-primary)]
            `}
          >
            {category.title}
          </button>
        ))}
      </div>
    </nav>
  );
}
