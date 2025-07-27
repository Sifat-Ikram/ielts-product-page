import Image from "next/image";
import { Checklist } from "@/type/product";

interface Props {
  checklist: Checklist[];
}

const CourseChecklist: React.FC<Props> = ({ checklist }) => {
  return (
    <div className="w-full p-4 border-x border-b rounded-lg shadow-sm space-y-4">
      {/* Price & Discount */}
      <div className="text-xl font-bold text-gray-800 flex items-center gap-3">
        <span className="text-black text-2xl">৳3850</span>
        <span className="line-through text-gray-500 text-base ml-2">৳5000</span>
        <svg width="120" height="30" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,15 20,0 120,0 120,30 20,30" fill="#f26522" />
          <circle cx="15" cy="15" r="2" fill="white" />
          <text x="30" y="20" fill="white" fontSize="12" fontWeight="bold">
            ১১৫০ ৳ ছাড়
          </text>
        </svg>
      </div>

      {/* CTA Button */}
      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-bold transition duration-200">
        কোর্সটি কিনুন
      </button>

      {/* Divider */}
      <hr />

      {/* Checklist Title */}
      <h3 className="font-semibold text-lg text-gray-800">
        এই কোর্সে যা থাকবে
      </h3>

      {/* Checklist Items */}
      <div className="space-y-3">
        {checklist.map((item) => (
          <div key={item.id} className="flex items-start space-x-3">
            <Image
              src={item.icon}
              alt="icon"
              width={20}
              height={20}
              className="mt-1"
            />
            <span className="text-sm text-gray-800">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseChecklist;
