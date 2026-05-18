"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      
      <div className="text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Sangameshwar Gaikwad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-2xl text-gray-300"
        >
          I am a Full Stack Web Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-2 text-xl text-purple-400"
        >
          Passionate about Backend Development 🚀
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-8"
        >
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition-all rounded-2xl shadow-lg">
            <Link href={"#"}>
              View Projects
            </Link>
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default HeroSection;