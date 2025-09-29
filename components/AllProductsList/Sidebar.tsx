"use client";
import React from "react";

type Category = {
  id: number | string;
  title: string;
  slug: string;
};

type SidebarProps = {
  categories: Category[];
  selectedCategory: string;
  handleSelectCategory: (slug: string) => Promise<void>;
};

export default function Sidebar({
  categories,
  handleSelectCategory,
  selectedCategory,
}: SidebarProps) {
  return (
    <div className="flex flex-col gap-3 items-start rounded-xl p-6 bg-gray-100">
      <p className="text-xl font-semibold leading-5 cursor-pointer red-hat">
        Categories
      </p>

      <div className="flex flex-col w-full">
        {categories?.map((category: any) => {
          const isActive =
            selectedCategory?.toLowerCase() === category.slug.toLowerCase();

          return (
            <button
              key={category.id}
              className={`
            text-left text-lg leading-5 capitalize font-medium
            px-3 py-2 rounded-md cursor-pointer transition-colors red-hat
            ${
              isActive
                ? "text-[#00A859] font-extrabold"
                : "hover:bg-gray-100 hover:text-[#00A859]"
            }
          `}
              onClick={() => handleSelectCategory(category.slug)}
            >
              {category.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
