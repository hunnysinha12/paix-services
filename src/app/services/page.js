"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

import Link from "next/link";

const tabsData = [
  {
    id: 0,
    label: "RCM SERVICES",
    title: "RCM Services",
    description:
      "Optimize revenue cycle management with our RPA solutions for healthcare. Our intelligent bots streamline billing, claims, and payment posting, ensuring accuracy, efficiency, and reduced costs. Empower your team to focus on strategic initiatives while enhancing workflow, productivity, and profitability with seamless automation tailored to healthcare's unique demands.",
    image: "revenue.png",
    hasSlider: false,
  },
  {
    id: 1,
    label: "CLINICAL EHR",
    hasSlider: true,
    slides: [
      {
        title: "Electronic Health Records",
        description:
          "Transform your electronic health records management with intelligent automation. Streamline patient data entry, documentation, and clinical workflows. Our solutions ensure accuracy, compliance, and seamless integration across all healthcare systems.",
        image: "/family.png",
      },
      {
        title: "Patient Data Management",
        description:
          "Centralize patient information with secure, real-time access to medical records. Enable healthcare providers to make informed decisions quickly with comprehensive patient histories, lab results, and treatment plans at their fingertips.",
        image: "emergency.png",
      },
    ],
  },
  {
    id: 2,
    label: "MOBILE PLATFORM",
    hasSlider: true,
    slides: [
      {
        title: "Mobile Application for Providers",
        description:
          "Our provider mobile platform is a comprehensive mobile app designed to optimize healthcare workflows which simplifies appointment tracking, patient round management, and offers a secure messaging system for seamless communication between doctors and nurses.",
        image: "/provider.png",
      },
      {
        title: "Patient Round Management",
        description:
          "Physicians can efficiently take notes, prescribe medications, and manage tests or procedures during rounds. Real-time updates ensure all team members stay informed about patient status and treatment plans, improving coordination and care delivery.",
        image: "/patient.png",
      },
    ],
  },
];

export default function RCMVerticalTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Set initial active tab from URL parameter
  React.useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tabParam = searchParams.get("tab");
    if (tabParam && !isNaN(parseInt(tabParam))) {
      setActiveTab(parseInt(tabParam));
    }
  }, []);

  // Auto slide effect for tabs with sliders
  React.useEffect(() => {
    const currentTab = tabsData[activeTab];
    if (currentTab.hasSlider && currentTab.slides) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % currentTab.slides.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [activeTab, currentSlide]);

  // Reset slide when changing tabs
  React.useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab]);

  return (
    <div className="min-h-screen px-10 bg-black text-white flex items-center">
      <div className="container mx-auto py-16">
        <div className="flex justify-around items-center gap-16">
          {/* Left Side - Vertical Tabs */}
          <div className="flex-shrink-0">
            <div className="flex flex-col gap-12">
              {tabsData.map((tab, ind) => (
                <button
                  type="button"
                  key={ind}
                  onClick={() => setActiveTab(tab.id)}
                  className="group flex items-start gap-4 text-left transition-all duration-300 relative"
                >
                  {/* Tab label */}
                  <div
                    key={ind}
                    className={`text-sm font-medium tracking-wider transition-all duration-300 ${
                      activeTab === tab.id
                        ? "text-cyan-400 scale-105"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      transform: "rotate(180deg)",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {tab.label}
                  </div>

                  {/* Arrow indicator */}
                  <div
                    className={`absolute -right-8 top-1/2 -translate-y-1/2 transition-all duration-300 z-10 ${
                      activeTab === tab.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    }`}
                  >
                    <ChevronRight
                      className="w-5 h-5 text-cyan-400"
                      strokeWidth={3}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Center - Content */}
          <div className="flex-1 max-w-xl relative min-h-[300px]">
            {tabsData.map((tab) => (
              <div
                key={tab.id}
                className={`transition-all duration-500 ${
                  activeTab === tab.id
                    ? "opacity-100 translate-x-0 relative pointer-events-auto"
                    : "opacity-0 absolute pointer-events-none -translate-x-8 overflow-hidden"
                }`}
                style={{ top: 0, left: 0, width: "100%" }}
              >
                {tab.hasSlider ? (
                  // Slider content
                  <div className="relative">
                    {tab.slides.map((slide, idx) => (
                      <div
                        key={idx}
                        className={`transition-all duration-700 ${
                          currentSlide === idx
                            ? "opacity-100 translate-x-0 relative pointer-events-auto"
                            : "opacity-0 absolute pointer-events-none translate-x-8 overflow-hidden"
                        }`}
                        style={{ top: 0, left: 0, width: "100%" }}
                      >
                        <h2 className="text-4xl font-bold mb-6 text-gray-100">
                          {slide.title}
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-lg mb-6">
                          {slide.description}
                        </p>
                      </div>
                    ))}
                    {/* Slider indicators below description, outside image */}
                    <div className="flex gap-2 mt-2 mb-2 justify-start">
                      {tab.slides.map((_, sidx) => (
                        <button
                          key={sidx}
                          onClick={() => setCurrentSlide(sidx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentSlide === sidx
                              ? "bg-cyan-400 w-8"
                              : "bg-gray-500 hover:bg-gray-400"
                          }`}
                          style={{ cursor: "pointer" }}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  // Static content
                  <>
                    <h2 className="text-4xl font-bold mb-6 text-gray-100">
                      {tab.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-lg mb-6">
                      {tab.description}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="flex-shrink-0 relative w-[35rem] h-[35rem]">
            {tabsData.map((tab) => (
              <div
                key={tab.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeTab === tab.id
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
                style={{ width: "100%", height: "100%" }}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 z-10" />

                  {/* Background image or slider */}
                  {tab.hasSlider ? (
                    <div className="relative w-full h-full">
                      <img
                        src={tab.slides[currentSlide].image}
                        alt={tab.slides[currentSlide].title}
                        className="absolute inset-0 w-full h-full  object-fill opacity-40 transition-opacity duration-1000"
                      />
                    </div>
                  ) : (
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className="w-full h-full  object-fill opacity-40"
                      style={{ width: "100%", height: "100%" }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
