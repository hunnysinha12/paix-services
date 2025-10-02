"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#001028] to-[#000514]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                About the company
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-b from-white to-[#737373] bg-clip-text text-transparent">
                Expertise & Compassion
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Saved My Life
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              The medical professionals who treated me showed unmatched
              expertise, compassion, and dedication. Their care and support
              helped me overcome a serious health challenge and get back to
              living my life.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {[
                {
                  title: "Our Specialities",
                  items: [
                    "Preventive care",
                    "Diagnostic testing",
                    "Mental health services",
                  ],
                },
                {
                  title: "Our Vision",
                  items: [
                    "Accessible & equitable care",
                    "Innovative technology",
                    "Empowering patients",
                  ],
                },
              ].map((section, idx) => (
                <div
                  key={idx}
                  className={`group p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${idx * 200}ms` }}
                >
                  <h4 className="font-bold text-blue-400 mb-4 text-lg group-hover:text-blue-300 transition-colors">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300 text-sm group-hover:text-white transition-colors"
                      >
                        <svg
                          className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image & Card */}
          <div
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative group">
              {/* Glowing effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

              {/* Image container */}
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-sm shadow-2xl">
                <Image
                  src="/doc.jpg"
                  alt="Doctor"
                  width={640}
                  height={420}
                  className="object-cover w-full h-[500px] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000514]/60 via-transparent to-transparent"></div>

                {/* Experience badge */}
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-2xl p-8 w-56 shadow-2xl z-20 transform transition-all duration-500 hover:scale-105 hover:rotate-2">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-white/20 rounded-2xl blur-xl"></div>
                    <div className="relative">
                      <p className="text-6xl font-black leading-none mb-2 bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent">
                        30
                      </p>
                      <p className="text-sm font-semibold uppercase tracking-wide">
                        Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-10 -right-4 w-24 h-24 border-4 border-blue-500/30 rounded-full animate-ping opacity-20"></div>
              <div className="absolute bottom-20 -right-6 w-32 h-32 border-4 border-orange-500/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
