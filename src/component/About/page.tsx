"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import {
  Code2,
  Database,
  Layers,
  Rocket,
  GraduationCap,
  MapPin,
} from "lucide-react";

import { BorderBeam } from "@/components/ui/border-beam";

const HIGHLIGHTS = [
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

const STACK = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "TypeScript",
];

const LEARNING = [
  "Data Structures & Algorithms",
  "Generative AI",
  "AI Agents",
  "Docker",
  "Redis",
  "System Design",
];

export default function AboutSection() {
  const reduce = useReducedMotion();

  // Parent animation controls the child animation sequence.
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
      },
    },
  };

  // Animation applied to each child component.
  const item: Variants = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 28,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 text-white sm:py-32"
    >
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative mx-auto max-w-7xl"
      >
        {/* Section heading */}
        <motion.div
          variants={item}
          className="mb-16 text-center sm:mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              me
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            A developer focused on building modern, scalable and
            user-friendly web applications.
          </p>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Profile image */}
          <motion.div
            variants={item}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              whileHover={reduce ? undefined : { y: -8 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="group relative w-full max-w-md"
            >
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/photos.jpeg"
                    alt="Portrait of Sangameshwar Gaikwad"
                    fill
                    sizes="(min-width: 1024px) 28rem, 90vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {!reduce && (
                  <>
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
                  </>
                )}
              </div>

              {/* Floating badge */}
              <motion.div
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 right-2 rounded-2xl border border-white/10 bg-zinc-900/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-4 sm:px-5 sm:py-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500">
                    <Rocket
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Full Stack Developer
                    </p>
                    <p className="text-xs text-zinc-400">
                      Building &amp; learning
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* About content */}
          <motion.div variants={item} className="space-y-8">
            {/* Introduction */}
            <div className="space-y-5 text-base leading-8 text-zinc-400 md:text-lg">
              <p>
                I&apos;m a final-year Computer Science Engineering
                student and a{" "}
                <strong className="font-semibold text-white">
                  Full Stack Developer
                </strong>{" "}
                from Pune, India.
              </p>

              <p>
                I completed my{" "}
                <strong className="font-semibold text-white">
                  Diploma in Computer Engineering
                </strong>{" "}
                at JSPM Polytechnic, Hadapsar, Pune with First
                Class, which gave me a strong foundation in
                programming and software development.
              </p>

              <p>
                I&apos;ve built a real-time chat app, an
                e-commerce platform and a blog platform, focusing
                on responsive UI, authentication, real-time
                communication and scalable backend design.
              </p>
            </div>

            {/* Highlights */}
            <motion.ul
              variants={container}
              className="grid gap-4 sm:grid-cols-3"
            >
              {HIGHLIGHTS.map(
                ({ icon: Icon, title, description }) => (
                  <motion.li
                    key={title}
                    variants={item}
                    whileHover={
                      reduce ? undefined : { y: -5 }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 20,
                    }}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:bg-white/[0.06]"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                      <Icon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-sm font-semibold">
                      {title}
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                      {description}
                    </p>
                  </motion.li>
                )
              )}
            </motion.ul>

            {/* Tech stack and learning */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-semibold text-white">
                  Main stack
                </h3>

                <ul className="flex flex-wrap gap-2">
                  {STACK.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold text-white">
                  Currently learning
                </h3>

                <ul className="flex flex-wrap gap-2">
                  {LEARNING.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-full border border-purple-400/25 bg-purple-400/10 px-3 py-1 text-sm text-purple-300"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-base leading-8 text-zinc-400 md:text-lg">
              My goal is to join a team where I can solve
              real-world problems, build impactful products and
              keep learning every day.
            </p>
          </motion.div>
        </div>

        {/* Footer strip */}
        <motion.div
          variants={item}
          className="mt-20 flex flex-col items-center justify-center gap-3 text-center text-sm text-zinc-400 sm:mt-24 sm:flex-row sm:gap-8"
        >
          <span className="flex items-center gap-2">
            <GraduationCap
              className="h-5 w-5 text-cyan-400"
              aria-hidden="true"
            />
            Computer Science Engineering student
          </span>

          <span className="flex items-center gap-2">
            <MapPin
              className="h-5 w-5 text-cyan-400"
              aria-hidden="true"
            />
            Pune, India
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
