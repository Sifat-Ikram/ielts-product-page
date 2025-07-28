"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CourseChecklist from "@/components/media/CourseChecklist";
import CourseDetails from "@/components/media/CourseDetails";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import SectionContent from "@/components/SectionContent";
import SimilarCourse from "@/components/SimilarCourse";
import { useProduct } from "@/lib/api";

export default function Home() {
  const { product, loading, error } = useProduct("bn");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="relative min-h-screen">
      <Hero product={product} />
      <div className="px-3 sm:px-5 md:w-11/12 mx-auto">
        <div
          id="checklist"
          className="max-sm:border-b-4 border-gray-400 block md:hidden"
        >
          <CourseChecklist checklist={product.checklist} />
        </div>
        <SectionContent product={product} />
      </div>

      <SimilarCourse media={product.media ?? []} />

      <div className="hidden md:block">
        <CourseDetails product={product} />
      </div>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
