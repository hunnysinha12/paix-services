"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const closeNavbar = () => {
    setNavIsOpened(false);
  };

  const toggleNavbar = () => {
    setNavIsOpened((prev) => !prev);
  };

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
        setNavIsOpened(false); // Close mobile menu when scrolling down
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Handle link click with smooth animation
  const handleLinkClick = (e, href) => {
    e.preventDefault();

    // Close navbar first
    setNavIsOpened(false);

    // Scroll smoothly for internal links starting with #
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to another page after a short delay
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    }
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#Revenue", label: "Revenue" },
    { href: "#case-study", label: "Case Study" },
    { href: "#team", label: "Team" },
  ];

  return (
    <>
      <div
        aria-hidden={true}
        onClick={closeNavbar}
        className={`fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          navIsOpened
            ? "opacity-100 lg:hidden"
            : "opacity-0 pointer-events-none lg:hidden"
        }`}
      />

      <header
        className={`fixed left-0 top-0 w-full flex items-center h-20 border-b border-b-gray-100 dark:border-b-gray-900 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-filter backdrop-blur-xl transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <Link
              href="#"
              className="text-xl font-semibold flex items-center gap-x-2"
            >
              <img src="/logo.png" alt="Logo" />
            </Link>
          </div>

          <div
            className={`absolute top-full left-0 bg-white dark:bg-gray-950 lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:flex lg:justify-between transition-all duration-300 ease-in-out shadow-lg lg:shadow-none ${
              navIsOpened
                ? "translate-y-0 opacity-100 visible"
                : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"
            }`}
          >
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="relative py-2.5 duration-300 ease-linear hover:text-[#456882] after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-[#456882]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex sm:items-center lg:min-w-max mt-10 lg:mt-0">
              <Link
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="px-6 items-center h-12 rounded-3xl text-pink-700 border border-gray-100 dark:border-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 duration-300 ease-linear flex justify-center w-full sm:w-auto hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                Book a call
              </Link>
            </div>
          </div>

          <div aria-hidden="true" className="flex items-center lg:hidden">
            <button
              onClick={toggleNavbar}
              aria-label="toggle navbar"
              className="outline-none border-l border-l-indigo-100 dark:border-l-gray-800 pl-3 relative py-3"
            >
              <span
                aria-hidden={true}
                className={`flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300 ${
                  navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""
                }`}
              />
              <span
                aria-hidden={true}
                className={`mt-2 flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300 ${
                  navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
