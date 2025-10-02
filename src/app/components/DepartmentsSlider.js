import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Stethoscope,
  Pill,
  Activity,
} from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    icon: Heart,
    title: "Cardiology",
    description:
      "Cardiologists are healthcare professionals specializing in heart health.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop",
    icon: Stethoscope,
    title: "Dental",
    description:
      "Dentists are healthcare professionals specializing in oral health.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop",
    icon: Pill,
    title: "Gastroenterology",
    description: "Gastroenterologists specialize in digestive health.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop",
    icon: Activity,
    title: "Neurology",
    description:
      "Neurologists are healthcare professionals specializing in nervous system.",
  },
];

export default function HealthcareSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const slidesPerView = 3;
  const maxIndex = Math.max(0, slides.length - slidesPerView);

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <div className="py-16 px-6 bg-gradient-to-b from-[#000514] to-[#001028] w-full overflow-hidden">
      <div className="container mx-auto max-w-7xl">
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

        {/* Slider Container */}
        <div className="relative px-4">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / slidesPerView)
                }%)`,
              }}
            >
              {slides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <div
                    key={`${slide.id}-${index}`}
                    className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transform hover:scale-[1.02] transition-all duration-500">
                      {/* Background Image with Overlay */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${slide.image})`,
                        }}
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      {/* Info Circle */}
                      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 translate-y-1/2">
                        <div className="relative w-64 h-64 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden group-hover:shadow-[0_20px_60px_rgba(31,169,255,0.4)] transition-all duration-500">
                          {/* Animated Fill */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#1fa9ff] via-[#0ea2fe] to-[#0d8ee0] -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />

                          {/* Content */}
                          <div className="relative z-10 px-6 text-gray-800 group-hover:text-white transition-colors duration-700">
                            <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                              <div className="p-3 rounded-full bg-gray-100 group-hover:bg-white/20 transition-colors duration-500">
                                <Icon size={36} strokeWidth={2} />
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">
                              {slide.title}
                            </h3>
                            <p className="text-sm leading-relaxed opacity-90">
                              {slide.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows - Bottom Center */}
          <div className="flex justify-center items-center gap-4 mt-32">
            <button
              onClick={handlePrev}
              className="group w-14 h-14 rounded-full bg-gradient-to-br from-[#1fa9ff] to-[#0ea2fe] flex items-center justify-center shadow-lg hover:shadow-[0_10px_30px_rgba(31,169,255,0.5)] transform hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft
                size={28}
                className="text-white transform group-hover:-translate-x-0.5 transition-transform"
                strokeWidth={3}
              />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-3 bg-gradient-to-r from-[#1fa9ff] to-[#0ea2fe]"
                      : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="group w-14 h-14 rounded-full bg-gradient-to-br from-[#1fa9ff] to-[#0ea2fe] flex items-center justify-center shadow-lg hover:shadow-[0_10px_30px_rgba(31,169,255,0.5)] transform hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight
                size={28}
                className="text-white transform group-hover:translate-x-0.5 transition-transform"
                strokeWidth={3}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
