"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles";
import { slideIn, staggerContainer, textVariant } from "../../utils/motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AboutSection from "./components/AboutSection";
import DepartmentsSlider from "./components/DepartmentsSlider";
import HowItWorks from "./components/HowItWorks";
import Staff from "./components/Staff";
import AppointmentBooking from "./components/Appointment";
import Explore from "./components/Explore";
import WhatsNew from "./components/WhatsNew";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import FeaturesDemo from "./components/Cards";
import RevenueCycleSection from "./components/RevenueCycleSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import Footer from "./components/Footer";

// ✅ Component name must be PascalCase
const Page = () => {
  let [showContent, setShowContent] = useState(false);
  const [isDesktop, setIsDesktop] = React.useState(true);
  const [navBg, setNavBg] = React.useState(false);

  // ✅ Handle responsive screen size
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // ✅ Handle navbar background on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Services data

  const services = [
    {
      id: 0,
      title: "Hospital Management",
      img: "/checklist.png",
      desc: "Simplify your hospital's operations with smart management tools. From patient registration to discharge, streamline workflows, reduce wait times, and enhance the overall patient experience.",
      mobilePath: "services/rcm",
    },
    {
      id: 1,
      title: "Electronic Health Records",
      img: "/budget.png",
      desc: "Securely manage and access patient data with our integrated EHR solutions. Improve coordination among doctors, ensure accurate treatment histories, and deliver consistent, high-quality care.",
      mobilePath: "services/clinical",
    },
    {
      id: 2,
      title: "Telehealth & Mobile Care",
      img: "/messaging.png",
      desc: "Extend healthcare beyond hospital walls. Connect with patients remotely, manage follow-ups, and offer timely care anytime, anywhere through our reliable telehealth platform.",
      mobilePath: "services/mobile",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline();

    // Smooth rotation with elastic easing
    tl.to(".vi-mask-group", {
      rotate: 15,
      duration: 1.8,
      ease: "power2.inOut",
      transformOrigin: "50% 50%",
    })
      // Scale up with smooth exponential easing
      .to(".vi-mask-group", {
        scale: 12,
        duration: 2.2,
        delay: -1.5,
        ease: "power3.inOut",
        transformOrigin: "50% 50%",
      })
      // Fade out smoothly
      .to(".vi-mask-group", {
        opacity: 0,
        duration: 0.8,
        delay: -0.8,
        ease: "power2.inOut",
      })
      // Remove loader and show content
      .to(".svg", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: function () {
          const svgElement = document.querySelector(".svg");
          if (svgElement) {
            svgElement.style.display = "none";
          }
          setShowContent(true);
        },
      });
  });

  return (
    <div className="overflow-hidden">
      {/* Loading Animation */}
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] bg-gradient-to-br from-[#000514] via-[#001028] to-[#000] transition-opacity duration-500">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Gradient for background */}
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#001028" />
              <stop offset="50%" stopColor="#000514" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>

            {/* Mask for reveal effect */}
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black, sans-serif"
                  fontWeight="900"
                  letterSpacing="10"
                  style={{
                    filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))",
                  }}
                >
                  PS
                </text>
              </g>
            </mask>

            {/* Blur filter for smooth transition */}
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
            </filter>
          </defs>

          {/* Background image with mask */}
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
            style={{
              filter: "brightness(1.2) contrast(1.1)",
            }}
          />

          {/* Overlay gradient for depth */}
          <rect
            width="100%"
            height="100%"
            fill="url(#bgGradient)"
            opacity="0.3"
            mask="url(#viMask)"
          />
        </svg>

        {/* Loading indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content with fade in */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* ✅ Hero Section */}
          <Hero />

          <GetStarted />
          <RevenueCycleSection />
          <CaseStudiesSection />

          {/* <HowItWorks /> */}
          <Staff />
          <AppointmentBooking />
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default Page;
