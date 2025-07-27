import { Section } from "@/type/product";

export type PayItem = {
  id: string;
  text: string;
};

export type HowToPaySectionType = Omit<Section, "type" | "values"> & {
  type: "how_to_pay";
  values: PayItem[];
};

export default function HowToPaySection(props: { section: unknown }) {
  const section = props.section as HowToPaySectionType;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{section.name}</h2>

      {section.values.length > 0 ? (
        <ol className="list-decimal pl-5 space-y-2 text-gray-700">
          {section.values.map((step, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: step }} />
          ))}
        </ol>
      ) : (
        <p className="text-gray-500">
          পেমেন্ট সম্পর্কিত বিস্তারিত তথ্য শীঘ্রই প্রদান করা হবে।
        </p>
      )}
    </div>
  );
}
