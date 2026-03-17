"use client";

import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  const stats = [
    { label: "Projects Built", value: 24 },
    { label: "Technologies Used", value: 10 },
    { label: "Full-Stack Apps", value: 4 },
    { label: "Months Coding", value: 6 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-6 bg-neutral-950 text-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-green-400 font-semibold tracking-widest">
            STATS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            My Development Progress
          </h2>

          {/* Animated Divider */}
          <div className="flex justify-center mt-4 mb-3">
            <div className="relative w-28 h-[3px] bg-neutral-800 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
            </div>
          </div>

          <p className="text-gray-400 mt-3">
            Real projects, real growth, and continuous learning.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="relative">

          {/* Animated Glow */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[800px] h-[800px] bg-green-500/20 blur-[120px] rounded-full animate-pulse"></div>
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                label={stat.label}
                value={stat.value}
                start={start}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, start, index }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = 1;

    const counter = setInterval(() => {
      current += increment;

      if (current >= value) {
        current = value;
        clearInterval(counter);
      }

      setCount(current);
    }, 120);

    return () => clearInterval(counter);
  }, [start, value]);

  return (
    <div
      className={`group relative bg-neutral-900 rounded-full w-36 h-36 flex flex-col items-center justify-center text-center border border-neutral-800 hover:border-green-400 transition-all duration-700 transform ${
        start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${index * 0.6}s`
      }}
    >
      {/* Circular Progress Ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className="w-40 h-40"
          viewBox="0 0 160 160"
        >
          <circle
            cx="80"
            cy="80"
            r="72"
            stroke="rgba(34,197,94,0.35)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="452"
            strokeDashoffset={start ? 0 : 452}
            style={{
              transition: "stroke-dashoffset 1.6s ease-out",
              transitionDelay: `${index * 0.2}s`
            }}
          />
        </svg>
        {/* Orbiting Tracker Dot */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="relative w-40 h-40"
            style={{
              animation: "orbit 8s linear infinite",
              animationDelay: `${index * 0.8}s`
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.9)]"></div>
          </div>
        </div>
      </div>
      {/* Hover Glow Ripple */}
      <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none"></div>
      <h3 className="text-3xl font-bold text-green-400 mb-1">
        {count}+
      </h3>
      <p className="text-gray-400 text-sm tracking-wide">
        {label}
      </p>
    </div>
  );
}
<style jsx global>{`
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}
@keyframes orbit {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`}</style>