import { motion } from "framer-motion";
import { FaSmile, FaBrain, FaRocket } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-blue-50 via-cyan-100 to-white p-10 flex items-center justify-center overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute w-full h-full bg-gradient-to-tr from-cyan-200 via-purple-300 to-pink-300 animate-gradient"
        style={{ top: 0, left: 0, zIndex: -1 }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Multiple Circles */}

      {[...Array(25)].map((_, index) => {
        const size = Math.random() * 80 + 60; // Random size between 60px and 140px
        return (
          <motion.div
            key={index}
            className="absolute bg-gradient-to-tr from-cyan-200 via-purple-300 to-pink-300 rounded-full"
            style={{
              width: `${size}px`, // Random size for width
              height: `${size}px`, // Ensuring height matches width to maintain circle shape
              top: `${Math.random() * 100}%`, // Random vertical position
              left: `${Math.random() * 100}%`, // Random horizontal position
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
              delay: index * 0.3,
            }}
          />
        );
      })}

      {/* Floating Particles Effect */}
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none z-[-1]">
        <motion.div
          className="particles bg-cyan-300 rounded-full w-2 h-2 absolute"
          animate={{
            x: [Math.random() * 100, Math.random() * 100],
            y: [Math.random() * 100, Math.random() * 100],
            opacity: [0.8, 0.4, 0.8],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 6,
            delay: 1,
          }}
        />
        <motion.div
          className="particles bg-purple-300 rounded-full w-2 h-2 absolute"
          animate={{
            x: [Math.random() * 100, Math.random() * 100],
            y: [Math.random() * 100, Math.random() * 100],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 5,
            delay: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 bg-white shadow-xl rounded-2xl p-8 max-w-3xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-4 text-cyan-700"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        >
          Hello, I&#39;m Priyanka 👋
        </motion.h1>
        <motion.p
          className="text-gray-700 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          A passionate developer, travel enthusiast, and creative thinker
          who&#39;s all about crafting smooth, beautiful user experiences.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-cyan-100 rounded-xl text-center shadow"
          >
            <FaSmile className="text-3xl text-cyan-600 mb-2 mx-auto" />
            <h3 className="font-bold text-cyan-700">Friendly & Curious</h3>
            <p className="text-sm text-cyan-700">
              Always ready to learn something new and make people smile.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-cyan-100 rounded-xl text-center shadow"
          >
            <FaBrain className="text-3xl text-cyan-600 mb-2 mx-auto" />
            <h3 className="font-bold text-cyan-700">Problem Solver</h3>
            <p className="text-sm text-cyan-700">
              Loves challenges and finding creative solutions in tech and
              design.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-cyan-100 rounded-xl text-center shadow"
          >
            <FaRocket className="text-3xl text-cyan-600 mb-2 mx-auto" />
            <h3 className="font-bold text-cyan-700">Always Growing</h3>
            <p className="text-sm text-cyan-700">
              Focused on self-improvement and pushing the boundaries of
              creativity.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-600">
            Let&#39;s build something amazing together! 💡
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
