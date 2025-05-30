import React from "react";
import { FaPodcast, FaPrayingHands, FaPrint, FaPooStorm } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    title: "Pixel Perfect Designs",
    subtitle:
      "I bring Figma designs to life with precision and responsiveness.",
  },
  {
    id: 2,
    title: "Top-Notch Code Quality",
    subtitle:
      "Reusable components, clean structure, and scalable codebases are my jam.",
  },
  {
    id: 3,
    title: "User-Centric Thinking",
    subtitle: "Every interaction I build is designed with real users in mind.",
  },
  {
    id: 4,
    title: "Always Evolving",
    subtitle:
      "Constantly learning new tools, libraries, and best practices to stay ahead in the front-end game.",
  },
];

const icons = [FaPodcast, FaPrayingHands, FaPrint, FaPooStorm];

export const TestimonialsGrid = ({ darkMode }) => {
  return (
    <section
      className={`relative py-12 px-4 overflow-hidden ${
        darkMode
          ? "bg-gradient-to-tr from-[#b0d8e5] via-[#3c8d99] to-[#f8fbff]"
          : "bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff]"
      }`}
    >
      {/* Bold visible concentric circles */}
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 2, ease: "linear" }}
        className={`absolute bottom-[-100px] right-[100px] w-[500px] h-[500px] rounded-full border-[6px] flex items-center justify-center ${
          darkMode
            ? "border-[#b2e7f0] opacity-30"
            : "border-[#83d9e8] opacity-30"
        }`}
      >
        <div className="w-10 h-10 bg-white rounded-full translate-x-[200px]" />
      </motion.div>

      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 2, ease: "linear" }}
        className={`absolute top-[100px] left-[50px] w-[400px] h-[400px] rounded-full border-[5px] ${
          darkMode
            ? "border-[#b2e7f0] opacity-30"
            : "border-[#5fc7dc] opacity-30"
        }`}
        style={{
          background:
            "conic-gradient(from 0deg, #5fc7dc 0%, transparent 25%, #5fc7dc 50%, transparent 75%, #5fc7dc 100%)",
        }}
      />
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 2, ease: "linear" }}
        className={`absolute top-[-150px] left-[-150px] w-[600px] h-[600px] rounded-full border-[6px] flex items-center justify-start ${
          darkMode
            ? "border-[#b2e7f0] opacity-30"
            : "border-[#83d9e8] opacity-80"
        }`}
      >
        <div className="w-10 h-10 bg-[#fff] rounded-full shadow-md" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-2xl text-center mb-7">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Strength
        </h2>
        <p
          className={`mt-2 text-lg/8 ${
            darkMode ? "text-gray-900" : "text-gray-800"
          }`}
        >
          Crafting clean, responsive, and modern interfaces that users love.
        </p>
      </div>

      <div className="relative z-10 lg:mx-[136px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
        {testimonials.map((item, index) => {
          const IconComponent = icons[index];
          return (
            <div
              key={item.id}
              className={`border-2 border-[#83d9e8] w-full h-72 p-6 text-left hover:border-[#83d9e8] backdrop-blur-sm transition-all duration-300 ease-out hover:glow-4xl transform hover:scale-105 hover:shadow-xl ${
                darkMode
                  ? "bg-gradient-to-tr from-[#b0d8e5] via-[#3c8d99] to-[#f8fbff] text-gray-900"
                  : "bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff] text-gray-800"
              }`}
            >
              <div className="flex justify-start  text-3xl my-5 transition-transform transform hover:scale-110 hover:rotate-6">
                <IconComponent />
              </div>
              <h3 className="text-xl font-semibold  mt-10 mb-4">
                {item.title}
              </h3>
              <p className=" text-sm">{item.subtitle}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

{
  /* <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] rounded-full border-[6px] border-[#5fc7dc] opacity-60 animate-pulse"></div>
      <div className="absolute top-[100px] left-[50px] w-[400px] h-[400px] rounded-full border-[5px] border-[#83d9e8] opacity-50"></div>
      <div
        className={`absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full border-[6px]  ${
          darkMode
            ? "border-[#b2e7f0] opacity-50"
            : "border-[#83d9e8] opacity-40"
        }`}
      ></div> */
}
