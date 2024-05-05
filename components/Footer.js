"use client";
import React from "react";
import { BsEnvelopeAtFill } from "react-icons/bs";
import Link from "next/link";
import ScrollToTopButton from '../components/ScrollToTopButton';

export const FooterTitle = ({ title }) => {
  return (
    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-sans text-[#1789b3] font-semibold mb-2">
      {title}
    </h3>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-100 sm:px-16 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 px-4 sm:px-12 justify-around">
  <div className="gap-14 items-center">
    <img src="/logo.png" alt="" className="h-16 md:h-20 xl:h-24" />
  </div>
  <div className="text-start">
    <FooterTitle title="Useful Links " />
    <ul className="flex flex-col items-start gap-1">
      <li>
        <Link href="/" className="text-base hover:text-[#1789b3] cursor-pointer">
          Home
        </Link>
      </li>
      <li>
        <Link href="/About" className="text-base hover:text-[#1789b3] cursor-pointer">
          About Us
        </Link>
      </li>
      <li>
        <Link href="/Blogs" className="text-base hover:text-[#1789b3] cursor-pointer">
          Take Survey
        </Link>
      </li>
    </ul>
  </div>
  <div className="text-start">
    <FooterTitle title="Take Survey" />
    <ul className="flex flex-col items-start gap-1">
      <li>
        <Link href="" className="text-base hover:text-[#1789b3] cursor-pointer">
          Car footprint
        </Link>
      </li>
      <li>
        <Link href="" className="text-base hover:text-[#1789b3] cursor-pointer">
          Flight footprint
        </Link>
      </li>
      <li>
        <Link href="" className="text-base hover:text-[#1789b3] cursor-pointer">
          Motorbike footprint
        </Link>
      </li>
      <li>
        <Link href="" className="text-base hover:text-[#1789b3] cursor-pointer">
          Public transport footprint
        </Link>
      </li>
      <li>
        <Link href="" className="text-base hover:text-[#1789b3] cursor-pointer">
          Self transport footprint
        </Link>
      </li>
      <li>
        <div>
          {/* Your page content */}
          <ScrollToTopButton />
        </div>
      </li>
    </ul>
  </div>
</footer>
  
  );
};

export default Footer;
