import { Section } from "@/type/product";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";

interface Instructor {
  name: string;
  image: string;
  short_description?: string;
  description?: string;
  slug?: string;
  has_instructor_page?: boolean;
}

export type InstructorSection = Omit<Section, "type" | "values"> & {
  type: "instructors";
  values: Instructor[];
};

export default function InstructorAndNeed(props: { section: unknown }) {
  const section = props.section as InstructorSection;
  const instructor = section?.values?.[0];

  if (!instructor) return null;

  return (
    <div className="space-y-5">
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">{section.name}</h1>
      <div className="w-full border-[2px] border-gray-400 rounded-md px-5 py-8 flex flex-col sm:flex-row items-center space-y-5 sm:space-x-5">
        <Image
          src={instructor.image}
          alt={instructor.name}
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col max-sm:items-center sm:text-left space-y-1">
          <h1 className="hover:text-green-400 text-lg font-semibold flex items-center">
            {instructor.name}
            <FaChevronRight className="ml-1 text-sm font-bold" />
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: instructor.description || "" }}
            className="text-left"
          />
        </div>
      </div>
    </div>
  );
}
