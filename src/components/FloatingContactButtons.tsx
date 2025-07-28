"use client";

import { FaCommentDots, FaPhoneAlt } from "react-icons/fa";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-4 z-50">
      {/* Chat Button */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <FaCommentDots className="text-white text-xl" />
      </a>

      {/* Call Button */}
      <a
        href="#"
        className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <FaPhoneAlt className="text-white text-xl" />
      </a>
    </div>
  );
}
