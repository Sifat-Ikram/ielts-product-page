"use client";
import { TbCurrencyTaka } from "react-icons/tb";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { NavigationOptions, Swiper as SwiperClass } from "swiper/types";
import Image from "next/image";
import { FiChevronLeft } from "react-icons/fi";

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

const SimilarCourse: React.FC<Props> = ({ media }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      typeof swiperRef.current.params.navigation === "object"
    ) {
      const nav = swiperRef.current.params.navigation as NavigationOptions;
      nav.prevEl = prevRef.current;
      nav.nextEl = null; // no right button
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [swiperRef, prevRef]);

  const slides = media.filter(
    (item) =>
      item.resource_type === "image" ||
      (item.resource_type === "video" && item.thumbnail_url)
  );

  return (
    <div className="relative w-11/12 mx-auto space-y-10 my-16">
      <h1 className="text-xl font-semibold">আপনার জন্য আরও কিছু কোর্স</h1>
      <div className="absolute right-5 top-5">
        <button
          ref={prevRef}
          aria-label="Scroll left"
          className={`cursor-pointer z-50 p-2 rounded-full ${
            isBeginning ? "bg-gray-200 cursor-not-allowed" : "bg-gray-500"
          }`}
        >
          <FiChevronLeft size={20} className="text-white" />
        </button>
      </div>
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: null,
          }}
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="rounded-md overflow-hidden"
        >
          {slides.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="border-[1px] border-gray-400 hover:border-green-500 rounded-md">
                <Image
                  src={
                    item.resource_type === "image"
                      ? item.resource_value
                      : item.thumbnail_url || ""
                  }
                  height={224}
                  width={350}
                  alt={`Slide ${idx + 1}`}
                  className="object-cover h-40 w-80"
                />
                <div className="p-2 space-y-2">
                  <div className="space-y-1">
                    <h1 className="text-lg font-semibold text-gray-800">
                      {item.title ? item.title : "No title"}
                    </h1>
                    <h1 className="text-base font-medium text-gray-500">
                      {item.title ? item.title : "No instructor"}
                    </h1>
                  </div>
                  <h1 className="text-lg font-semibold text-green-500 gap-1 flex items-center">
                    <TbCurrencyTaka /> {item.title ? item.title : "1950"}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarCourse;
