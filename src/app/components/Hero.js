"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      id="home"
      className="bg-gradient-to-b from-[#000514] to-[#001028] overflow-hidden"
    >
      <div className="relative isolate px-6 lg:px-8">
        {/* Top gradient blob */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-in fade-in duration-1000"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75 transition-opacity duration-700"
          />
        </div>

        <div className="mx-auto max-w-5xl py-16 sm:py-24 lg:py-10">
          {/* Announcement banner */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center animate-in fade-in slide-in-from-top duration-700">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            {/* Heading */}
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl animate-in fade-in slide-in-from-bottom duration-700 delay-150">
              Your Revenue, Our Mission: End-to-End Revenue Cycle Solutions That
              Deliver
            </h1>

            {/* Paragraph */}
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              We unify every stage of the revenue cycle with advanced technology
              and deep expertise — ensuring clean claims, faster reimbursements,
              fewer denials, and seamless patient experiences.
            </p>

            {/* Key Benefits */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-400">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-white font-medium">
                  Faster reimbursements
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-white font-medium">Fewer denials</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-white font-medium">
                  Lower cost to collect
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-white font-medium">
                  Better patient experience
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-12 flex items-center justify-center gap-x-6 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all duration-300 hover:scale-105"
              >
                Schedule a Discovery Session
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold text-white transition-all duration-300 hover:text-indigo-400"
              >
                See Client Results <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom gradient blob */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] animate-in fade-in duration-1000 delay-300"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75 transition-opacity duration-700"
          />
        </div>
      </div>
    </div>
  );
}
