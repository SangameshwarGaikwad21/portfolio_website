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
    "from-cyan-500 to-blue-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-yellow-500 to-orange-500",
    "from-indigo-500 to-violet-500",
  ];

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
      image: "/blog_website.png",
      tech: ["React.js", "Node.js", "MongoDB", "Docker", "Redis"],
      github: "https://github.com/SangameshwarGaikwad21/blog_website",
      live: "https://blogcommunity.vercel.app/",
    },
    {
      id: 3,
      title: "E-Commerce Website",
      description:
        "A modern e-commerce platform with a responsive interface and a scalable application architecture.",
      image: "/e-commerce.png",
      tech: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
      github: "https://github.com/SangameshwarGaikwad21/E-commerce",
      live: "https://shop-nexus-eight.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-cyan-400">
            MY WORK
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Featured Projects
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
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
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group relative"
            >
              {/* Background Glow */}
              <div
                className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${
                  colors[index % colors.length]
                } opacity-0 blur-2xl transition duration-500 group-hover:opacity-30`}
              />

              {/* Card */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80 p-4 shadow-2xl backdrop-blur-xl">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-30" />

                  {/* Project Number */}
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    0{project.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                  <h2
                    className={`text-2xl font-bold transition-all duration-300 group-hover:bg-gradient-to-r ${
                      colors[index % colors.length]
                    } group-hover:bg-clip-text group-hover:text-transparent`}
                  >
                    {project.title}
                  </h2>

                  <p className="mt-3 flex-1 leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{
                          scale: 1.08,
                          y: -2,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-300 transition-colors duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => liveHandle(project.github)}
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      <BsGithub className="h-4 w-4" />
                      GitHub
                    </button>

                    <button
                      onClick={() => liveHandle(project.live)}
                      className={`flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${
                        colors[index % colors.length]
                      } px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </button>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div
                    className={`mt-6 h-[2px] w-0 rounded-full bg-gradient-to-r ${
                      colors[index % colors.length]
                    } transition-all duration-700 ease-out group-hover:w-full`}
                  />
                </div>

                {/* Animated Border */}
                <BorderBeam
                  duration={10}
                  size={250}
                  className={`from-transparent ${
                    index === 0
                      ? "via-cyan-400"
                      : index === 1
                        ? "via-purple-500"
                        : "via-emerald-400"
                  } to-transparent`}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPage;