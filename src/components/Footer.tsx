// components/Footer.tsx

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import logo from "../assets/10mslogo-svg.svg";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-col-4 gap-8">
        {/* Logo and App Links */}
        <div className="space-y-4">
          {/* Logo */}
          <div>
            <Image
              src={logo}
              alt="10 Minute School Logo"
              width={160}
              height={40}
            />
          </div>
          <p className="text-sm">ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</p>
          <div className="flex gap-4">
            <Image src={logo} alt="Google Play" width={150} height={45} />
            <Image src={logo} alt="App Store" width={150} height={45} />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-lg mb-4">কোম্পানি</h3>
          <ul className="space-y-2 text-sm">
            <li>ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি</li>
            <li>শিক্ষক হিসেবে যোগ দিন</li>
            <li>অ্যাফিলিয়েট হিসেবে যোগ দিন</li>
            <li>প্রাইভেসি পলিসি</li>
            <li>রিফান্ড পলিসি</li>
            <li>ব্যবহারকারীর শর্তাবলি</li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h3 className="font-bold text-lg mb-4">অন্যান্য</h3>
          <ul className="space-y-2 text-sm">
            <li>ব্লগ</li>
            <li>বুক স্টোর</li>
            <li>ফ্রি নোটস ও গাইড</li>
            <li>চাকরি প্রস্তুতি কোর্সসমূহ</li>
            <li>সার্টিফিকেট ভেরিফাই করুন</li>
            <li>ফ্রি ডাউনলোড</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">আমাদের যোগাযোগ মাধ্যম</h3>
          <div className="text-sm space-y-2">
            <p>
              কল করুন:{" "}
              <span className="text-green-600 font-semibold">16910</span> (24x7)
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
              <span className="text-green-600 font-semibold">
                support@10minuteschool.com
              </span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl text-black">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-gray-600">
        স্বত্ব © ২০১৫ - ২০২৫ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত
      </div>
    </footer>
  );
}
