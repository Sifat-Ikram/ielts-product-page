import { Section } from "@/type/product";
import Image from "next/image";

export interface Feature {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

export type FeatureSection = Omit<Section, "type" | "values"> & {
  type: "features";
  values: Feature[];
};

export default function CourseArrangement(props: { section: unknown }) {
  const section = props.section as FeatureSection;
  const features = section?.values?.[0];

  if (!features) return null;
  return (
    <div className="space-y-5">
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
        {section.name}
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-[#151530] rounded-md px-5 py-8 gap-10">
        {section.values.map(({ id, icon, title, subtitle }) => (
          <div key={id} className="flex items-start space-x-4">
            <Image
              src={icon}
              alt={title}
              width={48}
              height={48}
              className="flex-shrink-0"
            />
            <div className="space-y-3">
              <h2 className="font-semibold text-lg text-white">{title}</h2>
              <p className="text-gray-500 text-sm font-medium">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
