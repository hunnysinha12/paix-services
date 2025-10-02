"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import AboutSection from "./components/AboutSection";
import DepartmentsSlider from "./components/DepartmentsSlider";
import HowItWorks from "./components/HowItWorks";
import Staff from "./components/Staff";
import AppointmentBooking from "./components/Appointment";

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
    <div>
      {/* ✅ Hero Section */}
      <section className="bg-[url(/home-bg.png)] bg-cover bg-center container mx-auto px-10">
        <div className="flex flex-col justify-center items-center h-[375px]">
          <div className="text-[2.81rem] leading-[50px] font-bold bg-gradient-to-b from-white to-[#737373] bg-clip-text text-transparent text-center">
            <h1>Welcome to</h1>
            <h1>Next-Gen Healthcare Solutions</h1>
          </div>
        </div>
      </section>

      {/* ✅ Services Section */}
      <section className="bg-gradient-to-b from-[#000514] to-[#001028] container mx-auto services">
        <div className="px-10">
          <div className="flex flex-col lg:flex-row md:flex-row gap-5">
            {services.map((service, index) => (
              <React.Fragment key={service.id}>
                <Link
                  href={
                    isDesktop
                      ? `/services?tab=${service.id}`
                      : service.mobilePath
                  }
                  className="no-underline group flex-1"
                >
                  <div className="card rounded-lg transition-shadow duration-300 p-6 flex flex-col items-start gap-3 cursor-pointer hover:shadow-lg">
                    {/* ✅ Use Next.js Image for optimization */}
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={40}
                      height={35}
                      className="object-contain"
                    />
                    <div className="card-body space-y-3">
                      <h5
                        className="text-[20px] font-bold text-transparent bg-clip-text 
                         bg-white group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-[#737373] 
                         transition-all duration-300"
                      >
                        {service.title}
                      </h5>
                      <p className="text-[14px] font-light text-[#b0b0b0] mb-[5px] leading-[18px]">
                        {service.desc}
                      </p>
                      <b className="text-[#1fa9ff] text-base">Learn More</b>
                    </div>
                  </div>
                </Link>

                {/* ✅ Divider for desktop */}
                {index < services.length - 1 && (
                  <div className="hidden lg:block w-px border-r border-[#0065a4] h-[140px] mt-[70px] mx-[20px] p-0"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Other Components */}
      <AboutSection />
      <DepartmentsSlider />
      <HowItWorks />
      <Staff />
      <AppointmentBooking id="appointmentbooking" />
    </div>
  );
};

export default Page;
