"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import type { Swiper as SwiperClass } from "swiper/types";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaPlayCircle } from "react-icons/fa";

type MediaItem = {
  name: string;
  title: string;
  instructor: string;
  price: string;
  resource_type: "image" | "video";
  resource_value: string;
  thumbnail_url?: string;
};

type Props = {
  media: MediaItem[];
};

const CourseCarousel: React.FC<Props> = ({ media }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const slides = media.filter(
    (item) =>
      item.resource_type === "image" ||
      (item.resource_type === "video" && item.thumbnail_url)
  );

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      typeof swiperRef.current.params.navigation === "object"
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [swiperRef, prevRef, nextRef]);

  return (
    <div className="p-1 space-y-3">
      <div className="relative">
        {/* Navigation buttons */}
        <button
          ref={prevRef}
          aria-label="Previous"
          className="absolute z-10 top-1/2 -translate-y-1/2 left-2 bg-white text-gray-600 shadow p-1 rounded-full"
        >
          <FiChevronLeft size={24} />
        </button>

        <button
          ref={nextRef}
          aria-label="Next"
          className="absolute z-10 top-1/2 -translate-y-1/2 right-2 bg-white text-gray-600 shadow p-1 rounded-full"
        >
          <FiChevronRight size={24} />
        </button>

        {/* Main Swiper */}
        <Swiper
          modules={[Navigation, Thumbs]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={10}
          slidesPerView={1}
          className="overflow-hidden"
        >
          {slides.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative border border-gray-300 overflow-hidden group">
                <Image
                  src={
                    item.resource_type === "image"
                      ? item.resource_value
                      : item.thumbnail_url || ""
                  }
                  alt={`Slide ${idx + 1}`}
                  width={700}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                {item.resource_type === "video" && (
                  <FaPlayCircle className="absolute inset-0 m-auto text-white drop-shadow-lg text-5xl z-10 group-hover:scale-110 transition-transform" />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={5}
        spaceBetween={10}
        watchSlidesProgress
        className="!p-2"
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={`thumb-${idx}`}>
            <div className="border border-gray-300 overflow-hidden">
              <Image
                src={
                  item.resource_type === "image"
                    ? item.resource_value
                    : item.thumbnail_url || ""
                }
                alt={`Thumbnail ${idx + 1}`}
                width={100}
                height={60}
                className="w-full h-[80px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseCarousel;
