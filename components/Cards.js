import { useState } from "react";
import { motion } from "motion/react";
export default function DestinationCards({ darkMode }) {
  const [transform, setTransform] = useState("scale(1)");

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 20;
    const y = ((clientY - top) / height - 0.5) * 20;

    setTransform(`scale(1.05) translate(${x}px, ${y}px)`);
  };

  const handleMouseLeave = () => {
    setTransform("scale(1)");
  };

  return (
    <section
      className={`relative w-full h-[90vh] overflow-hidden`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background image */}
      <img
        src="/background.jpg"
        alt="Background scenery"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ transform }}
      />

      {/* Dark mode overlay */}
      {darkMode && (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#b0d8e5] via-[#3c8d99] to-[#f8fbff] opacity-50 z-10"></div>
      )}

      {/* Gradient overlay (optional for both modes) */}
      <div
        className={`absolute inset-0 z-20 pointer-events-none ${
          darkMode
            ? "bg-gradient-to-tr from-[#b0d8e5] via-[#3c8d99] to-[#f8fbff] opacity-50"
            : ""
        }`}
      ></div>
      {darkMode && (
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear" }}
          className="absolute bottom-[-100px] right-[100px] w-[500px] h-[500px] rounded-full border-[6px] flex items-center justify-center border-[#d6f2f8]"
        >
          <div className="w-10 h-10 bg-white rounded-full translate-x-[200px]" />
        </motion.div>
      )}

      {darkMode && (
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear" }}
          className="absolute top-[100px] left-[50px] w-[400px] h-[400px] rounded-full border-[5px] border-[#d6f2f8]"
          style={{
            background:
              "conic-gradient(from 0deg, #5fc7dc 0%, transparent 25%, #5fc7dc 50%, transparent 75%, #5fc7dc 100%)",
          }}
        />
      )}

      {darkMode && (
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear" }}
          className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] rounded-full border-[6px] flex items-center justify-start border-[#eafcff]"
        >
          <div className="w-10 h-10 bg-white rounded-full shadow-md" />
        </motion.div>
      )}

      {/* Bottom-left content */}
      <div
        className={`absolute bottom-10 left-6 md:left-10  z-30 ${
          darkMode ? "text-gray-900" : "text-gray-800"
        }`}
      >
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-md">
          Discover My Journey
        </h1>
        <p className="mt-2 text-lg md:text-xl drop-shadow-sm">
          Unforgettable experiences begin here.
        </p>
      </div>
    </section>
  );
}
