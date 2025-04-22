import React from "react";

export const SplitImageText = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`w-full h-[80vh] flex flex-col md:flex-row ${
        darkMode
          ? "bg-gradient-to-tr from-[#b0d8e5] via-[#3c8d99] to-[#f8fbff]"
          : "bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff]"
      }`}
    >
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
          style={{ backgroundImage: "url('/girl.jpg')" }}
        />

        {/* <div className="relative z-20 hidden"></div> */}
      </div>

      <div
        className={`w-full md:w-1/2 h-1/2 md:h-full flex items-center relative justify-center px-6 ${
          darkMode
            ? "bg-gradient-to-tr from-[#b0d8e5] via-[#3c8d99] to-[#f8fbff]"
            : "bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff]"
        }`}
      >
        <div className="text-center max-w-md  p-20">
          <h2
            className={`text-3xl md:text-4xl font-bold  mb-4 ${
              darkMode ? "text-gray-900" : "text-gray-800"
            }`}
          >
            Random Facts About Me
          </h2>
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
          <p
            className={` text-md  ${
              darkMode ? "text-gray-900" : "text-gray-600"
            }`}
          >
            I am a very creative soul who finds joy in expressing myself through
            different mediums. When I am not immersed in my work, you can often
            find me indulging in my hobbies. One of my favorite pastimes is
            drawing, where I let my imagination flow onto paper, creating
            beautiful and captivating visuals. Another wonderful way I spend my
            free time is by writing in my diary. Through my words, I capture the
            moments, thoughts, and emotions that make up my life&#39;s journey.
            These diary entries serve as a personal reflection and a way to
            preserve cherished memories.💝💝
          </p>
          {/* <div className="absolute  right-[-150px] w-[600px] h-[600px] rounded-full border-[6px] border-[#83d9e8] opacity-60 animate-pulse"></div>
          <div className="absolute  right-[50px] w-[400px] h-[400px] rounded-full border-[5px] border-[#5fc7dc] opacity-50"></div>
          <div className="absolute bottom-[100px] right-[-100px] w-[500px] h-[500px] rounded-full border-[6px] border-[#83d9e8] opacity-40"></div> */}
        </div>
      </div>
    </section>
  );
};
