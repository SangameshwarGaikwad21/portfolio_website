"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { BorderBeam } from "@/components/ui/border-beam";

const ProjectPage = () => {
  const liveHandle = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const colors = [
    "from-cyan-600 to-blue-500",
    "from-orange-600 to-pink-500",
    "from-green-600 to-emerald-500",
    "from-orange-600 to-red-500",
    "from-yellow-600 to-orange-500",
    "from-fuchsia-600 to-violet-500", // fixed invalid "white-600"
  ];

  const beamColors = ["via-cyan-400", "via-purple-500", "via-emerald-400"];

  const projects = [
    {
      id: 1,
      title: "Login Website",
      description:
        "A modern full-stack authentication application with a clean and responsive user experience.",
      image: "/login.png",
      tech: ["Next.js", "Node.js", "MongoDB"],
      github: "https://github.com/SangameshwarGaikwad21/Login-app",
      live: "https://login-app-ruddy-seven.vercel.app/",
    },
    {
      id: 2,
      title: "Blog Website",
      description:
        "A full-stack community blogging platform built with modern technologies and scalable backend services.",
      image: "/blog-website.png",
      tech: ["React.js", "Node.js", "MongoDB", "Docker", "Redis"],
      github: "https://github.com/SangameshwarGaikwad21/blog_website",
      live: "https://blogcommunity.vercel.app/",
    },
    {
      id: 3,
      title: "E-Commerce Website",
      description:
        "A modern e-commerce platform with a responsive interface and a scalable application architecture.",
      image: "/project2.png",
      tech: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
      github: "https://github.com/SangameshwarGaikwad21/E-commerce",
      live: "https://shop-nexus-eight.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full overflow-x-hidden bg-zinc-950 px-4 py-16 text-white sm:px-6 sm:py-20 md:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-14 md:mb-16 md:text-left"
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-cyan-400 sm:mb-4 sm:text-sm">
            MY WORK
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Featured Projects
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:mt-5 sm:text-base md:mx-0 md:text-lg">
            A collection of projects where I experiment, build, and turn ideas
            into real-world applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => {
            const color = colors[index % colors.length];

            return (
              <motion.article
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative w-full"
              >
                {/* Card Glow (desktop hover only) */}
                <div
                  className={`absolute -inset-1 hidden rounded-3xl bg-gradient-to-r ${color} opacity-0 blur-2xl transition duration-500 md:block md:group-hover:opacity-30`}
                />

                {/* Card */}
                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-3 shadow-2xl sm:p-4">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden rounded-2xl sm:h-56">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-500 md:group-hover:opacity-30" />

                    <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-medium text-white sm:left-4 sm:top-4">
                      0{project.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-3 sm:p-4">
                    {/* Title: solid white on mobile, gradient on desktop hover */}
                    <h2
                      className={`text-xl font-bold text-white transition-all duration-300 sm:text-2xl md:group-hover:bg-gradient-to-r ${color} md:group-hover:bg-clip-text md:group-hover:text-transparent`}
                    >
                      {project.title}
                    </h2>

                    <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400 sm:mt-3 sm:text-base">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-zinc-300 transition-colors duration-300 sm:rounded-xl sm:px-3 sm:py-2 sm:text-xs md:hover:border-white/20 md:hover:bg-white/10 md:hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-7 sm:gap-3">
                      <button
                        onClick={() => liveHandle(project.github)}
                        className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-medium text-zinc-300 transition-all duration-300 active:scale-95 sm:px-4 sm:py-3 sm:text-sm md:hover:border-white/20 md:hover:bg-white/10 md:hover:text-white"
                      >
                        <BsGithub className="h-4 w-4" />
                        GitHub
                      </button>

                      <button
                        onClick={() => liveHandle(project.live)}
                        className={`flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${color} px-3 py-2.5 text-xs font-semibold text-white shadow-lg transition-all duration-300 active:scale-95 sm:px-4 sm:py-3 sm:text-sm md:hover:scale-[1.03] md:hover:shadow-xl`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </button>
                    </div>

                    {/* Bottom Gradient Line: always visible on mobile */}
                    <div
                      className={`mt-5 h-[2px] w-full rounded-full bg-gradient-to-r ${color} transition-all duration-700 ease-out sm:mt-6 md:w-0 md:group-hover:w-full`}
                    />
                  </div>

                  {/* Animated Border */}
                  <BorderBeam
                    duration={10}
                    size={250}
                    className={`from-transparent ${
                      beamColors[index % beamColors.length]
                    } to-transparent`}
                  />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPage;