"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Section } from "@/type/product";
import type { NavigationOptions, Swiper as SwiperClass } from "swiper/types";

interface CarouselNavigationProps {
  sections: Section[];
  setSelectedType: (type: string) => void;
}

export default function CarouselNavigation({
  sections,
  setSelectedType,
}: CarouselNavigationProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      typeof swiperRef.current.params.navigation === "object"
    ) {
      const nav = swiperRef.current.params.navigation as NavigationOptions;
      nav.prevEl = prevRef.current;
      nav.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const handleClick = (type: string) => {
    setSelectedType(type);
  };

  const filteredSections = sections.filter(
    (section) => section.name && section.name.trim().length > 0
  );

  return (
    <div className="bg-white sticky top-[76px] z-40 py-4 px-3 shadow-sm border-b-[1px] border-gray-400">
      <div className="relative">
        {/* Swiper */}
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="mySwiper px-10"
        >
          {filteredSections.map((section) => (
            <SwiperSlide key={section.type} className="w-auto">
              <button
                onClick={() => handleClick(section.type)}
                className="text-center text-sm whitespace-nowrap"
              >
                {section.name}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          aria-label="Scroll left"
          className={`absolute -left-10 top-1/2 -translate-y-1/2 cursor-pointer z-50 p-2 rounded-full ${
            isBeginning ? "bg-gray-200" : "bg-gray-500"
          }`}
        >
          <FiChevronLeft size={20} className="text-white" />
        </button>
        <button
          ref={nextRef}
          aria-label="Scroll right"
          className={`absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer z-50 p-2 rounded-full ${
            isEnd ? "bg-gray-200" : "bg-gray-500"
          }`}
        >
          <FiChevronRight size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
}
