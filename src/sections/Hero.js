"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {

  const titles = [
    "Full-Stack Developer",
    "Next.js Developer",
    "TypeScript & JavaScript Engineer",
    "Building Scalable Web Apps"
  ];

  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let typingSpeed = isDeleting ? 80 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentTitle.length) {
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        typingSpeed = 1800;
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHireClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("portfolio");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home"
      className="min-h-screen pt-28 px-6 flex items-center bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="group inline-block">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Abraham Ogbu
            </h1>

            {/* Animated gradient highlight */}
            <div className="relative w-40 h-[3px] overflow-hidden mb-4">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-70 group-hover:opacity-100 origin-center group-hover:scale-x-110 transition-all duration-300"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </div>

          <p className="text-green-500 text-xl mb-6 h-8">
            {displayText}
            <motion.span
              className="ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              |
            </motion.span>
          </p>

          <p className="text-gray-300 mb-8 max-w-xl">
            I build modern full-stack web applications using React, Next.js, Node.js, Express, MongoDB, and TypeScript — focused on responsive interfaces, scalable backend systems, and real-world product experiences.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleHireClick}
              className="px-7 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition"
            >
              Hire Me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleProjectsClick}
              className="px-7 py-3 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-black transition"
            >
              View Projects
            </motion.button>
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center relative"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >

          {/* Soft glowing gradient background */}
          <div
            className="absolute w-[420px] h-[420px] rounded-full bg-green-500/20 blur-[120px]"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/profile.jpeg"
              alt="Abraham Ogbu"
              width={380}
              height={380}
              className="relative rounded-2xl shadow-lg object-cover"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}