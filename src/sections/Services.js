"use client";

import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Globe,
  Rocket,
  Layout,
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Building modern responsive interfaces using HTML, CSS, JavaScript, React and Next.js",
  },
  {
    icon: Code,
    title: "Full-Stack Web Apps",
    description: "Developing full web applications with frontend, backend logic and database integration.",
  },
  {
    icon: Server,
    title: "API Development",
    description: "Creating REST APIs using Node.js and Express for scalable application backends.",
  },
  {
    icon: Database,
    title: "Database Integration",
    description: "Designing and connecting MongoDB databases for real-world applications.",
  },
  {
    icon: Globe,
    title: "Responsive Design",
    description: "Ensuring websites look perfect across mobile, tablet and desktop screens.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Deploying applications using platforms like Vercel and managing projects with Git.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 px-6 bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section Glow */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[700px] h-[700px] bg-green-500/10 blur-[160px] rounded-full"></div>
        </div>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services
          </h2>

          <motion.div
            className="h-[3px] w-24 mx-auto bg-gradient-to-r from-transparent via-green-500 to-transparent mb-4"
            animate={{ x: ["-40%", "40%", "-40%"] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <p className="text-gray-400">
            Some of the things I can help design, build, and deploy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration:0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-green-500 hover:bg-slate-800/60 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] transition"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 flex items-center justify-center bg-green-500/20 rounded-xl mb-6 shadow-[0_0_0px_rgba(34,197,94,0.0)] hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                >
                  <Icon size={28} className="text-green-400" />
                </motion.div>

                <h3 className="text-lg font-semibold mb-3">
                  {service.title} 
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}