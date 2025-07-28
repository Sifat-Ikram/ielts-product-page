import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import logo from "../assets/10mslogo-svg.svg";
import google from "../assets/google.jpeg";
import apple from "../assets/apple.jpeg";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-3 sm:py-6 md:py-10">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-8">
        {/* Logo and App Links */}
        <div className="space-y-4 w-full lg:w-1/4">
          {/* Logo */}
          <div>
            <Image
              src={logo}
              alt="10 Minute School Logo"
              width={160}
              height={40}
            />
          </div>
          <p className="text-sm md:text-base">
            ডাউনলোড করুন আমাদের মোবাইল অ্যাপ
          </p>
          <div className="flex gap-3 flex-wrap sm:flex-nowrap">
            <Image src={google} alt="Google Play" width={140} height={45} />
            <Image src={apple} alt="App Store" width={140} height={45} />
          </div>
        </div>

        {/* Links and Contact Info */}
        <div className="w-full flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-4">কোম্পানি</h3>
            <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
              <li className="text-sm font-medium hover:text-green-500 md:text-base">
                ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি
              </li>
              <li className="text-sm font-medium hover:text-green-500 md:text-base">
                শিক্ষক হিসেবে যোগ দিন
              </li>
              <li className="text-sm font-medium hover:text-green-500 md:text-base">
                অ্যাফিলিয়েট হিসেবে যোগ দিন
              </li>
              <li className="text-sm font-medium hover:text-green-500 md:text-base">
                প্রাইভেসি পলিসি
              </li>
              <li className="text-sm font-medium hover:text-green-500 md:text-base">
                রিফান্ড পলিসি
              </li>
              <li className="text-sm font-medium hover:text-green-500 md:text-base">
                ব্যবহারকারীর শর্তাবলি
              </li>
            </ul>
          </div>

          {/* Others */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-4">অন্যান্য</h3>
            <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
              <li className="text-sm font-medium hover:text-green-500 md:text-base">
                ব্লগ
              </li>
              <li className="text-sm font-medium hover:text-green-500 md:text-base">
                বুক স্টোর
              </li>
              <li className="text-sm font-medium hover:text-green-500 md:text-base">
                ফ্রি নোটস ও গাইড
              </li>
              <li className="text-sm font-medium hover:text-green-500 md:text-base">
                চাকরি প্রস্তুতি কোর্সসমূহ
              </li>
              <li className="text-sm font-medium hover:text-green-500 md:text-base">
                সার্টিফিকেট ভেরিফাই করুন
              </li>
              <li className="text-sm font-medium hover:text-green-500 md:text-base">
                ফ্রি ডাউনলোড
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold max-sm:text-center text-nowrap text-sm sm:text-base md:text-lg mb-4">
              আমাদের যোগাযোগ মাধ্যম
            </h3>
            <div className="hidden md:flex flex-col text-sm md:text-base space-y-2">
              <p>
                কল করুন:{" "}
                <span className="text-green-600 font-semibold">16910</span>{" "}
                (24x7)
              </p>
              <p>
                হোয়াটসঅ্যাপ:{" "}
                <span className="text-green-600 font-semibold">
                  +8801896016252
                </span>{" "}
                (24x7)
              </p>
              <p>
                দেশের বাইরে থেকে:{" "}
                <span className="text-green-600 font-semibold">
                  +880 9610916910
                </span>
              </p>
              <p>
                ইমেইল:{" "}
                <span className="text-green-600 font-semibold break-all">
                  support@10minuteschool.com
                </span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4 text-lg md:text-xl text-black">
              <a
                href="#"
                className="rounded-md bg-black p-2 text-lg text-white"
              >
                <BsFacebook />
              </a>
              <a
                href="#"
                className="rounded-md bg-black p-2 text-lg text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="rounded-md bg-black p-2 text-lg text-white"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="rounded-md bg-black p-2 text-lg text-white"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="rounded-md bg-black p-2 text-lg text-white"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs sm:text-sm mt-10 text-gray-600 px-4">
        স্বত্ব © ২০১৫ - ২০২৫ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত
      </div>
    </footer>
  );
}
