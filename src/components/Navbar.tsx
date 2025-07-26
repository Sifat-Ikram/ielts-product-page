"use client";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/10mslogo-svg.svg";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "./SearchIcon";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [menuOpenMobile, setMenuOpenMobile] = useState<boolean>(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // toggleSubmenu function with typed parameter
  const toggleSubmenu = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };
  const navItems = [
    {
      label: "ক্লাস ৬-১২",
      children: [
        "এইচএসসি",
        "দশম শ্রেণি",
        "নবম শ্রেণি",
        "অষ্টম শ্রেণি",
        "সপ্তম শ্রেণি",
        "ষষ্ঠ শ্রেণি",
      ],
    },
    {
      label: "স্কিলস",
      children: [
        "সকল কোর্সসমূহ",
        "ভাষা শিক্ষা",
        "ফ্রিল্যান্সিং",
        "বান্ডেল",
        "স্কিলস এন্ড আইটি",
        "ডিজাইন এন্ড ক্রিয়েটিভ",
        "ক্যারিয়ার রেডিনেস",
        "কিডস কোর্সসমূহ",
        "প্রফেসনাল কোর্সসমূহ",
        "ফ্রি কোর্সসমূহ",
      ],
    },
    {
      label: "ভর্তি পরীক্ষা",
    },
    {
      label: "অনলাইন ব্যাচ",
      children: ["অনলাইন ব্যাচ (৬ষ্ঠ-১০ম শ্রেণি)", "এইচএসসি"],
    },
    {
      label: "ইংলিশ সেন্টার",
      children: [
        "সকল প্রোগ্রামসমূহ",
        "IELTS প্রোগ্রাম",
        "স্পোকেন ইংলিশ (জুনিয়র)",
        "ইংলিশ ফাউন্ডেশন প্রোগ্রাম",
        "কিডস ইংলিশ",
      ],
    },
    {
      label: "আরো",
      children: [
        "চাকরি প্রস্তুতি প্রোগ্রামসমূহ",
        "ব্লগ",
        "বুক স্টোর",
        "ফ্রি নোটস অ্যান্ড গাইডস",
        "একাডেমিক ডিজিটাল কন্টেন্ট",
        "সার্টিফিকেট ভেরিফাই করুন",
        "ক্যারিয়ার/ নিয়োগ বিজ্ঞপ্তি",
        "শিক্ষক হিসেবে যোগ দিন",
        "অ্যাফিলিয়েট হিসেবে যোগ দিন",
      ],
    },
  ];

  return (
    <nav className="w-full sticky top-0 shadow bg-white">
      <div className="flex items-center justify-between px-10 md:px-8 lg:px-10">
        <div className="flex items-center space-x-1">
          {/* Mobile Nav Menu on Hover */}
          <div className="relative lg:hidden py-5">
            {/* Menu Icon */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              className="text-gray-700"
              type="button"
            >
              <HiOutlineMenu className="h-6 w-6" />
            </button>

            {/* Nav Items - show only if menuOpen */}
            {menuOpen && (
              <div className="absolute left-0 top-full z-30 bg-white rounded-md shadow-lg">
                <ul className="w-28">
                  {navItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="relative px-4 py-2 whitespace-nowrap"
                    >
                      <button
                        onClick={() => toggleSubmenu(idx)}
                        className="flex justify-between items-center w-full hover:bg-gray-100 text-sm"
                        type="button"
                      >
                        {item.label}
                      </button>

                      {/* Submenu */}
                      {openIndex === idx && (
                        <ul className="absolute left-full top-0 bg-white shadow-lg rounded-md w-[160px]">
                          {item.children?.map((child, i) => (
                            <li
                              key={i}
                              className="p-2 hover:bg-gray-100 text-sm"
                            >
                              {child}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="10 Minute School Logo"
              width={10}
              height={10}
              priority
              className="h-6 w-14 sm:h-8 sm:w-20 md:h-10 md:w-[130px]"
            />

            {/* Search Bar */}
            <div className="hidden md:flex items-center border border-gray-600 rounded-full px-5 py-2 w-[250px] lg:w-[300px] bg-gray-100">
              <SearchIcon className="w-8 h-8 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="ক্লাস কোর্স, স্কুল প্রোগ্রাম সার্চ করুন"
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center space-x-4 text-sm font-medium py-7 text-gray-600">
          {navItems.map((item, idx) => (
            <li key={idx} className="relative group cursor-pointer">
              <button
                onClick={() => toggleSubmenu(idx)}
                className="flex justify-between items-center w-full"
                type="button"
              >
                {item.label}
                <span>
                  {item.children && item.children.length > 0 && (
                    <span className="transition-transform">
                      {/* Arrow changes on hover using group-hover */}
                      <IoIosArrowDown className="group-hover:hidden block" />
                      <IoIosArrowUp className="group-hover:block hidden" />
                    </span>
                  )}
                </span>
              </button>

              {/* Dropdown */}
              <ul className="absolute -left-1/2 top-full z-20 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px]">
                {item.children?.map((child, i) => (
                  <React.Fragment key={i}>
                    {/* 5th item */}
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                    >
                      {child}
                    </li>

                    {item.label === "আরো" && i === 5 && (
                      <li
                        className="border-t border-dashed border-gray-300 my-2 pointer-events-none"
                        aria-hidden="true"
                      />
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <SearchIcon className="w-8 h-8 text-gray-500 mr-2 block md:hidden" />
          {/* Language Toggle */}
          <button className="hidden sm:flex items-center space-x-1 border border-gray-600 rounded px-2.5 py-1 text-xs font-medium text-gray-700 hover:shadow-sm">
            <span className="font-bangla text-gray-500">অা</span>
            <span className="text-xs text-gray-500 -ml-1 mt-1.5">A</span>
            <span className="text-sm font-normal">EN</span>
          </button>

          {/* Phone */}
          <div className="flex items-center space-x-1 text-green-600 font-semibold">
            <FaPhoneAlt className="w-4 h-4" />
            <span className="hidden md:block">16910</span>
          </div>

          {/* Login Button */}
          <Link
            href="#"
            className="bg-green-600 text-white px-4 md:px-3 lg:px-5 py-1 lg:py-1.5 rounded-md text-xs lg:text-sm font-medium hover:bg-green-700"
          >
            লগ-ইন
          </Link>
        </div>
      </div>
      <ul className="flex lg:hidden items-center justify-center space-x-3 sm:space-x-5 text-sm font-medium py-3 text-gray-600">
        {navItems
          .filter(
            (item) =>
              item.label !== "ভর্তি পরীক্ষা" && item.label !== "ইংলিশ সেন্টার"
          )
          .map((item, idx) => (
            <li key={idx} className="relative group cursor-pointer">
              <button
                onClick={() => setMenuOpenMobile((prev) => !prev)}
                className="flex justify-between items-center w-full text-xs"
                type="button"
              >
                {item.label}
                <span>
                  {item.children && item.children.length > 0 && (
                    <span className="transition-transform">
                      {menuOpenMobile ? (
                        <IoIosArrowUp className="ml-1" />
                      ) : (
                        <IoIosArrowDown className="ml-1" />
                      )}
                    </span>
                  )}
                </span>
              </button>

              {/* Dropdown */}
              {menuOpenMobile && (
                <ul className="absolute -left-1/2 top-full z-20 hidden group-hover:block bg-white shadow-lg mt-2 rounded-md">
                  {item.children?.map((child, i) => (
                    <>
                      {/* 5th item */}
                      <li
                        key={i}
                        className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap text-sm"
                      >
                        {child}
                      </li>

                      {item.label === "আরো" && i === 5 && (
                        <li
                          className="border-t border-dashed border-gray-300 my-2 pointer-events-none"
                          aria-hidden="true"
                        />
                      )}
                    </>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
}
