"use client";
import { Section } from "@/type/product";
import CarouselNavigation from "./CarouselNavigation";
import { useState } from "react";
import InstructorAndNeed, {
  InstructorSection,
} from "./sections/InstructorAndNeed";

interface SectionProps {
  sections: Section[];
}

export default function SectionContent({ sections }: SectionProps) {
  const [selectedType, setSelectedType] = useState(" ");
  console.log(sections);
  console.log(selectedType);

  const sectionComponentMap = {
    instructors: {
      component: InstructorAndNeed,
      is: (section: Section): section is InstructorSection =>
        section.type === "instructors",
    },
    // Add more sections later like:
    // testimonials: {
    //   component: TestimonialSection,
    //   is: (section: Section): section is TestimonialSection =>
    //     section.type === "testimonials",
    // },
  } as const;

  return (
    <div className="w-full lg:w-3/5">
      <CarouselNavigation
        sections={sections}
        setSelectedType={setSelectedType}
      />
      <div>
        {sections.map((section) => {
          const entry =
            sectionComponentMap[
              section.type as keyof typeof sectionComponentMap
            ];

          if (entry && entry.is(section)) {
            const Component = entry.component;
            return (
              <div key={section.type} className="my-6">
                <Component section={section} />
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
