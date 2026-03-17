"use client";

import { useState, useEffect, useRef } from "react";
import { Code2 } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll effect
  useEffect(() => {
    const sections = ["home","about","services","portfolio","journey","contact"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        if (
          scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-slate-950/70"
      }`}
    >
      <div
        className="absolute top-0 left-0 h-[3px] bg-green-500 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className={`group flex items-center gap-2 font-bold text-xl transition-colors ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          <Code2 className="text-green-500 w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#22c55e]" />
          Abraham <span className="text-green-500">Dev</span>
        </button>

        {/* Desktop menu */}
        <ul className={`hidden md:flex gap-6 font-medium ${scrolled ? "text-gray-800" : "text-gray-300"}`}>
          <li>
            <button
              onClick={() => handleNavClick("home")}
              className={`relative pb-1 transition-colors ${
                activeSection === "home" ? "text-green-500" : ""
              }`}
            >
              Home
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-green-500 transition-all duration-300 ${
                  activeSection === "home" ? "w-full" : "w-0"
                }`}
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick("about")}
              className={`relative pb-1 transition-colors ${
                activeSection === "about" ? "text-green-500" : ""
              }`}
            >
              About
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-green-500 transition-all duration-300 ${
                  activeSection === "about" ? "w-full" : "w-0"
                }`}
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick("services")}
              className={`relative pb-1 transition-colors ${
                activeSection === "services" ? "text-green-500" : ""
              }`}
            >
              Services
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-green-500 transition-all duration-300 ${
                  activeSection === "services" ? "w-full" : "w-0"
                }`}
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick("portfolio")}
              className={`relative pb-1 transition-colors ${
                activeSection === "portfolio" ? "text-green-500" : ""
              }`}
            >
              Portfolio
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-green-500 transition-all duration-300 ${
                  activeSection === "portfolio" ? "w-full" : "w-0"
                }`}
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick("journey")}
              className={`relative pb-1 transition-colors ${
                activeSection === "journey" ? "text-green-500" : ""
              }`}
            >
              Journey
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-green-500 transition-all duration-300 ${
                  activeSection === "journey" ? "w-full" : "w-0"
                }`}
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick("contact")}
              className={`relative pb-1 transition-colors ${
                activeSection === "contact" ? "text-green-500" : ""
              }`}
            >
              Contact
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-green-500 transition-all duration-300 ${
                  activeSection === "contact" ? "w-full" : "w-0"
                }`}
              />
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-[2px] w-full transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[9px]" : ""
              } ${scrolled ? "bg-gray-900" : "bg-white"}`}
            />
            <span
              className={`block h-[2px] w-full transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              } ${scrolled ? "bg-gray-900" : "bg-white"}`}
            />
            <span
              className={`block h-[2px] w-full transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
              } ${scrolled ? "bg-gray-900" : "bg-white"}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <ul className={`md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-6 pb-6 pt-4 flex flex-col gap-6 transition-all duration-300 ${
        menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}>
        <li>
          <button
            onClick={() => handleNavClick("home")}
            className={`relative pb-1 transition-colors ${
              activeSection === "home" ? "text-green-500" : ""
            }`}
          >
            Home
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-green-500 transition-all duration-300 ${
                activeSection === "home" ? "w-full" : "w-0"
              }`}
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("about")}
            className={`relative pb-1 transition-colors ${
              activeSection === "about" ? "text-green-500" : ""
            }`}
          >
            About
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-green-500 transition-all duration-300 ${
                activeSection === "about" ? "w-full" : "w-0"
              }`}
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("services")}
            className={`relative pb-1 transition-colors ${
              activeSection === "services" ? "text-green-500" : ""
            }`}
          >
            Services
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-green-500 transition-all duration-300 ${
                activeSection === "services" ? "w-full" : "w-0"
              }`}
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("portfolio")}
            className={`relative pb-1 transition-colors ${
              activeSection === "portfolio" ? "text-green-500" : ""
            }`}
          >
            Portfolio
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-green-500 transition-all duration-300 ${
                activeSection === "portfolio" ? "w-full" : "w-0"
              }`}
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("journey")}
            className={`relative pb-1 transition-colors ${
              activeSection === "journey" ? "text-green-500" : ""
            }`}
          >
            Journey
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-green-500 transition-all duration-300 ${
                activeSection === "journey" ? "w-full" : "w-0"
              }`}
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("contact")}
            className={`relative pb-1 transition-colors ${
              activeSection === "contact" ? "text-green-500" : ""
            }`}
          >
            Contact
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-green-500 transition-all duration-300 ${
                activeSection === "contact" ? "w-full" : "w-0"
              }`}
            />
          </button>
        </li>
      </ul>
    </header>
  );
}