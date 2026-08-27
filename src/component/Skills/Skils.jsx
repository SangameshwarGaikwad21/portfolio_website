"use client";

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiFramer,
  SiDocker,
  SiGit,
  SiGithub,
  SiMongodb,
  SiRedis,
  SiExpress,
  SiPostman,
  SiVercel,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
} from "react-icons/si";

import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";

const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss, color: "#1572B6" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "#06B6D4",
        },
        { name: "Framer Motion", icon: SiFramer, color: "#FF0080" },
      ],
    },
    {
      title: "Developer Tools & Platforms",
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      ],
    },
    {
      title: "Database & Backend",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Redis", icon: SiRedis, color: "#FF4438" },
      ],
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-blue-400">
            MY TECH STACK
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Technologies I Work With
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            A collection of technologies, frameworks, tools, and platforms I
            use to build modern, scalable, and high-performance applications.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur-xl"
            >
              {/* Card Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-purple-500/20" />

              {/* Category Header */}
              <div className="relative mb-8 flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.9)]" />

                <h2 className="text-xl font-semibold tracking-wide text-white">
                  {category.title}
                </h2>
              </div>

              {/* Skills */}
              <div className="relative flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        scale: 1.08,
                        y: -4,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="group/skill flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.08]"
                    >
                      {/* Icon */}
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-xl transition-transform duration-300 group-hover/skill:scale-110"
                        style={{
                          color: skill.color,
                          boxShadow: `0 0 20px ${skill.color}30`,
                        }}
                      >
                        <Icon />
                      </div>

                      {/* Skill Name */}
                      <span className="text-sm font-medium text-zinc-300 transition-colors group-hover/skill:text-white">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Animated Border Beam 1 */}
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-blue-500 to-transparent"
              />

              {/* Animated Border Beam 2 */}
              <BorderBeam
                duration={8}
                delay={4}
                size={300}
                borderWidth={2}
                className="from-transparent via-purple-500 to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;