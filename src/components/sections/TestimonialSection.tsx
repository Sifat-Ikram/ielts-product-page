"use client";

import { Section } from "@/type/product";
import Image from "next/image";
import {
  FaPlayCircle,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavigationOptions, Swiper as SwiperClass } from "swiper/types";

export type Testimonial = {
  id: string;
  name: string;
  profile_image: string;
  description: string;
  testimonial: string;
  video_url?: string;
  thumb?: string;
};

export type TestimonialSectionType = Omit<Section, "type" | "values"> & {
  type: "testimonials";
  values: Testimonial[];
};

export default function TestimonialSection(props: { section: unknown }) {
  const section = props.section as TestimonialSectionType;
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

  return (
    <div
      className="w-full"
      style={{ backgroundColor: section.bg_color || "transparent" }}
    >
      <h2 className="text-2xl font-semibold mb-6">{section.name}</h2>

      <div className="relative">
        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 shadow-md p-2 rounded-full cursor-pointer transition hidden md:block ${
            isBeginning ? "bg-gray-500" : "bg-gray-500"
          }`}
        >
          <FaChevronLeft className="text-white" />
        </button>
        <button
          ref={nextRef}
          className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 shadow-md p-2 rounded-full cursor-pointer transition hidden md:block ${
            isEnd ? "bg-gray-200" : "bg-gray-500"
          }`}
        >
          <FaChevronRight className="text-white" />
        </button>
        {/* Quotation Icon */}

        <Swiper
          slidesPerView={2}
          spaceBetween={10}
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
        >
          {section.values.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative bg-white border border-gray-200 rounded-xl p-4 space-y-4 shadow-sm h-full">
                {/* Video Thumbnail with Play Icon */}
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src={item.thumb || "/placeholder.jpg"}
                    alt={item.name}
                    width={500}
                    height={300}
                    className="object-cover rounded-lg"
                  />
                  {item.video_url && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-70 rounded-full p-2">
                        <FaPlayCircle className="text-red-500 cursor-pointer hover:scale-105 transition text-7xl" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute -top-4 left-3 text-red-500 p-2 rounded-full pointer-events-none">
                  <FaQuoteLeft className="text-xl" />
                </div>
                {/* Profile Info */}
                <div className="flex items-center space-x-3 pt-2">
                  <Image
                    src={item.profile_image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-10 h-10"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
