"use client";
import { Section } from "@/type/product";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type AboutItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type AboutSectionType = Omit<Section, "type" | "values"> & {
  type: "about";
  values: AboutItem[];
};

export default function AboutSection(props: { section: unknown }) {
  const section = props.section as AboutSectionType;
  const [openId, setOpenId] = useState<string | null>(
    section.values.length > 0 ? section.values[0].id : null
  );

  // Toggle function
  const toggle = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  if (!section) return <h1>There is nothing here</h1>;

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold">{section.name}</h2>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
        {section.values.map((item) => (
          <div
            key={item.id}
            className="pb-3 border-dotted border-gray-200 border-b-[2px]"
          >
            <div
              className="flex justify-between items-center cursor-pointer select-none"
              onClick={() => toggle(item.id)}
            >
              <div
                className="text-base md:text-lg font-medium"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <div className="text-xl text-gray-500">
                {openId === item.id ? <FiChevronUp /> : <FiChevronDown />}
              </div>
            </div>
            {openId === item.id && (
              <div
                className="text-gray-700 text-sm md:text-base leading-relaxed mt-5 space-y-2"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
