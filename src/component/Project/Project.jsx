"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

const ProjectPage = () => {


  const liveHandle =(url)=>{
     window.open(url, "_blank");
  }

  const colors = [
  "from-cyan-500 to-blue-500",
  "from-purple-500 to-pink-500",
  "from-green-500 to-emerald-500",
  "from-orange-500 to-red-500",
  "from-yellow-500 to-orange-500",
  "from-indigo-500 to-violet-500",
];


  const projects =[
    {
      id: 1,
      title: "Login_Website",
      description: "A full-stack Login App",
      image: "/login.png",
      tech: ["Next.js", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/chat-app",
      live: "https://login-app-ruddy-seven.vercel.app/",
    },
    {
      id: 2,
      title: "Blog_Website",
      description: "A full-stack Blog Website",
      image: "/blog_website.png",
      tech: ["React.js", "Node.js", "MongoDB","Docker","Redis"],
      github: "https://github.com/yourusername/chat-app",
      live: "https://blogcommunity.vercel.app/",
    },
    {
      id: 3,
      title: "E-Commerce_Website",
      description: "A full-stack E-Commerce Website",
      image: "/e-commerce.png",
      tech: ["Next.js", "Node.js", "MongoDB","Typescript"],
      github: "https://github.com/yourusername/chat-app",
      live: "https://shop-nexus-eight.vercel.app/",
    },
  ]

 
 return (
 <div className="pt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
  {projects.map((project, index) => (
    <motion.div
      key={project.id}
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group h-full"
    >
      {/* Glow */}
      <div
        className={`absolute rounded-2xl bg-gradient-to-r ${
          colors[index % colors.length]
        } opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-30`}
      />

      {/* Card */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 p-6 transition-all duration-500 group-hover:border-transparent">
        {/* Image */}
        <div className="overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="mt-5 flex flex-1 flex-col">
          <h2
            className={`text-2xl font-bold transition-colors duration-300 group-hover:bg-gradient-to-r ${
              colors[index % colors.length]
            } group-hover:bg-clip-text group-hover:text-transparent`}
          >
            {project.title}
          </h2>

          <p className="mt-3 flex-1 text-slate-400">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className={`rounded-full bg-gradient-to-r ${
                  colors[index % colors.length]
                } px-3 py-1 text-sm font-medium text-white shadow-lg`}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <button
                onClick={() => liveHandle(project.live)}
                className={`mt-6 rounded-lg bg-gradient-to-r ${
                  colors[index % colors.length]
                } px-4 py-2 font-semibold text-white`}
              >
                Live Website
        </button>           

          {/* Bottom Gradient Line */}
          <div
            className={`mt-6 h-1 w-0 rounded-full bg-gradient-to-r ${
              colors[index % colors.length]
            } transition-all duration-500 group-hover:w-full`}
          />
        </div>
      </div>
    </motion.div>
  ))}
</div>
  )
}

export default ProjectPage