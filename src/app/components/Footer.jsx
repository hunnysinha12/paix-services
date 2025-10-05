"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronUp,
} from "lucide-react";
import styles from "../../../styles";
import { footerVariants } from "../../../utils/motion";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#howitworks" },
    { name: "Case Studies", href: "#casestudies" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Revenue Cycle Management", href: "#rcm" },
    { name: "Medical Coding", href: "#coding" },
    { name: "Claims Processing", href: "#claims" },
    { name: "Denial Management", href: "#denial" },
    { name: "Patient Billing", href: "#billing" },
  ];

  const socials = [
    { name: "Facebook", icon: Facebook, link: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, link: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, link: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, link: "https://instagram.com" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-16 relative bg-gradient-to-b from-[#001028] to-[#000514]`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-12`}>
        {/* CTA Section */}
        <div className="flex items-center justify-between flex-wrap gap-8">
          <div className="max-w-xl">
            <img src="/logo.png" className="mb-4" alt="Logo" />
            <p className="text-gray-400 text-lg">
              Partner with us to optimize your healthcare revenue cycle and
              achieve financial excellence.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center h-fit px-8 bg-blue-600 hover:bg-blue-700 rounded-lg gap-3 duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60"
          >
            <Phone className="w-5 h-5 text-white" />
            <span className="font-semibold text-[16px] text-white">
              Schedule Consultation
            </span>
          </button>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-6">
          <div className="h-[1px] bg-white/10" />

          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-400 text-sm">
              <p>©2025 PAIX SERVICES. All rights reserved.</p>
              <div className="flex gap-6">
                <a
                  href="#privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 rounded-lg transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 text-white transition-all duration-300 z-50"
        aria-label="Back to Top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </motion.footer>
  );
};

export default Footer;
