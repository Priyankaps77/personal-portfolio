import React from "react";

export const SplitImageText2 = ({ darkMode }) => {
  return (
    <section
      className={`w-full h-[80vh] flex flex-col md:flex-row relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-tr from-[#b0d8e5] via-[#3c8d99] to-[#f8fbff]"
          : "bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff]"
      }`}
    >
      {/* Concentric circles background */}

      {/* Left Section with Text */}
      <div
        className={`w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center px-6 relative z-10 ${
          darkMode
            ? "bg-gradient-to-tr from-[#b0d8e5] via-[#3c8d99] to-[#f8fbff]"
            : "bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff]"
        }`}
      >
        <div className="text-center max-w-md lg:p-20 p-5 rounded-md shadow-sm">
          <h2
            className={`text-3xl md:text-4xl font-bold  mb-4 ${
              darkMode ? "text-gray-900" : "text-gray-800"
            }`}
          >
            About....
          </h2>
          <p
            className={` text-lg ${
              darkMode ? "text-gray-900" : "text-gray-600"
            }`}
          >
            I&#39;m a Web Developer. Since 2022, I&#39;ve enjoyed turning
            complex problems into simple, beautiful, and intuitive designs. When
            I&#39;m not pushing pixels, you&#39;ll find me cooking, gardening,
            or working out in the park.
          </p>
        </div>

        <div
          className={`absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full border-[6px] ${
            darkMode
              ? "border-[#b2e7f0] opacity-30"
              : "border-[#83d9e8] opacity-30"
          }`}
        ></div>
        <div
          className={`absolute top-[100px] left-[50px] w-[400px] h-[400px] rounded-full border-[5px]  ${
            darkMode
              ? "border-[#b2e7f0] opacity-30"
              : "border-[#5fc7dc] opacity-30"
          }`}
        ></div>
        <div
          className={`absolute top-[-150px] left-[-150px] w-[600px] h-[600px] rounded-full border-[6px] animate-pulse ${
            darkMode
              ? "border-[#b2e7f0] opacity-30"
              : "border-[#83d9e8] opacity-80"
          }`}
        ></div>
      </div>

      {/* Right Section with Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
        <div
          className={`absolute inset-0 z-0 ${
            darkMode
              ? "bg-gradient-to-tr from-[#b0d8e5] via-[#3c8d99] to-[#f8fbff]"
              : "bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff]"
          }`}
        />

        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-90 z-10"
          style={{ backgroundImage: "url('/drawingirl.webp')" }}
        />

        <div className="relative z-20 hidden"></div>
      </div>
    </section>
  );
};
