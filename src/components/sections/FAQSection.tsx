"use client";

import { Section } from "@/type/product";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type FAQSectionType = Omit<Section, "type" | "values"> & {
  type: "faq";
  values: FAQItem[];
};

export default function FAQSection(props: { section: unknown }) {
  const section = props.section as FAQSectionType;
  const [openId, setOpenId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{section.name}</h2>

      <div className="bg-gray-50 relative border border-gray-200 rounded-xl p-6 space-y-4">
        {(showAll ? section.values : section.values.slice(0, 5)).map((item) => (
          <div
            key={item.id}
            className="pb-3 border-dotted border-gray-200 border-b-[2px]"
          >
            <div
              className="flex justify-between items-center cursor-pointer select-none"
              onClick={() => toggle(item.id)}
            >
              <div
                className="text-sm md:text-sm font-bold"
                dangerouslySetInnerHTML={{ __html: item.question }}
              />
              <div className="text-xl text-gray-500">
                {openId === item.id ? <FiChevronUp /> : <FiChevronDown />}
              </div>
            </div>
            {openId === item.id && (
              <div
                className="text-gray-700 text-xs md:text-sm leading-relaxed mt-5 space-y-2"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            )}
          </div>
        ))}
        {section.values.length > 5 && (
          <div className="absolute -bottom-4 left-2/5 rounded-full shadow py-1 px-3">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="text-sm font-medium text-gray-500 flex items-center"
            >
              {showAll ? "কম দেখান" : "সকল প্রশ্ন-উত্তর"}
              {showAll ? <FiChevronUp className="text-base ml-3" /> : <FiChevronDown className="text-base ml-3" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
