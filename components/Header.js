import { FaSearch, FaUser, FaSuitcase, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      id="#home"
      className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex-shrink-0">
          <div className="bg-black text-white px-3 py-2 font-bold text-sm tracking-widest">
            PRIYANKA SAHU
          </div>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-semibold text-black uppercase tracking-wider">
          <a href="#home" className="hover:text-gray-600">
            Home
          </a>
          <a href="#about" className="hover:text-gray-600">
            About
          </a>
          <a href="#projects" className="hover:text-gray-600">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-600">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-6 text-black text-lg">
          <div className="bg-[#83d9e8] h-8 w-8 text-black rounded-full p-2 flex justify-center items-center">
            <button
              onClick={toggleTheme}
              className="text-lg cursor-pointer hover:text-gray-600"
              
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
          <FaSearch className="cursor-pointer hover:text-gray-600" />
          <FaUser className="cursor-pointer hover:text-gray-600" />
          <div className="relative">
            <FaSuitcase className="cursor-pointer hover:text-gray-600 " />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
