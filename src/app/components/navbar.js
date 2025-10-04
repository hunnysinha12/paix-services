"use client";

import React from "react";
import Link from "next/link"; // ✅ Import Link for navigation
import Image from "next/image";
import Logo from "@/../public/logo.png";

const Navbar = () => {
  const [navBg, setNavBg] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed px-10 top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out ${
        navBg ? "bg-black/10 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* ✅ Logo with Next.js Link */}
        <Link href="/" className="flex items-center">
          {/* If you want to use the image logo */}
          <Image src={Logo} alt="Healthcare Logo" width={120} height={50} />
        </Link>

        {/* ✅ Button inside Link */}
        <Link href="/signup">
          <button
            className="bg-[linear-gradient(98deg,#0931b3,#2e80ed)]
                     border-[3px] border-[#3b3737]
                     rounded-[8px]
                     px-4 py-2 sm:px-[16px] sm:py-[10px]
                     font-bold
                     text-[10px] sm:text-[14px]
                     text-white
                     cursor-pointer
                     w-[80px] h-[40px] sm:w-[96px] sm:h-[46px]
                     transition duration-300 hover:scale-105"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
