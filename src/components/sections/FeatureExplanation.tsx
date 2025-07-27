import Image from "next/image";
import { Section } from "@/type/product";
import { BsCheck2 } from "react-icons/bs";

type FeatureItem = {
  id: string;
  title: string;
  file_type: string;
  file_url: string;
  video_thumbnail: string;
  checklist: string[];
};

export type FeatureExplanationSectionType = Omit<Section, "type" | "values"> & {
  type: "feature_explanations";
  values: FeatureItem[];
};

export default function FeatureExplanation(props: { section: unknown }) {
  const section = props.section as FeatureExplanationSectionType;

  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-semibold">{section.name}</h2>

      <div className="grid grid-cols-1 bg-gray-50 border border-gray-200 rounded-xl p-6">
        {section.values.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col-reverse md:flex-row-reverse md:justify-between items-center gap-4 pb-6 ${
              index !== section.values.length - 1
                ? "mb-6 border-b border-dotted border-gray-500"
                : ""
            }`}
          >
            <Image
              src={item.file_url}
              alt={item.title}
              width={250}
              height={200}
              className="rounded-lg object-cover"
            />

            <div className="space-y-2">
              <h3 className="text-[14px] leading-[30px] text-[#111827] md:text-[16px] font-medium">
                {item.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-3 lg:space-y-5">
                {item.checklist.map((point, index) => (
                  <li
                    key={index}
                    className="text-[14px] font-medium leading-[30px] text-gray-600 md:text-[16px] flex items-center"
                  >
                    <BsCheck2 className="text-blue-500 text-2xl mr-4" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
