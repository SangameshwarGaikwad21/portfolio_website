"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers,
  Rocket,
  GraduationCap,
} from "lucide-react";

import { BorderBeam } from "@/components/ui/border-beam";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const highlights = [
  {
    icon: Code2,
    title: "Full Stack",
    description: "Building modern web applications",
  },
  {
    icon: Database,
    title: "Backend",
    description: "APIs, databases & scalable systems",
  },
  {
    icon: Layers,
    title: "Frontend",
    description: "Responsive and interactive interfaces",
  },
];

export default function AboutPage() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-7xl"
      >
        {/* Heading */}
        <motion.div variants={item} className="mb-20 text-center">
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-cyan-400">
            GET TO KNOW ME
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            A passionate developer focused on building modern, scalable, and
            user-friendly web applications.
          </p>
        </motion.div>

        {/* Main Section */}
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Side - Image */}
          <motion.div
            variants={item}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="group relative w-full max-w-md"
            >
              {/* Background Glow */}
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/photos.jpeg"
                    alt="Sangameshwar"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Animated Border */}
                <BorderBeam
                  duration={8}
                  size={300}
                  className="from-transparent via-cyan-400 to-transparent"
                />

                <BorderBeam
                  duration={8}
                  delay={4}
                  size={300}
                  borderWidth={2}
                  className="from-transparent via-purple-500 to-transparent"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -right-4 rounded-2xl border border-white/10 bg-zinc-900/90 px-5 py-4 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500">
                    <Rocket className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Full Stack Developer
                    </p>

                    <p className="text-xs text-zinc-400">
                      Building & Learning
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={item} className="space-y-6">
            {/* Intro */}
            <div className="space-y-5 text-base leading-8 text-zinc-400 md:text-lg">
              <p>
                I'm a final-year Computer Science Engineering student and a
                passionate{" "}
                <span className="font-semibold text-white">
                  Full Stack Developer
                </span>{" "}
                from Pune, India.
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
                with{" "}
                <span className="font-semibold text-white">First Class</span>.
                This gave me a strong foundation in programming and software
                development.
              </p>

              <p>
                I enjoy building scalable and user-friendly web applications.
                My main stack includes{" "}
                <span className="font-semibold text-cyan-400">
                  React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS,
                  and TypeScript.
                </span>
              </p>
            </div>

            {/* Highlights */}
            <motion.div
              variants={container}
              className="grid gap-4 sm:grid-cols-3"
            >
              {highlights.map((highlight) => {
                const Icon = highlight.icon;

                return (
                  <motion.div
                    key={highlight.title}
                    variants={item}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 20,
                    }}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:bg-white/[0.06]"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-sm font-semibold text-white">
                      {highlight.title}
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                      {highlight.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Remaining Content */}
            <div className="space-y-5 text-base leading-8 text-zinc-400 md:text-lg">
              <p>
                I've built projects like a{" "}
                <span className="font-semibold text-white">
                  Real-Time Chat Application
                </span>
                ,{" "}
                <span className="font-semibold text-white">
                  E-commerce Platform
                </span>
                , and{" "}
                <span className="font-semibold text-white">
                  Blog Platform
                </span>
                , focusing on responsive UI, authentication, real-time
                communication, and scalable backend architecture.
              </p>

              <p>
                I'm also learning{" "}
                <span className="font-semibold text-purple-400">
                  Data Structures & Algorithms, Generative AI, AI Agents,
                  Docker, Redis, and System Design
                </span>{" "}
                to become a better software engineer.
              </p>

              <p>
                My goal is to join a company where I can solve real-world
                problems, build impactful products, and continue learning every
                day.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={item}
          className="mt-24 flex flex-col items-center justify-center gap-3 text-center"
        >
          <div className="flex items-center gap-2 text-zinc-400">
            <GraduationCap className="h-5 w-5 text-cyan-400" />

            <span className="text-sm">
              Computer Science Engineering Student
            </span>
          </div>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}