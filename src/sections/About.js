"use client";

import { motion } from "framer-motion";
import { Code2, Braces, Server, Database, Rocket, FileCode2 } from "lucide-react";

const skills = [
  { name: "HTML & CSS", level: 90, icon: Code2 },
  { name: "JavaScript", level: 80, icon: Braces },
  { name: "TypeScript", level: 70, icon: FileCode2 },
  { name: "React", level: 75, icon: Code2 },
  { name: "Next.js", level: 85, icon: Rocket },
  { name: "Node.js", level: 75, icon: Server },
  { name: "Express.js", level: 70, icon: Server },
  { name: "MongoDB", level: 70, icon: Database },
  { name: "Deployment (Git/Vercel)", level: 90, icon: Rocket },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-slate-950 text-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About Me
          </h2>

          {/* Animated divider */}
          <motion.div
            className="h-[3px] w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent mb-6"
            animate={{ x: ["-40%", "40%", "-40%"] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <p className="text-gray-300 leading-relaxed mb-6">
            I am a full-stack JavaScript developer building modern web apps with React, Next.js, Node.js, Express, MongoDB, and TypeScript. I enjoy creating responsive interfaces and reliable backend systems that power real products.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            I love turning ideas into functional digital experiences and constantly improving my skills by building real projects and exploring modern development tools.
          </p>

          <p className="text-green-400 font-medium">
            Currently seeking internship and entry-level developer opportunities where I can contribute to real products, grow as a full-stack developer, and deliver value to a team.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="relative">
          {/* subtle glow background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[420px] h-[420px] bg-green-500/10 blur-[120px] rounded-full"></div>
          </div>

          <div className="space-y-3 relative">
            {skills.map((skill, i) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-3 rounded-lg hover:bg-slate-900 transition"
                >
                  <div className="flex justify-between mb-1 text-sm items-center">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-green-400" />
                      <span>{skill.name}</span>
                    </div>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="w-full bg-gray-800 rounded-full h-2 relative">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: skill.level / 100 }}
                      transition={{ duration: 0.9, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: "left" }}
                      className="h-2 bg-green-500 rounded-full relative shadow-[0_0_12px_rgba(34,197,94,0.6)] will-change-transform"
                    >
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-4 bg-green-400 rounded-sm shadow-[0_0_10px_#22c55e]"></span>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}