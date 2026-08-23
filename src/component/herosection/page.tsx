"use client";

import { Meteors } from "@/components/ui/meteors";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      delay,
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">

      {/* ☄️ Meteors Background */}
      <Meteors number={20} />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl justify-center">
        <div className="text-center">

          {/* Greeting */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-5 text-lg text-violet-400"
          >
            👋 Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-5xl font-black leading-tight md:text-7xl"
          >
            Sangameshwar

            <br />

            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Balaji Gaikwad
            </span>
          </motion.h1>

          {/* Tags */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm backdrop-blur-lg">
              Full Stack Developer
            </span>

            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm backdrop-blur-lg">
              AI Engineer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400"
          >
            I build modern, scalable and responsive web applications using
            React, Next.js, Node.js, MongoDB and AI technologies.
            I enjoy creating clean user experiences and solving
            real-world problems through software.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-12 flex justify-center gap-5"
          >
            <Link
              href="https://github.com/SangameshwarGaikwad21"
              target="_blank"
              className="rounded-full border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:bg-violet-500/20"
            >
              <FaGithub size={22} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/sangameshwar-gaikwad-a83426340/"
              target="_blank"
              className="rounded-full border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:bg-violet-500/20"
            >
              <FaLinkedin size={22} />
            </Link>

            <Link
              href="mailto:sangamgaikwad214@gmail.com"
              className="rounded-full border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:bg-violet-500/20"
            >
              <FaEnvelope size={22} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}