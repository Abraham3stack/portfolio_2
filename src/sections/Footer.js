"use client";

import { Github, LinkedinIcon, Mail } from "lucide-react";

export default function Footer() {
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative w-full border-t border-neutral-800 bg-neutral-950 text-gray-400 py-14 px-6">

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>

      <div className="max-w-5xl mx-auto text-center space-y-6">

        {/* Name + Role */}
        <div>
          <a
            href="#home"
            className="text-white text-xl font-semibold hover:text-green-400 transition"
            onClick={handleScroll}
          >
            Abraham Ogbu
          </a>
          <p className="text-sm mt-1 text-gray-400">
            Building modern full-stack applications with React, Next.js, Node.js, MongoDB & TypeScript
          </p>

          <p className="text-sm mt-2 text-green-400 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Open to Opportunities
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center flex-wrap gap-6 text-sm">
          <a href="#home" className="relative hover:text-green-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all hover:after:w-full"
            onClick={handleScroll}
          >Home</a>
          <a href="#about" className="relative hover:text-green-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all hover:after:w-full"
            onClick={handleScroll}
          >About</a>
          <a href="#portfolio" className="relative hover:text-green-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all hover:after:w-full"
            onClick={handleScroll}
          >Portfolio</a>
          <a href="#tech" className="relative hover:text-green-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all hover:after:w-full"
            onClick={handleScroll}
          >Tech</a>
          <a href="#contact" className="relative hover:text-green-400 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all hover:after:w-full"
            onClick={handleScroll}
          >Contact</a>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-6">

          <a
            href="https://github.com/abraham3stack"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 bg-neutral-900 rounded-full border border-neutral-800 hover:bg-green-500 hover:text-black transition transform hover:scale-110 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/abrahamogbu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 bg-neutral-900 rounded-full border border-neutral-800 hover:bg-green-500 hover:text-black transition transform hover:scale-110 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href="mailto:abrahamogbu.dev@gmail.com"
            aria-label="Send Email"
            className="p-3 bg-neutral-900 rounded-full border border-neutral-800 hover:bg-green-500 hover:text-black transition transform hover:scale-110 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
          >
            <Mail size={18} />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-xs text-neutral-500 pt-4">
          © 2026 Abraham Ogbu — Designed & Built with React, Next.js, Node.js, MongoDB
        </p>

      </div>
    </footer>
  );
}