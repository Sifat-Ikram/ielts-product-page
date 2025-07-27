"use client";
import { Section } from "@/type/product";
import CarouselNavigation from "./CarouselNavigation";
import { useEffect, useRef, useState } from "react";
import { LuPhoneCall } from "react-icons/lu";

import InstructorAndNeed, {
  InstructorSection,
} from "./sections/InstructorAndNeed";

import CourseArrangement, {
  FeatureSection,
} from "./sections/CourseArrangement";

import GroupJoinEngagement, {
  GroupJoinEngagementSection,
} from "./sections/GroupJoinEngagement";

import Pointers, { PointerSection } from "./sections/Pointers";
import ContentPreview, {
  ContentPreviewSection,
} from "./sections/ContentPreview";
import AboutSection, { AboutSectionType } from "./sections/AboutSection";
import FeatureExplanation, {
  FeatureExplanationSectionType,
} from "./sections/FeatureExplanation";
import FreeItemsSection, {
  FreeItemsSectionType,
} from "./sections/FreeItemsSection";
import TestimonialSection, {
  TestimonialSectionType,
} from "./sections/TestimonialSection";
import RequirementsSection, {
  RequirementSectionType,
} from "./sections/RequirementsSection";
import HowToPaySection, {
  HowToPaySectionType,
} from "./sections/HowToPaySection";
import FAQSection, { FAQSectionType } from "./sections/FAQSection";

interface SectionProps {
  sections: Section[];
}

export default function SectionContent({ sections }: SectionProps) {
  const [selectedType, setSelectedType] = useState(" ");
  const sectionRefs = useRef<
    Partial<Record<SectionType, HTMLDivElement | null>>
  >({});

  useEffect(() => {
    const el = sectionRefs.current[selectedType as SectionType];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedType]);

  const sectionComponentMap = {
    instructors: {
      component: InstructorAndNeed,
      is: (section: Section): section is InstructorSection =>
        section.type === "instructors",
    },
    features: {
      component: CourseArrangement,
      is: (section: Section): section is FeatureSection =>
        section.type === "features",
    },
    group_join_engagement: {
      component: GroupJoinEngagement,
      is: (section: Section): section is GroupJoinEngagementSection =>
        section.type === "group_join_engagement",
    },
    pointers: {
      component: Pointers,
      is: (section: Section): section is PointerSection =>
        section.type === "pointers",
    },
    content_preview: {
      component: ContentPreview,
      is: (section: Section): section is ContentPreviewSection =>
        section.type === "content_preview",
    },
    about: {
      component: AboutSection,
      is: (section: Section): section is AboutSectionType =>
        section.type === "about",
    },
    feature_explanations: {
      component: FeatureExplanation,
      is: (section: Section): section is FeatureExplanationSectionType =>
        section.type === "feature_explanations",
    },
    free_items: {
      component: FreeItemsSection,
      is: (section: Section): section is FreeItemsSectionType =>
        section.type === "free_items",
    },
    testimonials: {
      component: TestimonialSection,
      is: (section: Section): section is TestimonialSectionType =>
        section.type === "testimonials",
    },
    requirements: {
      component: RequirementsSection,
      is: (section: Section): section is RequirementSectionType =>
        section.type === "requirements",
    },
    how_to_pay: {
      component: HowToPaySection,
      is: (section: Section): section is HowToPaySectionType =>
        section.type === "how_to_pay",
    },
    faq: {
      component: FAQSection,
      is: (section: Section): section is FAQSectionType =>
        section.type === "faq",
    },
  } as const;

  type SectionType = keyof typeof sectionComponentMap;

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
              <div
                key={section.type}
                ref={(el) => {
                  const type = section.type as SectionType;
                  sectionRefs.current[type] = el;
                }}
                className="my-20"
              >
                <Component section={section} />
              </div>
            );
          }

          return null;
        })}
      </div>

      <div className="space-y-6 my-6">
        <h2 className="text-xl font-semibold">আরও কোন জিজ্ঞাসা আছে?</h2>
        <div className="border-[1px] shadowd p-7 border-gray-400 rounded-2xl py-5 px-10 w-fit flex items-center justify-center space-x-4">
          <LuPhoneCall className="text-2xl font-semibold  text-green-500" />
          <h1 className="text-lg font-medium text-green-500">
            কল করুন <span className="font-medium">16910</span> নম্বরে
          </h1>
        </div>
      </div>
    </div>
  );
}
