import { Section } from "@/type/product";

export type FreeItemsSectionType = Omit<Section, "type" | "values"> & {
  type: "free_items";
  values: [];
};

export default function FreeItemsSection(props: { section: unknown }) {
  const section = props.section as FreeItemsSectionType;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{section.name}</h2>

      {section.values.length === 0 ? (
        <p className="text-gray-600 text-center">
          এই কোর্সের সাথে বর্তমানে কোনো ফ্রি আইটেম নেই।
        </p>
      ) : (
        <ul className="list-disc list-inside space-y-2">
          {section.values.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
