"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "PowerTrack",
    image: "/projects/powertrack.png",
    description: "A full-stack electricity tracking and prediction system where users can monitor their remaining units (kWh), log daily consumption, and estimate how long their electricity will last. Includes smart insights and recommendations to help optimize usage and reduce waste.",
    tech: ["Next.js", "Node.js", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/Abraham3stack/electricity-app",
    live: "https://electricity-app-ten.vercel.app",
  },
  {
    title: "Chat app",
    image: "/projects/chat.png",
    description: "A real-time messaging app similar to WhatsApp, featuring instant messaging, typing indicators, online presence, and read receipts, built for a smooth and responsive chat experience.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Abraham3stack/chat-app",
    live: "https://chat-app-indol-kappa-80.vercel.app",
  },
  {
    title: "Daily Mind",
    image: "/projects/dailymind.png",
    description: "A social knowledge platform where users can post interesting facts, explore facts shared by others, like, comment and even generate new facts using AI.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Abraham3stack/daily-mind",
    live: "https://daily-mind-eight.vercel.app",
  },
  {
    title: "Canvas Vibe",
    image: "/projects/canvasvibe.png",
    description: "A social media platform similar to Instagram where users can upload posts, share images with captions, like and comment on posts, and manage their profiles.",
    tech: ["Next.js", "firebase"],
    github: "https://github.com/Abraham3stack/canvas-vibe",
    live: "https://canvas-vibe.vercel.app",
  },
  {
    title: "Brew Coffee Store",
    image: "/projects/brew.png",
    description: "A coffee ordering application where users can add coffee to cart and complete payments securely using Paystack. Successful transactions trigger an email notification confirming payment.",
    tech: ["React", "TypeScript", "Paystack"],
    github: "https://github.com/Abraham3stack/brew-pay",
    live: "https://brew-pay.vercel.app",
  },
  {
    title: "Bamboo Kitchen",
    image: "/projects/restaurant.png",
    description: "A responsive restaurant website designed to showcase menu offerings and brand identity with a clean, fast, and user-friendly experience.",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/Abraham3stack/bamboo-kitchen",
    live: "https://bamboo-kitchen.vercel.app",
  },

  {
    title: "Recipe App",
    image: "/projects/recipe.png",
    description: "A recipe discovery app that fetches meals and detailed cooking instructions when users search for a dish, helping users explore new recipes easily.",
    tech: ["React", "API"],
    github: "https://github.com/Abraham3stack/recipe-app",
    live: "https://recipe-app-upec.vercel.app",
  },
  {
    title: "Ashe's Glow & Spa",
    image: "/projects/beauty.png",
    description: "A modern, responsive website for a beauty service provider showcasing pedicure, manicure, massage, and wellness services with a clean and professional layout.",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/Abraham3stack/ashe-s-glow-website",
    live: "https://ashe-s-glow-website.vercel.app",
  },
  {
    title: "Message Translator",
    image: "/projects/translator.png",
    description: "A language translation app that converts text between languages instantly and also supports voice translation for spoken input.",
    tech: ["Next.js", "API"],
    github: "https://github.com/Abraham3stack/translator-app",
    live: "https://translator-app-chi-ten.vercel.app",
  },
  {
    title: "Habit Tracker",
    image: "/projects/habittracker.png",
    description: "A productivity app where users can create habits, follow daily schedules, track progress, and delete habits as they complete their routines.",
    tech: ["Next.js"],
    github: "https://github.com/Abraham3stack/habit-tracker",
    live: "https://habit-tracker-blue-five.vercel.app",
  },
  {
    title: "Travel Booking Website",
    image: "/projects/travel.png",
    description: "A responsive travel website where users can explore destinations, book trips, and send booking requests through EmailJS integration.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Abraham3stack/Travel-Website",
    live: " https://abraham3stack.github.io/Travel-Website/",
  },
  {
    title: "Ecommerce Cart App",
    image: "/projects/ecommerce.png",
    description: "An ecommerce interface where users can browse products, add items to their cart, and remove them dynamically using JavaScript.",
    tech: ["HTML", "Tailwind", "JavaScript"],
    github: "https://github.com/Abraham3stack/ecommerce-app",
    live: "https://ecommerce-app-swart-eta.vercel.app",
  }
];

export default function Projects() {

  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = 3;

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const start = page * itemsPerPage;
  const visibleProjects = isMobile
    ? projects
    : projects.slice(start, start + itemsPerPage);

  const nextPage = () => {
    if ((page + 1) * itemsPerPage < projects.length) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <section
      id="portfolio"
      className="py-28 px-6 bg-black text-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto relative">

        {/* Ambient Glow */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[800px] h-[800px] bg-green-500/10 blur-[180px] rounded-full"></div>
        </div>

        {/* Featured Project */}
        <div className="mb-24">
          <h3 className="text-sm uppercase tracking-widest text-green-500 mb-4 text-center">
            Featured Project
          </h3>

          <div className="relative grid md:grid-cols-2 gap-10 items-center bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-green-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] hover:scale-[1.01] transition">
            
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: "linear-gradient(120deg, transparent, rgba(34,197,94,0.4), transparent)",
                backgroundSize: "200% 200%"
              }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* Image */}
            <div className="relative h-72 md:h-full overflow-hidden group">
              <Image
                src="/projects/powertrack.png"
                alt="PowerTrack"
                fill
                className="transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                PowerTrack – Electricity Usage Intelligence
              </h2>

              <span className="inline-block mb-4 text-xs bg-green-500 text-black px-3 py-1 rounded">
                🔥 Featured Full-Stack Project
              </span>

              <p className="text-sm text-green-400 mb-2">
                Real-world electricity usage prediction system
              </p>

              <p className="text-gray-400 mb-6">
                A full-stack electricity tracking and prediction system that allows users to monitor their remaining units (kWh), log daily usage, and estimate how long their electricity will last. The app provides intelligent insights and recommendations to help optimize consumption and reduce waste.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js","Node.js","Express","PostgreSQL","Prisma"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-slate-800 px-3 py-1 rounded hover:bg-green-500 hover:text-black transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href="https://electricity-app-ten.vercel.app"
                  target="_blank"
                  className="flex items-center gap-2 bg-green-500 text-black px-5 py-2 rounded hover:bg-green-400 transition"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>

                <a
                  href="https://github.com/Abraham3stack/electricity-app"
                  target="_blank"
                  className="flex items-center gap-2 border border-slate-600 px-5 py-2 rounded hover:border-green-500 transition"
                >
                  <GitBranch size={16} />
                  GitHub
                </a>
              </div>

              {/* Project Stats */}
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
                <span className="bg-slate-800 px-3 py-1 rounded">
                  ⭐ GitHub Project
                </span>

                <span className="bg-slate-800 px-3 py-1 rounded">
                  🚀 Live Demo
                </span>

                <span className="bg-slate-800 px-3 py-1 rounded">
                  ⚡ Smart Energy Tracking
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Projects
            </h2>

            <motion.div
              className="h-[3px] w-24 mx-auto bg-gradient-to-r from-transparent via-green-500 to-transparent mb-4"
              animate={{ x: ["-40%", "40%", "-40%"] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <p className="text-gray-400">
              Some of the projects I've built while learning and improving my skills.
            </p>
          </div>

          {/* Project Grid Carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -120, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
            >
              {visibleProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity:0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-green-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden group">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                      <a
                        href={project.live}
                        target="_blank"
                        className="flex items-center gap-2 text-sm bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400 transition"
                      >
                        <ExternalLink size={16} />
                        View
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-2 text-sm border border-white px-4 py-2 rounded hover:border-green-500 transition"
                      >
                        <GitBranch size={16} />
                        GitHub
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Teck Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs bg-slate-800 px-2 py-1 rounded hover:bg-green-500 hover:text-black transition"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Project Indicators */}
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded">
                        <GitBranch size={14} />
                        GitHub Repo
                      </span>

                      <span className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded">
                        ⭐ Active Project
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mt-12"
          >
            <button
              onClick={prevPage}
              disabled={page === 0}
              className={`p-3 border border-slate-700 rounded-full transition ${
                page === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:scale-110"
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextPage}
              disabled={(page + 1) * itemsPerPage >= projects.length}
              className={`p-3 bg-green-500 text-black rounded-full transition ${
                (page + 1) * itemsPerPage >= projects.length
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-green-400 hover:shadow-[0_0_18px_rgba(34,197,94,0.5)] hover:scale-110"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
          )}
      </div>
    </section>
  );
}