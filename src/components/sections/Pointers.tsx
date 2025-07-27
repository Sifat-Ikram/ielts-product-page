import { Section } from "@/type/product";
import { FaCheck } from "react-icons/fa6";

export type PointerItem = {
  id: string;
  text: string;
  icon: string;
  color: string;
};

export type PointerSection = Omit<Section, "type" | "values"> & {
  type: "pointers";
  values: PointerItem[];
};

export default function Pointers(props: { section: unknown }) {
  const section = props.section as PointerSection;
  const groupJoin = section?.values?.[0];

  if (!groupJoin) return null;
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold">{section.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-[1px] shadowd p-7 border-gray-500 rounded-2xl">
        {section.values.map((item) => (
          <div key={item.id} className={`text-${item.color} flex gap-x-5`}>
            <FaCheck className="text-blue-500 text-3xl" />
            <h1 className="text-base">{item.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
