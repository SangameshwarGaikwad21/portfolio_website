
"use client";

import { Meteors } from "@/components/ui/meteors";
import { AuroraText } from "@/components/ui/aurora-text";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { ArrowDown } from "lucide-react";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/SangameshwarGaikwad21",
    icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sangameshwar-gaikwad-a83426340/",
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:sangamgaikwad214@gmail.com",
    icon: FaEnvelope,
    external: false,
  },
];

const ROLES = [
  {
    label: "Full Stack Developer",
    style:
      "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-300",
  },
  {
    label: "AI Engineer",
    style:
      "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
  },
];

export default function HeroSection() {
  const reduce = useReducedMotion();

  // Parent animation
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.15,
        delayChildren: reduce ? 0 : 0.1,
      },
    },
  };

  // Child animation
  const item: Variants = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 32,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background px-6 pb-24 pt-32 text-foreground transition-colors duration-300"
    >
      {/* Background */}
      <Meteors number={20} />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]"
      />

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-5xl text-center"
      >
        {/* Greeting */}
        <motion.p
          variants={item}
          className="mb-5 text-lg font-medium text-violet-600 dark:text-violet-400"
        >
          <span aria-hidden="true">👋 </span>
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <AuroraText>Sangameshwar</AuroraText>
          <br />

          <span className="bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500 bg-clip-text text-transparent">
            Balaji Gaikwad
          </span>
        </motion.h1>

        {/* Developer roles */}
        <motion.ul
          variants={item}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {ROLES.map((role) => (
            <li
              key={role.label}
              className={`rounded-full border px-5 py-2 text-sm backdrop-blur-lg ${role.style}`}
            >
              {role.label}
            </li>
          ))}
        </motion.ul>

        {/* Introduction */}
        <motion.p
          variants={item}
          className="mx-auto mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
        >
          I build modern, scalable and responsive web applications using
          React, Next.js, Node.js, MongoDB and AI technologies. I enjoy
          creating clean user experiences and solving real-world problems
          through software.
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="w-full rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
          >
            View my projects
          </button>

          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="w-full rounded-2xl border border-border bg-card px-8 py-3.5 font-semibold text-foreground shadow-sm backdrop-blur transition hover:border-violet-500 hover:bg-accent active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
          >
            Contact me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.ul
          variants={item}
          className="mt-12 flex justify-center gap-4"
        >
          {SOCIALS.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 rounded-full p-2 text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 sm:block"
      >
        <ArrowDown
          size={22}
          className={reduce ? "" : "animate-bounce"}
        />
      </button>
    </section>
  );
}
