"use client";

import {
  Code,
  Server,
  Database,
  Globe,
  GitBranch,
  Cloud,
} from "lucide-react";
import { motion } from "framer-motion";

export default function TeckStack() {
  const stack = [
    { name: "HTML", icon: <Code size={28} /> },
    { name: "CSS", icon: <Code size={28} /> },
    { name: "JavaScript", icon: <Code size={28} /> },
    { name: "React", icon: <Code size={28} /> },
    { name: "Next.js", icon: <Globe size={28} /> },
    { name: "TailwindCSS", icon: <Code size={28} /> },
    { name: "Node.js", icon: <Server size={28} /> },
    { name: "Express.js", icon: <Server size={28} /> },
    { name: "MongoDB", icon: <Database size={28} /> },
    { name: "Firebase", icon: <Cloud size={28} /> },
    { name: "Git", icon: <GitBranch size={28} /> },
    { name: "Deployment", icon: <Cloud size={28} /> }
  ];

  return (
    <section
      id="teck"
      className="py-28 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Tech Stack
          </h2>

          {/* Animated divider */}
          <motion.div
            className="h-[3px] w-24 mx-auto bg-gradient-to-r from-transparent via-green-500 to-transparent mb-4"
            animate={{ x: ["-40%", "40%", "-40%"] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <p>
            Technologies I use to design and build modern web applications.
          </p>
        </motion.div>

        {/* Tech Highlight Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm text-gray-300">
          <span className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-full hover:border-green-500 transition">
            Frontend
          </span>
          <span className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-full hover:border-green-500 transition">
            Backend
          </span>
          <span className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-full hover:border-green-500 transition">
            Databases
          </span>
          <span className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-full hover:border-green-500 transition">
            Tools
          </span>
        </div>

        {/* Tech Marquee Strip */}
        <div className="relative w-full overflow-hidden mb-16 h-10">
          <motion.div
            className="absolute left-0 top-0 flex gap-12 whitespace-nowrap items-center"
            style={{ width: "max-content" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {[...stack, ...stack].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-300 shrink-0"
              >
                <span className="text-green-500">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Grid with Glow Background */}
        <div className="relative">

          {/* Animated Glow */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[600px] h-[600px] bg-green-500/20 blur-[120px] rounded-full animate-pulse"></div>
          </div>

          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {stack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-green-500 transition shadow-lg hover:shadow-green-500/20"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-green-500"
              >
                {tech.icon}
              </motion.div>

              <p className="text-sm text-gray-300">
                {tech.name}
              </p>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}