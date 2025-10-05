"use client";

import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";

import styles from "../../../styles";
import {
  staggerContainer,
  fadeIn,
  planetVariants,
} from "../../../utils/motion";

import { TypingText, TitleText } from "./CustomTexts";
import StartSteps from "./StartSteps";
import { startingFeatures } from "../../../constants";

// Utility for tab classes
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  {
    name: "Services Front-End Services",
    content: (
      <section className={`relative z-10`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
          {/* Left Image */}
          <motion.div
            variants={planetVariants("left")}
            className={`${styles.flexCenter} flex-1`}
          >
            <img
              src="/get-started.png"
              alt="Get-Started"
              className="w-[90%] h-[90%] object-contain"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            {/* Render 1st group from startingFeatures */}
            <div className="mt-6 flex flex-col max-w-[370px] gap-[24px]">
              {startingFeatures[0].map((feature, index) => (
                <StartSteps key={index} number={index + 1} text={feature} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    ),
  },
  {
    name: "Mid-Cycle Services",
    content: (
      <section className={`relative z-10`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
          {/* Left Image */}
          <motion.div
            variants={planetVariants("left")}
            className={`${styles.flexCenter} flex-1`}
          >
            <img
              src="/get-started.png"
              alt="Get-Started"
              className="w-[90%] h-[90%] object-contain"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            {/* Render 2nd group */}
            <div className="mt-6 flex flex-col max-w-[370px] gap-[24px]">
              {startingFeatures[1].map((feature, index) => (
                <StartSteps key={index} number={index + 1} text={feature} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    ),
  },
  {
    name: "Back-End Services",
    content: (
      <section className={`relative z-10`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
          {/* Left Image */}
          <motion.div
            variants={planetVariants("left")}
            className={`${styles.flexCenter} flex-1`}
          >
            <img
              src="/get-started.png"
              alt="Get-Started"
              className="w-[90%] h-[90%] object-contain"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            {/* Render 3rd group */}
            <div className="mt-6 flex flex-col max-w-[370px] gap-[24px]">
              {startingFeatures[2].map((feature, index) => (
                <StartSteps key={index} number={index + 1} text={feature} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    ),
  },
];

export default function ServicesTabs() {
  return (
    <section className="bg-gradient-to-b from-[#000514] to-[#001028] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tab Navigation */}
        <Tab.Group>
          <Tab.List className="flex space-x-4 rounded-xl bg-[#00091f] p-2 mb-10">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-3 text-sm font-medium leading-5 text-white",
                    selected
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 shadow"
                      : "hover:bg-[#001531] transition-colors duration-200"
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>

          {/* Tab Panels */}
          <Tab.Panels className="rounded-xl">
            {tabs.map((tab, idx) => (
              <Tab.Panel key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {tab.content}
                </motion.div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
