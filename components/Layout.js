"use client";
import React, { useState } from "react";
import { destinations } from "../components/Cards";

const Layout = ({ children, onSelectDestination }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredPlaces([]);
    } else {
      const results = destinations.filter((destination) =>
        destination.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPlaces(results);
    }
  };

  return (
    <>
      <div className="bg-white px-4 flex justify-between items-center h-20">
        <div className="flex items-center">
          <h1 className="text-3xl text-black font-bold">
            🌍 ⍵ɑ𐓣ᑯ౿𝗋ᥣυડ𝗍 𝖤𝗑ρᥣ𝗈𝗋౿𝗋
          </h1>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative flex items-center border-2 border-gray-300 rounded-lg bg-white">
            <span className="text-gray-500 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="px-4 py-2 w-full text-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {filteredPlaces.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border-2 border-gray-300 mt-1 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                {filteredPlaces.map((destination, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSearchTerm(destination?.name);
                      onSelectDestination?.(destination);
                      setFilteredPlaces([]);
                    }}
                  >
                    {destination?.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex space-x-6">
            <button className="text-gray-700 font-bold hover:text-gray-900">
              нσмє
            </button>
            <button className="text-gray-700 font-bold hover:text-gray-900">
              𝖠ᑲ𝗈υ𝗍
            </button>
            <button className="text-gray-700 font-bold hover:text-gray-900">
              𝖢𝗈𐓣𝗍ɑɕ𝗍
            </button>
          </div>
        </div>
      </div>

      <main className="p-4 bg-white">{children}</main>
    </>
  );
};

export default Layout;
