import { Product } from "@/type/product";
import CourseCarousel from "./CourseCarousel";
import CourseChecklist from "./CourseChecklist";

const CourseDetails: React.FC<{ product: Product }> = ({ product }) => {
  console.log(product);

  return (
    <div className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 border-[1px] border-gray-400 bg-white absolute right-20 md:top-[50px]">
      <CourseCarousel media={product.media} />
      <CourseChecklist checklist={product.checklist} />
    </div>
  );
};
export default CourseDetails;
