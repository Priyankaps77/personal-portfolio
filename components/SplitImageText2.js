import React from "react";

export const SplitImageText2 = () => {
  return (
    <section className="w-full h-[80vh] flex flex-col md:flex-row bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff] relative overflow-hidden">
      {/* Concentric circles background */}

      {/* Left Section with Text */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff]  px-6 relative z-10">
        <div className="text-center max-w-md  p-20 rounded-md shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About....
          </h2>
          <p className="text-gray-600 text-lg">
            I&#39;m a Web Developer. Since 2022, I&#39;ve enjoyed turning
            complex problems into simple, beautiful, and intuitive designs. When
            I&#39;m not pushing pixels, you&#39;ll find me cooking, gardening,
            or working out in the park.
          </p>
        </div>

        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full border-[6px] border-[#5fc7dc] opacity-40"></div>
        <div className="absolute top-40 left-10 w-[300px] h-[300px] rounded-full border-[4px] border-[#83d9e8] opacity-30"></div>
        <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full border-[5px] border-[#5fc7dc] opacity-20"></div>
      </div>

      {/* Right Section with Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff] z-0" />

        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-90 z-10"
          style={{ backgroundImage: "url('/drawingirl.webp')" }}
        />

        <div className="relative z-20 hidden"></div>
      </div>
    </section>
  );
};
