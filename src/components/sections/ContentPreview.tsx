import { Section } from "@/type/product";

type PreviewItem = {
  id: string;
  title: string;
  subtitle: string;
  video_url: string;
};

export type ContentPreviewSection = Omit<Section, "type" | "values"> & {
  type: "content_preview";
  values: PreviewItem[];
};

export default function ContentPreview(props: { section: unknown }) {
  const section = props.section as ContentPreviewSection;
  const content = section?.values?.[0];

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold">{section.name}</h2>
      <div className="grid grid-cols-1 gap-6 border-[1px] shadowd p-7 border-gray-500 rounded-2xl">
        {content ? (
          section.values.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg p-4 shadow-sm"
            >
              <div className="aspect-video mb-3">
                <iframe
                  src={item.video_url}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.subtitle}</p>
            </div>
          ))
        ) : (
          <h1 className="text-center">There is no content for preview</h1>
        )}
      </div>
    </div>
  );
}
