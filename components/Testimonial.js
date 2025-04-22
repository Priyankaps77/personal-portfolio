import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    image: "/background.jpg",
    colors: ["#000", "#1e3a8a", "#4b5563", "#6b7280", "#f5f5f4"],
  },
  {
    id: 2,
    image: "/background.jpg",
    colors: ["#a569bd", "#f7dc6f", "#ec7063", "#b03a2e", "#e5e7eb"],
  },
  {
    id: 3,
    image: "/background.jpg",
    colors: ["#4b5563", "#1e293b", "#6b7280", "#fca5a5", "#1e8449"],
  },
  {
    id: 4,
    image: "/background.jpg",
    colors: ["#3498db", "#aed6f1", "#82e0aa", "#16a085", "#edbb99"],
  },
  {
    id: 5,
    image: "/background.jpg",
    colors: ["#000", "#1e3a8a", "#6ee7b7", "#e2e8f0", "#e74c3c"],
  },
  {
    id: 6,
    image: "/background.jpg",
    colors: ["#7d3c98", "#1e3a8a", "#fdedec", "#515a5a", "#9c640c"],
  },
  {
    id: 7,
    image: "/background.jpg",
    colors: ["#4a235a", "#145a32", "#7d6608", "#6e2c00", "#1b2631"],
  },
  {
    id: 8,
    image: "/background.jpg",
    colors: ["#1d8348", "#616a6b", "#d35400", "#e59866", "#641e16"],
  },
  {
    id: 9,
    image: "/background.jpg",
    colors: ["#5d6d7e", "#21618c", "#fad7a0", "#fae5d3", "#45b39d"],
  },
  {
    id: 10,
    image: "/background.jpg",
    colors: ["#1c2833", "#76448a", "#7fb3d5", "#a3e4d7", "#2e86c1"],
  },
];

export default function Testimonial() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedColors, setSelectedColors] = useState({});
  const visibleCount = 5;
  const itemWidth = 280;

  const maxIndex = products.length - visibleCount;

  const nextSlide = () => {
    if (startIndex < maxIndex) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleColorClick = (productId, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  return (
    <section className="py-12  bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff]">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full border-[6px] border-[#5fc7dc] opacity-40"></div>
      <div className="absolute top-40 left-10 w-[300px] h-[300px] rounded-full border-[4px] border-[#83d9e8] opacity-30"></div>
      <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full border-[5px] border-[#5fc7dc] opacity-20"></div>
      <div className="text-center">
        <p className="italic text-gray-500 text-lg">Explore</p>
        <h2 className="text-4xl font-semibold text-gray-800">Most loved</h2>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${startIndex * itemWidth}px)`,
            width: `${products.length * itemWidth}px`,
          }}
        >
          {products.map((item) => {
            const selectedColor = selectedColors[item.id];
            return (
              <div
                key={item.id}
                className="min-w-[250px] mx-4 hover:bg-gray-600  border border-gray-200 "
              >
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt="Product"
                      className="w-full h-80"
                    />
                    {selectedColor && (
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundColor: selectedColor,
                          opacity: 0.4,
                          mixBlendMode: "multiply",
                        }}
                      />
                    )}
                  </div>

                  <div className="flex   justify-center gap-2 py-3">
                    {item.colors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleColorClick(item.id, color)}
                        className={`w-5 h-5 rounded-full border-2 ${
                          selectedColor === color
                            ? "ring-2 ring-offset-2 ring-gray-500"
                            : ""
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <FaChevronLeft className="text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>
    </section>
  );
}
