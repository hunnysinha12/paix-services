"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles";
import { slideIn, staggerContainer, textVariant } from "../../utils/motion";

import AboutSection from "./components/AboutSection";
import DepartmentsSlider from "./components/DepartmentsSlider";
import HowItWorks from "./components/HowItWorks";
import Staff from "./components/Staff";
import AppointmentBooking from "./components/Appointment";
import Explore from "./components/Explore";
import WhatsNew from "./components/WhatsNew";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";

// ✅ Component name must be PascalCase
const Page = () => {
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

  return (
    <div className="overflow-hidden">
      {/* ✅ Hero Section */}
      <Hero />
      {/* ✅ Services Section */}

      {/* ✅ Other Components */}
      <WhatsNew />
      <GetStarted />
      {/* <AboutSection /> */}
      {/* <DepartmentsSlider /> */}
      <Explore />
      <HowItWorks />
      <Staff />
      <AppointmentBooking id="appointmentbooking" />
    </div>
  );
};

export default Page;
