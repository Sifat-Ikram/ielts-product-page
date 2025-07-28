"use client";
import { useEffect, useState } from "react";

export default function MobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const hero = document.getElementById("hero");
    const checklist = document.getElementById("checklist");

    if (!navbar || !hero || !checklist) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isHeroVisible = entries.find(
          (e) => e.target.id === "hero"
        )?.isIntersecting;
        const isChecklistVisible = entries.find(
          (e) => e.target.id === "checklist"
        )?.isIntersecting;
        const isNavbarVisible = entries.find(
          (e) => e.target.id === "navbar"
        )?.isIntersecting;
        setShow(!isHeroVisible && !isChecklistVisible && !isNavbarVisible);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(navbar);
    observer.observe(hero);
    observer.observe(checklist);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white px-4 py-3 border-t border-gray-200 sm:hidden transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="text-xl font-bold text-gray-800 flex items-center gap-3 mb-2">
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
      <button className="w-full bg-green-500 border-b-2 border-green-700 hover:bg-green-600 text-white py-2 rounded font-bold transition duration-200">
        কোর্সটি কিনুন
      </button>
    </div>
  );
}
