import { useState } from "react";

export default function DestinationCards() {
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
      className="relative w-full h-[90vh] "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background image */}
      <img
        src="/background.jpg"
        alt="Background scenery"
        className="absolute inset-0 w-full h-full object-cover opacity-100  dark:opacity-40"
        style={{ transform }}
      />

      {/* Bottom-left content */}
      <div className="absolute bottom-10 left-6 md:left-10 text-white z-10">
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
