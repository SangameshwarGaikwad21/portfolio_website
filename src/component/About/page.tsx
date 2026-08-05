"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#0f172a] px-6 py-20 text-white">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl"
      >
        {/* Heading */}
        <motion.div variants={item} className="mb-16 text-center">
          <h1 className="text-5xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="mt-4 text-slate-400">
            Passionate Full Stack Developer building modern web applications.
          </p>
        </motion.div>

        {/* Main Section */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Image */}
          <motion.div
            variants={item}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-30 blur-2xl"></div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900 p-2">
                <Image
                  src="/photos.jpeg"
                  alt="Sangameshwar"
                  width={420}
                  height={520}
                  className="rounded-2xl object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={item}
            className="space-y-6 text-lg leading-9 text-slate-300"
          >
            <p>
              I'm a final-year Computer Science Engineering student and a
              passionate <span className="font-semibold text-white">Full Stack Developer</span> from Pune,
              India.
            </p>
            <p>
                I completed my{" "}
                <span className="font-semibold text-white">
                  Diploma in Computer Engineering
                </span>{" "}
                from{" "}
                <span className="font-semibold text-cyan-400">
                  JSPM Polytechnic, Hadapsar, Pune
                </span>{" "}
                with <span className="font-semibold text-white">First Class</span>. This
                gave me a strong foundation in programming and software development.
              </p>

            <p>
              I enjoy building scalable and user-friendly web applications.
              My main stack includes{" "}
              <span className="font-semibold text-cyan-400">
                React.js, Next.js, Node.js, Express.js, MongoDB,
                Tailwind CSS, and TypeScript.
              </span>
            </p>
            
            <p>
              I've built projects like a{" "}
              <span className="text-white font-semibold">
                Real-Time Chat Application
              </span>
              ,{" "}
              <span className="text-white font-semibold">
                E-commerce Platform
              </span>
              , and{" "}
              <span className="text-white font-semibold">
                Blog Platform
              </span>
              , focusing on responsive UI, authentication,
              real-time communication, and scalable backend architecture.
            </p>

            <p>
              I'm also learning{" "}
              <span className="font-semibold text-cyan-400">
                Data Structures & Algorithms,
                Generative AI,
                AI Agents,
                Docker,
                Redis,
                and System Design
              </span>{" "}
              to become a better software engineer.
            </p>

            <p>
              My goal is to join a company where I can solve real-world
              problems, build impactful products, and continue learning every
              day.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}