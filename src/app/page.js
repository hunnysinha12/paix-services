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
      desc: "Simplify your hospital’s operations with smart management tools. From patient registration to discharge, streamline workflows, reduce wait times, and enhance the overall patient experience.",
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

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  return (
    <div className="overflow-hidden ">
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] bg-[#000] ">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
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
                  fontFamily="Arial Black"
                >
                  PS
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <>
          {/* ✅ Hero Section */}
          <Hero />
          {/* ✅ Services Section */}

          {/* ✅ Other Components */}
          <FeaturesDemo />
          <GetStarted />
          {/* <AboutSection /> */}
          {/* <DepartmentsSlider /> */}
          <Explore />
          <HowItWorks />
          <Staff />
          <AppointmentBooking id="appointmentbooking" />
        </>
      )}
    </div>
  );
};

export default Page;
