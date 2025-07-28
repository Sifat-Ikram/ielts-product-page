import { Product } from "@/type/product";
import CourseCarousel from "./media/CourseCarousel";

interface HeroProps {
  product: Product;
}

export default function Hero({ product }: HeroProps) {
  return (
    <section id="hero" className="bg-gradient-to-t from-[#1D1E3D] to-[#090B2A] text-white">
      <div className="block md:hidden">
        <CourseCarousel media={product?.media} />
      </div>
      <div className="px-3 sm:px-5 md:w-11/12 mx-auto text-left">
        <div className="w-full lg:w-2/3 py-20 space-y-3">
          <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-white">
            {product?.title}
          </h1>
          <p className="text-white text-sm md:text-base lg:text-lg font-medium flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="text-yellow-400">★★★★★</span>
            (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
          </p>
          <div
            className="text-sm md:text-sm lg:text-base leading-7 text-gray-400 lg:mr-[28px]"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          />
        </div>
      </div>
    </section>
  );
}
