import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  // FaUser,
  // FaUserCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

const posts = [
  {
    id: 1,
    title: "DDC (Dubai Driving Center)",
    href: "#",
    description:
      "Built a responsive and modern UI for Dubai Driving Center using Nextjs, Reactjs, and Tailwind CSS. Integrated real-time driving service data for up-to-date user information. Designed modular, reusable components for scalable development. Ensured smooth user navigation with clear, intuitive layouts. Used Nodejs for backend APIs, enabling seamless data flow and server-side handling.",
    imageUrl: "/ddc.png",
    date: "Mar, 2023",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    // author: {
    //   name: "Priyanka Sahu",
    //   role: "Software Developer",
    //   href: "#",
    //   imageUrl: <FaUser className="text-gray-700" />,
    // },
  },

  {
    id: 3,
    title: "Samadhan (Hindustan Unilever Limited)",
    href: "#",
    description:
      "Developed a user-friendly interface to streamline internal operations for HUL’s Samadhan platform. Built reusable components for consistency and maintainability across the app. Integrated backend services to ensure real-time data updates and actions. Designed with a clean, responsive UI using Tailwind CSS and Reactjs.",
    imageUrl: "/Impact logo.png",
    date: "currently working",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    // author: {
    //   name: "Priyanka Sahu",
    //   role: "Software Developer",
    //   href: "#",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    // },
  },
  {
    id: 4,
    title: "Shogun (Hindustan Unilever Limited)",
    href: "#",
    description:
      "Created a robust dashboard to monitor and manage reconciliation workflows for internal teams. Emphasized data accuracy and transparency through detailed visual reports. Implemented seamless interactions using component-driven development in Reactjs. Enabled efficient backend communication with API integrations via Nodejs.",
    imageUrl: "/reconciliation.png",
    date: "currently working",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    // author: {
    //   name: "Priyanka Sahu",
    //   role: "Software Developer",
    //   href: "#",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    // },
  },

  {
    id: 7,
    title: "Shivashakthi",
    href: "#",
    description:
      "Developed a clean, informative website for Shivashakthi to showcase products and brand presence. Focused on simplicity and clarity to reflect the brand’s identity effectively. Created dynamic sections for content updates without code changes. Ensured fast load times and mobile responsiveness using Tailwind CSS.",
    imageUrl: "/shivashakti-logo.png",
    date: "Jun , 2024 - 2025",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    // author: {
    //   name: "Priyanka Sahu",
    //   role: "Software Developer",
    //   href: "#",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    // },
  },

  {
    id: 2,
    title: "Sites60",
    href: "#",
    description:
      "Contributed as an Assistant Developer in building the user interface and implementing key components for the project.Played a major role in making the site dynamic by integrating various interactive elements.Focused on enhancing the user experience by ensuring a responsive and visually appealing design.Collaborated in optimizing the functionality and structure of the website for smooth performance across different devices.",
    imageUrl: "/sites60.png",
    date: "Feb, 2023",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    // author: {
    //   name: "Priyanka Sahu",
    //   role: "Software Developer",
    //   href: "#",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    // },
  },
  {
    id: 5,
    title: "Design Walls",
    href: "#",
    description:
      "Assisted in developing the user interface by adding key components, ensuring a seamless and visually appealing design.Contributed to making the site dynamic by writing and integrating APIs, enabling smooth interaction and data flow.Enhanced the project’s functionality by collaborating on backend logic and integrating dynamic features into the UI.Played an essential role in ensuring the platform’s performance by testing, debugging, and optimizing the overall user experience.",
    imageUrl: "/designWalls.png",
    date: "Sep, 2023",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    // author: {
    //   name: "Priyanka Sahu",
    //   role: "Software Developer",
    //   href: "#",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    // },
  },
  {
    id: 6,
    title: "Home360",
    href: "#",
    description:
      "Designed and developed key UI components, ensuring an intuitive and responsive user interface for the project.Wrote and integrated APIs to make the platform dynamic and responsive, enhancing user interaction.Created a Progressive Web App (PWA) to improve accessibility and performance across multiple devices.Played a significant role in optimizing the overall functionality and user experience, ensuring smooth performance and seamless offline capabilities.",
    imageUrl: "/home360.png",
    date: "Dec, 2024",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    // author: {
    //   name: "Priyanka Sahu",
    //   role: "Software Developer",
    //   href: "#",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    // },
  },
];

export const Gallery = ({ darkMode }) => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;
  const itemWidth = 370;
  const gap = 20;

  const maxIndex = posts.length - visibleCount;

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

  return (
    <section
      id="projects"
      className={`${
        darkMode
          ? "bg-gradient-to-tr from-[#b0d8e5] via-[#3c8d99] to-[#f8fbff]"
          : "bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff]"
      }`}
    >
      <div className=" py-24 sm:py-16">
        <div
          className={`mx-auto max-w-7xl px-6 lg:px-8  ${
            darkMode
              ? "bg-gradient-to-tr from-[#b0d8e5] via-[#3c8d99] to-[#f8fbff]"
              : "bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff]"
          }`}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Projects
            </h2>
            <p
              className={`mt-2 text-lg/8 ${
                darkMode ? "text-gray-900" : "text-gray-600"
              }`}
            >
              Crafting intuitive, responsive, and impactful user experiences
              with modern front-end magic.
            </p>
          </div>

          <div className="relative mt-16">
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

            <div className="relative mt-10 overflow-hidden">
              <AnimatePresence>
                <div
                  className="flex transition-transform duration-500 ease-in-out "
                  style={{
                    transform: `translateX(-${startIndex * itemWidth}px)`,
                    width: `${posts.length * itemWidth}px`,
                    gap: `${gap}px`,
                  }}
                >
                  {posts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      style={{ width: `${itemWidth}px` }}
                      className="flex flex-col items-start justify-between hover:shadow-2xl transform hover:scale-105 "
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <div
                        key={post.id}
                        style={{ width: `${itemWidth}px` }}
                        className="flex flex-col items-start justify-between "
                      >
                        <div className="relative border-2 border-[#83d9e8] w-full">
                          <img
                            alt=""
                            src={post.imageUrl}
                            className="aspect-video w-full h-auto bg-gray-100 object-contain sm:aspect-2/1 lg:aspect-3/2"
                          />
                          <div className="absolute inset-0 ring-1 ring-gray-900/10 ring-inset" />
                        </div>
                        <div className="max-w-xl">
                          <div className="mt-8 flex items-center gap-x-4 text-xs">
                            <time
                              dateTime={post.datetime}
                              className="text-gray-500 px-3"
                            >
                              {post.date}
                            </time>
                            <a
                              href={post.category.href}
                              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                              {post.category.title}
                            </a>
                          </div>
                          <div className="group relative">
                            <h3 className="mt-3 text-lg/6 px-3 font-semibold text-gray-900 group-hover:text-gray-600">
                              <a href={post.href}>
                                <span className="absolute inset-0" />
                                {post.title}
                              </a>
                            </h3>
                            <p
                              className={`mt-5 text-xs/6 px-3 ${
                                darkMode ? "text-gray-900" : "text-gray-600"
                              }`}
                            >
                              {post.description
                                .split(".")
                                .map((sentence, index) => {
                                  if (sentence.trim()) {
                                    return (
                                      <span key={index}>
                                        <strong>{index + 1}.</strong>{" "}
                                        {sentence.trim()}.
                                        <br />
                                      </span>
                                    );
                                  }
                                  return null;
                                })}
                            </p>
                          </div>
                          {/* <div className="relative mt-8 flex items-center gap-x-4 px-3">
                            <FaUserCircle className="text-gray-700 h-10 w-10" />
                            <div className="text-sm/6">
                              <p className="font-semibold text-gray-900">
                                <a href={post.author.href}>
                                  <span className="absolute inset-0" />
                                  {post.author.name}
                                </a>
                              </p>
                              <p className="text-gray-600">
                                {post.author.role}
                              </p>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 -left-0  -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
                disabled={startIndex === 0}
              >
                <FaChevronLeft className="text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 -right-0 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
                disabled={startIndex === maxIndex}
              >
                <FaChevronRight className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

{
  /* <div
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
            ></div> */
}
