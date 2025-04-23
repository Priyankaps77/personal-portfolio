import React from "react";
import DestinationCards from "../components/Cards";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import { SplitImageText } from "../components/SplitImageText ";
import { SplitImageText2 } from "../components/SplitImageText2";
import { TestimonialsGrid } from "../components/TestimonialsGrid";
import { Gallery } from "../components/Gallery";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  // FaSearch,
  FaUser,
  // FaSuitcase,
  FaMoon,
  FaSun,
  FaDownload,
} from "react-icons/fa";
import { useState } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode, "darkMode");

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <main
        className={`scroll-smooth ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <header
          id="#home"
          className={`w-full  border-b border-gray-200 fixed top-0 left-0 z-50 ${
            darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex-shrink-0">
              <div
                className={` px-3 py-2 font-bold text-sm tracking-widest ${
                  darkMode
                    ? "bg-white text-black border-2 border-[#83d9e8]"
                    : "bg-black text-white border-2 border-[#83d9e8]"
                }`}
              >
                PRIYANKA SAHU
              </div>
            </div>

            <nav className="hidden md:flex lg:space-x-8">
              {[
                { href: "/", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-semibold uppercase tracking-wider transform transition-transform duration-200 hover:scale-150  ${
                    darkMode
                      ? "text-white hover:text-gray-100"
                      : "text-gray-800 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-6  text-lg">
              <div
                className={`h-8 w-8  rounded-full p-2 flex justify-center items-center ${
                  darkMode ? "text-black bg-[#83d9e8]" : "text-white bg-black"
                }`}
              >
                <motion.button whileTap={{ scale: 0.9 }} onClick={toggleTheme}>
                  {darkMode ? (
                    <FaMoon className="w-6 h-6" />
                  ) : (
                    <FaSun className="w-6 h-6" />
                  )}
                </motion.button>
              </div>
              {/* <FaSearch className="cursor-pointer hover:text-gray-600" /> */}
              <div className="relative flex gap-4 group">
                <Link href="/aboutMe">
                  <FaUser className="cursor-pointer hover:text-gray-600 w-6 h-6" />
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    visit
                  </span>
                </Link>
              </div>
              <div className="relative flex gap-4 group">
                <a href="/resume.pdf" download>
                  <FaDownload className="cursor-pointer hover:text-gray-600 w-6 h-6" />
                </a>
                <span className="absolute top-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Resume
                </span>
              </div>

              {/* <div className="relative">
                <FaSuitcase className="cursor-pointer hover:text-gray-600 " />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </div> */}
            </div>
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, x: -150, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <DestinationCards darkMode={darkMode} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 150, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Gallery darkMode={darkMode} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -150, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SplitImageText darkMode={darkMode} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 150, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SplitImageText2 darkMode={darkMode} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -150, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Hero darkMode={darkMode} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 150, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <TestimonialsGrid darkMode={darkMode} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -150, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Contact darkMode={darkMode} />
        </motion.div>
      </main>
    </div>
  );
};

export default Home;

{
  /* <nav className="hidden md:flex space-x-6 ">
              <a
                href="#home"
                className="hover:text-gray-600 hover:text-xl text-sm font-semibold  uppercase tracking-wider"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-gray-600 hover:text-xl text-sm font-semibold  uppercase tracking-wider"
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:text-gray-600 hover:text-xl text-sm font-semibold  uppercase tracking-wider"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-gray-600 hover:text-xl text-sm font-semibold  uppercase tracking-wider"
              >
                Contact
              </a>
            </nav> */
}
