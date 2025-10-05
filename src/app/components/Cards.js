import React, { useState } from "react";

const NewFeatures = ({ imgUrl, title, subtitle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-1 flex flex-col w-full sm:max-w-[350px] min-w-[250px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon Container with Gradient Border Effect */}
      <div className="relative mb-6">
        <div
          className={`
            relative w-[70px] h-[70px] rounded-2xl
            bg-gradient-to-br from-[#4a5568] to-[#323f5d]
            flex items-center justify-center
            shadow-lg
            transition-all duration-500 ease-out
            ${isHovered ? "scale-110 shadow-2xl rotate-3" : "scale-100"}
          `}
        >
          {/* Animated Glow Effect */}
          <div
            className={`
              absolute inset-0 rounded-2xl
              bg-gradient-to-br from-blue-400/20 to-purple-400/20
              transition-opacity duration-500
              ${isHovered ? "opacity-100" : "opacity-0"}
            `}
          />

          <img
            src={imgUrl}
            alt="icon"
            className={`
              w-1/2 h-1/2 object-contain relative z-10
              transition-transform duration-500
              ${isHovered ? "scale-110" : "scale-100"}
            `}
          />
        </div>

        {/* Decorative Accent */}
        <div
          className={`
            absolute -bottom-1 -right-1 w-6 h-6
            bg-gradient-to-br from-blue-500 to-purple-500
            rounded-lg
            transition-all duration-500
            ${isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}
          `}
        />
      </div>

      {/* Title with Gradient Underline */}
      <div className="relative mb-6">
        <h2 className="font-bold text-[24px] leading-[30px] text-white mb-2">
          {title}
        </h2>
        <div
          className={`
            h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full
            transition-all duration-500 ease-out
            ${isHovered ? "w-full" : "w-12"}
          `}
        />
      </div>

      {/* Enhanced List Items */}
      <ul className="space-y-4">
        {subtitle.map((val, ind) => (
          <li key={ind} className="flex items-start gap-3">
            {/* Enhanced Bullet */}
            <span className="flex-shrink-0 mt-2">
              <span className="block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
            </span>

            {/* Text */}
            <span className="leading-relaxed text-gray-300 text-sm sm:text-base">
              {val}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Demo Component
export default function FeaturesDemo() {
  const features = [
    {
      imgUrl: "/api/placeholder/40/40",
      title: "Services Front-End Services",
      subtitle: [
        "Scheduling & access – Optimize appointments for timely care.",
        "Eligibility & benefits – Verify coverage to minimize denials. ",
        "Prior authorization – Ensure timely payer approvals.",
        "Eligibility & benefits – Verify coverage to minimize denials. ",
      ],
    },
    {
      imgUrl: "/api/placeholder/40/40",
      title: "Mid-Cycle Services",
      subtitle: [
        "Charge entry & audit – Accurate and timely billing.",
        "Medical coding – Certified coders ensure compliance.",
        "Coding audits – Identify error patterns and reduce costs.",
        " Clinical documentation improvement – Support precise coding and denial prevention.",
      ],
    },
    {
      imgUrl: "/api/placeholder/40/40",
      title: "Back-End Services",
      subtitle: [
        "Remittance processing – Fast, accurate payment posting.",
        "Accounts receivable follow-up – Active tracking of payments.",
        "Denial management & appeals – Recover payments and reduce lost revenue.",
        "Credit balance resolution – Ensure prompt and accurate refunds.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001028] to-[#000514]  py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-400">
            Comprehensive solutions for your success
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <NewFeatures
              key={index}
              imgUrl={feature.imgUrl}
              title={feature.title}
              subtitle={feature.subtitle}
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-12">
          <button className=" relative rounded-full px-4 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            Explore Full Service Suite
          </button>
        </div>
      </div>
    </div>
  );
}
