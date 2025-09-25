"use client";
import { useState } from "react";

import { Plus } from "lucide-react";
import { X } from "lucide-react";

type AccordionItem = {
  id: string | number;
  title: string;
  content: string;
};

interface AccordionProps {
  data: AccordionItem[];
}

export default function Accordion({ data }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto space-y-2 ">
      {data.map((item, index) => (
        <div key={item.id} className="overflow-hidden ">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 bg-product-category   text-left cursor-pointer"
          >
            <span className="font-normal text-lg sora ">{item.title}</span>
            {openIndex === index ? <X size={16} /> : <Plus size={16} />}
          </button>

          <div className={`${openIndex === index ? " px-4 py-2" : "max-h-0"}`}>
            <p className="text-[#45566A] marope text-base font-medium">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
