"use client";
import React, { useEffect, useRef, useState } from "react";

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(null);
  const sectionRef = useRef(null);

  const steps = [
    {
      id: 1,
      title: "Get Appointment",
      desc: "Easily schedule your medical appointments with a few clicks.",
      img: "/working-1.webp",
      gradient: "from-cyan-400 via-blue-500 to-blue-600",
      glow: "shadow-cyan-500/50",
      icon: "📅",
    },
    {
      id: 2,
      title: "Start Check-Up",
      desc: "Begin your consultation and health check-up with our experts.",
      img: "/working-2.webp",
      gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
      glow: "shadow-purple-500/50",
      icon: "🩺",
    },
    {
      id: 3,
      title: "Enjoy Healthy Life",
      desc: "Follow recommendations and live a healthier, happier life.",
      img: "/working-3.webp",
      gradient: "from-amber-400 via-orange-500 to-rose-600",
      glow: "shadow-orange-500/50",
      icon: "❤️",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 lg:px-10 py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#001028] via-[#000718] to-[#000514]"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Header Section */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <p className="text-orange-500 italic mb-3 text-lg font-medium">
            What we do for our patients
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent leading-tight">
            Our Medical Departments Services
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Medical care is the practice of providing diagnosis, treatment, and
            preventive care for various illnesses, injuries, and diseases. It
            involves a wide range of healthcare professionals such as doctors,
            nurses, pharmacists, therapists, and many more, who work together to
            provide the best possible care for patients.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto relative">
          {/* Connection lines */}
          <svg
            className="hidden md:block absolute top-40 left-0 w-full h-1 -z-10"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <line
              x1="15%"
              y1="0"
              x2="85%"
              y2="0"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="10"
                dur="1s"
                repeatCount="indefinite"
              />
            </line>
          </svg>

          {steps.map((step, idx) => (
            <div
              key={step.id}
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Floating number badge */}
              <div
                className={`absolute -top-6 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 ${
                  activeStep === step.id
                    ? "scale-125 -translate-y-2"
                    : "scale-100"
                }`}
              >
                <div
                  className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center font-black text-2xl text-white shadow-2xl ${step.glow} rotate-12 hover:rotate-0 transition-transform duration-500`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-white/20 backdrop-blur-sm"></div>
                  <span className="relative z-10">{step.id}</span>
                  {activeStep === step.id && (
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} animate-ping`}
                    ></div>
                  )}
                </div>
              </div>

              {/* Main card */}
              <div
                className={`group relative mt-8 transition-all duration-700 ${
                  activeStep === step.id
                    ? "transform -translate-y-6 scale-105"
                    : ""
                }`}
              >
                {/* Animated gradient border */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${step.gradient} rounded-3xl blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:animate-gradient-rotate`}
                ></div>

                {/* Card content */}
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>

                  {/* Icon badge */}
                  <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110 transform">
                    {step.icon}
                  </div>

                  {/* Image container with advanced effects */}
                  <div className="relative w-52 h-52 lg:w-64 lg:h-64 mx-auto mb-8">
                    {/* Middle container */}
                    <div className="absolute inset-2 rounded-full bg-[#000514] flex items-center justify-center">
                      {/* Image */}
                      <div
                        className={`relative w-[85%] h-[85%] rounded-full overflow-hidden border-4 ${
                          step.glow
                        } shadow-2xl transition-all duration-700 ${
                          activeStep === step.id ? "border-8 scale-110" : ""
                        }`}
                      >
                        <img
                          src={step.img}
                          alt={step.title}
                          className="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-700"
                        />
                        {/* Image overlay */}
                        {/* <div
                          className={`absolute inset-0 bg-gradient-to-t ${step.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        ></div> */}
                      </div>
                    </div>

                    {/* Floating particles */}
                    {activeStep === step.id && (
                      <>
                        <div
                          className={`absolute top-0 right-0 w-3 h-3 rounded-full bg-gradient-to-r ${step.gradient} animate-float`}
                        ></div>
                        <div
                          className={`absolute bottom-0 left-0 w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient} animate-float animation-delay-500`}
                        ></div>
                        <div
                          className={`absolute top-1/2 right-0 w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient} animate-float animation-delay-1000`}
                        ></div>
                      </>
                    )}
                  </div>

                  {/* Text content */}
                  <div className="space-y-4 relative z-10">
                    <h3
                      className={`font-black text-2xl lg:text-3xl bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500 inline-block`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed text-base">
                      {step.desc}
                    </p>
                  </div>

                  {/* Decorative corner accents */}
                  <div
                    className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${step.gradient} opacity-10 rounded-br-full`}
                  ></div>
                  <div
                    className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${step.gradient} opacity-10 rounded-tl-full`}
                  ></div>
                </div>

                {/* Arrow connector for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-30 items-center justify-center">
                    <div
                      className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${step.gradient} opacity-50 flex items-center justify-center animate-pulse`}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
