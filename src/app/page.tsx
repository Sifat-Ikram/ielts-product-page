"use client";
import Hero from "@/components/Hero";
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

  console.log(product);

  return (
    <div>
      <Hero title={product?.title} description={product?.description} />
      <div className="px-3 sm:px-5 md:w-11/12 mx-auto">
        <SectionContent sections={product.sections} />
      </div>
      <SimilarCourse media={product.media ?? []} />
    </div>
  );
}
