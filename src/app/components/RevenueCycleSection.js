import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  DollarSign,
  FileCheck,
  Clock,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function RevenueCycleSection() {
  const [isVisible, setIsVisible] = useState({});
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const outcomes = [
    {
      icon: FileCheck,
      title: "Higher Clean Claim Rates",
      color: "text-emerald-500",
    },
    { icon: Clock, title: "Reduced A/R Days", color: "text-blue-500" },
    { icon: TrendingUp, title: "Fewer Denials", color: "text-purple-500" },
    {
      icon: DollarSign,
      title: "Faster Reimbursements",
      color: "text-amber-500",
    },
  ];

  const features = [
    {
      title: "Real-time Eligibility Checks",
      description: "Automated verification before every appointment",
    },
    {
      title: "AI Coding Support",
      description: "Intelligent suggestions for accurate claim coding",
    },
    {
      title: "Predictive Denial Management",
      description: "Identify and prevent denials before submission",
    },
    {
      title: "Cash Forecasting",
      description: "Advanced analytics for better financial planning",
    },
  ];

  return (
    <div
      id="Revenue"
      className="min-h-screen bg-gradient-to-b from-[#001028] to-[#000514]"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div
            id="hero"
            data-animate
            className={`text-center transform transition-all duration-1000 ${
              isVisible.hero
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Smarter Revenue Cycle with
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 text-transparent bg-clip-text">
                Automation & Analytics
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              AI-powered workflows deliver real-time eligibility checks, coding
              support, predictive denial management, and cash forecasting—so
              your teams focus only on the exceptions that matter.
            </p>
          </div>

          {/* Animated Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {outcomes.map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={idx}
                  id={`metric-${idx}`}
                  data-animate
                  className={`relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transform transition-all duration-700 hover:scale-105 hover:border-slate-600 ${
                    isVisible[`metric-${idx}`]
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                      activeMetric === idx ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                        idx === 0
                          ? "from-emerald-500/20 to-transparent"
                          : idx === 1
                          ? "from-blue-500/20 to-transparent"
                          : idx === 2
                          ? "from-purple-500/20 to-transparent"
                          : "from-amber-500/20 to-transparent"
                      }`}
                    ></div>
                  </div>
                  <Icon
                    className={`w-10 h-10 ${outcome.color} mb-4 relative z-10`}
                  />
                  <h3 className="text-white font-semibold text-lg relative z-10">
                    {outcome.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                id={`feature-${idx}`}
                data-animate
                className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 transform transition-all duration-700 hover:border-blue-500/50 ${
                  isVisible[`feature-${idx}`]
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            id="dashboard-preview"
            data-animate
            className={`mt-16 bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 transform transition-all duration-1000 ${
              isVisible["dashboard-preview"]
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
            }`}
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              Intelligent dashboards surface payer-specific trends, empowering
              faster interventions and better executive decision-making.
              Programs scale easily by specialty and site of care, with
              continuous AI-driven improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="relative py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="integration"
            data-animate
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.integration
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Seamless Engagement
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              PAIX integrates with major EHRs and clearinghouses, launches
              pilots quickly, and tracks progress against industry KPIs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Clean Claim Rate", desc: "Track submission accuracy" },
              { title: "A/R Days", desc: "Monitor collection velocity" },
              {
                title: "Cost to Collect",
                desc: "Optimize operational efficiency",
              },
            ].map((kpi, idx) => (
              <div
                key={idx}
                id={`kpi-${idx}`}
                data-animate
                className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center transform transition-all duration-700 hover:border-emerald-500/50 ${
                  isVisible[`kpi-${idx}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {kpi.title}
                </h3>
                <p className="text-slate-400">{kpi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="cta"
            data-animate
            className={`relative bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-lg hover:shadow-2xl transform transition-all duration-700 ${
              isVisible.cta ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get Your Cycle Back on Track
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Share your current challenges or a recent claims file, and PAIX
                will identify quick wins in eligibility, coding, denials, and
                A/R follow-up—accelerating cash within weeks.
              </p>
              <button className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start Your Discovery Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-6">
                A short discovery session reveals where automation and analytics
                can deliver the biggest impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
