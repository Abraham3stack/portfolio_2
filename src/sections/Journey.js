"use client";

import { motion } from "framer-motion";

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-28 px-6 bg-black text-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My Development Journey
          </h2>

          {/* Animated divider */}
          <motion.div
            className="h-[3px] w-24 mx-auto bg-gradient-to-r from-transparent via-green-500 to-transparent mb-4"
            animate={{ x: ["-40%", "40%", "-40%"] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <p className="text-gray-400">
            From my first line of code to building full-stack applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ambient Glow */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[700px] h-[700px] bg-green-500/10 blur-[160px] rounded-full"></div>
          </div>

          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-green-500/20 to-transparent transform -translate-x-1/2"></div>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Start */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 -top-4 w-4 h-4 bg-green-500 rounded-full border-4 border-black transform -translate-x-1/2"></div>

              <h3 className="text-green-500 font-semibold mb-2">
                December 5, 2025
              </h3>

              <h4 className="text-xl font-bold mb-3">
                Started My Coding Journey
              </h4>

              <p className="text-gray-400">
                I began learning web development at Code Campus Abuja. My journey with HTML and CSS while learning how the web works and how to build responsive layouts.
              </p>
            </motion.div>

            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 -top-4 w-4 h-4 bg-green-500 rounded-full border-4 border-black transform -translate-x-1/2"></div>

              <h3 className="text-green-500 font-semibold mb-2">
                Early 2026
              </h3>

              <h4 className="text-xl font-bold mb-3">
                Frontend Development
              </h4>

              <p className="text-gray-400">
                I expanded my knowledge into JavaScript and modern frontend tools including React, Next.js, TailwindCSS and Firebase. During this stage i built several interactive applications while learning how modern web interfaces are built.
              </p>
            </motion.div>

            {/* Full Stack */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 -top-4 w-4 h-4 bg-green-500 rounded-full border-4 border-black transform -translate-x-1/2"></div>

              <h3 className="text-green-500 font-semibold mb-2">
                Present
              </h3>

              <h4 className="text-xl font-bold mb-3">
                Full-Stack Development
              </h4>

              <p className="text-gray-400">
                I now build full-stack applications using Node.js, Express and MongoDB. I deploy real projects online and focus on building scalable web applications while completing my training at Code Campus Abuja.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Tech summary */}
        <div className="mt-16 text-center text-gray-400 max-w-3xl mx-auto">
          <p>
            Technologies I've learned during my journey include: 
            <span className="text-green-500">
              HTML, CSS, JavaScript, React, Next.js, Firebase,TailwindCSS, Node.js, Express.js, MongoDB, and Deployment.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}