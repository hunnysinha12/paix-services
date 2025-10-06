"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";

export default function CaseStudiesSection() {
  const [activeCase, setActiveCase] = useState(0);
  const [expandedCase, setExpandedCase] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useState(() => {
    setIsVisible(true);
  }, []);

  const caseStudies = [
    {
      title: "US Health System Transformation",
      subtitle: "Redefining Financial Health for Sustainable Success",
      stat: "85%",
      statLabel: "First-Pass Claims",
      arDays: "38",
      challenge: [
        "Growing denials and revenue uncertainty",
        "Excessive Days in AR",
        "Compliance pressures and legacy systems",
      ],
      approach: [
        "Real-time insurance verification",
        "Standardized registration processes",
        "Automated charge capture and error checks",
        "Staff training and performance dashboards",
      ],
      results: [
        "+85% first pass claim rate",
        "Days in AR cut to 38",
        "Lower denial rates",
        "Higher staff engagement",
        "Stronger compliance",
      ],
    },
    {
      title: "Hospital Chain Coding Excellence",
      subtitle: "Achieving 93% First Pass Approvals",
      stat: "93%",
      statLabel: "First-Pass Approvals",
      arDays: null,
      challenge: [
        "Recurring coding inaccuracies",
        "Delayed payments and compliance risks",
        "High denial and rework costs",
      ],
      approach: [
        "Rigorous coder certification & ongoing training",
        "Daily error monitoring with real-time feedback",
        "Collaboration with medical staff for documentation clarity",
        "AI-driven audit software for pre-submission validation",
        "Transparent KPIs and dashboards",
      ],
      results: [
        "93% first pass claim approvals",
        "Near elimination of compliance penalties",
        "Stronger alignment between coders and clinicians",
        "Higher staff engagement and job satisfaction",
        "Industry recognition for process excellence",
      ],
      testimonial: {
        quote:
          "Our coders didn't just fix numbers—they transformed our entire operation. We now have peace of mind and financial resilience.",
        author: "VP, Revenue Cycle",
        company: "Hospital Chain",
      },
    },
  ];

  const toggleExpand = (index) => {
    setExpandedCase(expandedCase === index ? null : index);
  };

  return (
    <section
      id="case-study"
      className="bg-gradient-to-b from-[#000514] to-[#001028] py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-5xl flex flex-wrap gap-1 justify-center items-center md:text-6xl font-bold text-white mb-6 leading-tight">
            Real Impact,
            <span className=" bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 text-transparent bg-clip-text">
              Real Numbers
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how we&apos;ve transformed revenue cycle operations for leading
            healthcare organizations
          </p>
        </div>

        {/* Case Study Tabs */}
        <div className="flex flex-col md:flex-row  gap-12 mb-8">
          {caseStudies.map((cs, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`flex-1 p-6 rounded-xl border-2 transition-all duration-500 text-left transform hover:scale-105 ${
                activeCase === index
                  ? "bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/20 scale-105"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              } ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {cs.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{cs.subtitle}</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-blue-400">
                  {cs.stat}
                </span>
                <span className="text-gray-400 text-sm">{cs.statLabel}</span>
              </div>
              {cs.arDays && (
                <div className="mt-2 text-sm text-gray-400">
                  AR Days:{" "}
                  <span className="text-green-400 font-semibold">
                    {cs.arDays}
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Active Case Study Details */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-700 animate-fadeIn">
          <div className="p-8 md:p-12">
            {/* Overview */}
            <div className="mb-10 transition-all duration-500 animate-slideUp">
              <h3 className="text-3xl font-bold text-white mb-3">Overview</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {activeCase === 0
                  ? "A leading US health system faced rising denial rates, long AR days, and staff burnout. Partnering with our team, they redefined their Revenue Cycle Management (RCM) through technology, data insights, and process redesign."
                  : "A leading US hospital chain partnered with our certified coding specialists to eliminate costly coding errors, improve claim accuracy, and achieve a 93% first pass rate. The result: faster reimbursements, reduced denials, and long-term financial resilience."}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div
                className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 animate-slideUp"
                style={{ animationDelay: "100ms" }}
              >
                <TrendingUp
                  className="w-8 h-8 text-blue-400 mb-3 animate-bounce"
                  style={{ animationDuration: "2s" }}
                />
                <div className="text-4xl font-bold text-white mb-2">
                  {caseStudies[activeCase].stat}
                </div>
                <div className="text-gray-400">
                  {caseStudies[activeCase].statLabel}
                </div>
              </div>
              {caseStudies[activeCase].arDays && (
                <div
                  className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 animate-slideUp"
                  style={{ animationDelay: "200ms" }}
                >
                  <CheckCircle
                    className="w-8 h-8 text-green-400 mb-3 animate-bounce"
                    style={{ animationDuration: "2s", animationDelay: "0.2s" }}
                  />
                  <div className="text-4xl font-bold text-white mb-2">
                    {caseStudies[activeCase].arDays}
                  </div>
                  <div className="text-gray-400">Days in AR</div>
                </div>
              )}
              <div
                className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 animate-slideUp"
                style={{ animationDelay: "300ms" }}
              >
                <Users
                  className="w-8 h-8 text-purple-400 mb-3 animate-bounce"
                  style={{ animationDuration: "2s", animationDelay: "0.4s" }}
                />
                <div className="text-2xl font-bold text-white mb-2">Higher</div>
                <div className="text-gray-400">Staff Engagement</div>
              </div>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4">
              {/* Challenge */}
              <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10">
                <button
                  onClick={() => toggleExpand(0)}
                  className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-white">
                    The Challenge
                  </h4>
                  <div
                    className={`transition-transform duration-300 ${
                      expandedCase === 0 ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCase === 0
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <ul className="space-y-3">
                      {caseStudies[activeCase].challenge.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 animate-slideIn"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Approach */}
              <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10">
                <button
                  onClick={() => toggleExpand(1)}
                  className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-white">Our Approach</h4>
                  <div
                    className={`transition-transform duration-300 ${
                      expandedCase === 1 ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCase === 1
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <ul className="space-y-3">
                      {caseStudies[activeCase].approach.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 animate-slideIn"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10">
                <button
                  onClick={() => toggleExpand(2)}
                  className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-white">The Results</h4>
                  <div
                    className={`transition-transform duration-300 ${
                      expandedCase === 2 ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCase === 2
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <ul className="space-y-3">
                      {caseStudies[activeCase].results.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 animate-slideIn"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            {caseStudies[activeCase].testimonial && (
              <div className="mt-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 animate-fadeIn">
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 text-6xl leading-none animate-pulse">
                    &apos;
                  </div>
                  <div>
                    <p className="text-white text-lg mb-4 italic">
                      {caseStudies[activeCase].testimonial.quote}
                    </p>
                    <div className="text-gray-400">
                      <div className="font-semibold text-white">
                        {caseStudies[activeCase].testimonial.author}
                      </div>
                      <div className="text-sm">
                        {caseStudies[activeCase].testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center animate-fadeIn">
          <p className="text-gray-400 mb-6">
            Ready to transform your revenue cycle?
          </p>
          <button className="flex items-center h-fit px-8 bg-blue-600 hover:bg-blue-700 rounded-lg gap-3 duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 mx-auto">
            Schedule a Consultation
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-slideIn {
          animation: slideIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
