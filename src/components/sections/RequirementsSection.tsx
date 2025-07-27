

import { Section } from "@/type/product";

export type ValueItem = {
  id: string;
  text: string;
  icon: string;
  color: string;
};

export type RequirementSectionType = Omit<Section, "type" | "values"> & {
  type: "requirements";
  values: ValueItem[];
};

export default function RequirementsSection(props: { section: unknown }) {
  const section = props.section as RequirementSectionType;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{section.name}</h2>

      {section.values.length > 0 ? (
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {section.values.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">এই ক্লাসে অংশ নিতে কোনো নির্দিষ্ট পূর্বশর্ত নেই।</p>
      )}
    </div>
  );
}
