import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className={`py-12 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-tr from-[#b0d8e5] via-[#3c8d99] to-[#f8fbff]"
          : "bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff]"
      }`}
    >
      {/* Background concentric circles */}
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

      <div className="relative z-10 py-10 sm:py-12">
        <div className="lg:mx-auto md:mx-auto sm:mx-5 sm:max-w-xl  md:max-w-4xl lg:max-w-7xl sm:px-6 lg:px-8">
          <div
            className={`relative isolate overflow-hidden hover:shadow-xl  px-6 py-24 sm:px-10 xl:py-20  shadow-sm border border-[#83d9e8] ${
              darkMode
                ? "bg-gradient-to-tr from-[#b0d8e5] via-[#3c8d99] to-[#f8fbff]"
                : "bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff]"
            }`}
          >
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

            <h2
              className={`mx-auto max-w-3xl  text-center text-4xl font-semibold tracking-tight sm:text-5xl ${
                darkMode ? "text-gray-900" : "text-gray-800"
              }`}
            >
              Let&#39;s Connect
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-900">
              Have a project in mind or just want to say hi? I&#39;m always open
              to discussing new ideas, collaborations, or opportunities.
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-gray-300 bg-white px-3.5 py-2 text-base text-gray-800 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-200 sm:text-sm"
              />
              <button
                type="submit"
                className="flex-none rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                Notify me
              </button>
            </form>

            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/priyanka-sahu27"
                target="_blank"
                rel="noopener noreferrer"
                className={` hover:text-blue-700 transition ${
                  darkMode ? "text-gray-900" : "text-gray-600"
                }`}
                // className="text-gray-600 hover:text-blue-700 transition"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/Priyankaps77"
                target="_blank"
                rel="noopener noreferrer"
                className={`  transition ${
                  darkMode
                    ? "text-gray-900 hover:text-gray-600"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.instagram.com/_the_g00d_half"
                target="_blank"
                rel="noopener noreferrer"
                className={` hover:text-pink-500 transition ${
                  darkMode ? "text-gray-900" : "text-gray-600"
                }`}
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://x.com/Priyank23684334"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 hover:text-blue-500 transition ${
                  darkMode ? "text-gray-900" : "text-gray-600"
                }`}
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://www.facebook.com/share/167z9GypDV/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className={` hover:text-blue-600 transition ${
                  darkMode ? "text-gray-900" : "text-gray-600"
                }`}
              >
                <FaFacebook size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div
              className={`absolute top-[-150px] left-[-150px] w-[600px] h-[600px] rounded-full border-[6px] animate-pulse ${
                darkMode
                  ? "border-[#b2e7f0] opacity-50"
                  : "border-[#83d9e8] opacity-80"
              }`}
            ></div>
            <div
              className={`absolute top-[100px] left-[50px] w-[400px] h-[400px] rounded-full border-[5px]  ${
                darkMode
                  ? "border-[#b2e7f0] opacity-50"
                  : "border-[#5fc7dc] opacity-30"
              }`}
            ></div>
            <div
              className={`absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full border-[6px] ${
                darkMode
                  ? "border-[#b2e7f0] opacity-50"
                  : "border-[#83d9e8] opacity-30"
              }`}
            ></div> */
}
{
  /* <div
        className={`absolute top-[-150px] left-[-150px] w-[600px] h-[600px] rounded-full border-[6px]  animate-pulse ${
          darkMode
            ? "border-[#b2e7f0] opacity-100"
            : "border-[#83d9e8] opacity-50"
        }`}
      ></div>
      <div
        className={`absolute top-[100px] left-[50px] w-[400px] h-[400px] hover:shadow-xl rounded-full border-[5px]  ${
          darkMode
            ? "border-[#b2e7f0] opacity-100"
            : "border-[#5fc7dc] opacity-50"
        }`}
      ></div>
      <div
        className={`absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full border-[6px]  ${
          darkMode
            ? "border-[#b2e7f0] opacity-100"
            : "border-[#83d9e8] opacity-50"
        }`}
      ></div> */
}
