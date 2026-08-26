"use client";

import { SiJavascript,SiTypescript,SiPython,SiHtml5,SiCss,SiReact,SiNextdotjs,SiNodedotjs,SiTailwindcss,SiFramer,SiDocker,SiGit,SiGithub,SiPostgresql,SiMongodb,SiRedis,SiSupabase,SiFirebase,SiExpress,SiPostman,SiVercel,} from "react-icons/si";
import { motion } from "framer-motion";

const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Python", icon: SiPython },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss },
      ],
    },

    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
      ],
    },

    {
      title: "Developer Tools & Platforms",
      skills: [
        { name: "Docker", icon: SiDocker },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Postman", icon: SiPostman },
        { name: "Vercel", icon: SiVercel },
      ],
    },

    {
      title: "Database & Backend",
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "Redis", icon: SiRedis },
      ],
    },
  ];

  return (
    
    <section className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mb-16 text-sm font-semibold
            tracking-[0.15em]
            text-zinc-400
          "
        >
          TECHNOLOGIES & SKILLS
        </motion.p>

        {/* Categories Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                rounded-3xl
                border border-white/5
                bg-zinc-900/60
                p-8
                shadow-lg
                backdrop-blur-sm
              "
            >
              {/* Category Title */}
              <h2 className="mb-6 text-2xl font-semibold text-white">
                {category.title}
              </h2>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        y: -3,
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="
                        flex cursor-pointer
                        items-center gap-2
                        rounded-full
                        border border-white/5
                        bg-white/5
                        px-4 py-2
                        text-base
                        font-medium
                        text-zinc-300
                        transition
                        hover:bg-white/10
                        hover:text-white
                      "
                    >
                      <Icon className="text-lg" />

                      <span>
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;