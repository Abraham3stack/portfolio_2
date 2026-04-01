"use client";

import { useState, useRef, useEffect } from "react";
import { Github, LinkedinIcon, Mail, Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const nameInputRef = useRef(null);

  useEffect(() => {
    const handleFocus = () => {
      if (window.location.hash === "#contact") {
        setTimeout(() => {
          nameInputRef.current?.focus();
        }, 300);
      }
    };

    // run on load
    handleFocus();

    // run on hash change (when clicking nav / buttons)
    window.addEventListener("hashchange", handleFocus);

    return () => {
      window.removeEventListener("hashchange", handleFocus);
    };
  }, []);

  return (
    <section 
      id="contact"
      className="relative w-full py-28 px-6 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Heading */}
        <p className="text-green-400 font-semibold tracking-widest">
          CONTACT
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          Let's Build Something Together
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          I am currently open to internship, entry-level, and freelance opportunities. I build full-stack applications using React, Next.js, TypeScript, Node.js, and MongoDB, with experience integrating APIs and email systems. If you're building something interesting or need a developer, I'd love to contribute.
        </p>

        <p className="text-sm text-gray-500 mt-2">
          Typically replies within 24 hours
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="/Abraham_Ogbu_Resume.pdf"
            download
            className="px-6 py-3 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-black transition"
          >
            Download Resume
          </a>
        </div>

        {/* Contact Card */}
        <div className="relative mt-14 bg-neutral-900 border border-neutral-800 rounded-3xl p-10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-green-500/10 overflow-hidden">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-green-500/10 to-transparent opacity-0 hover:opacity-100 transition pointer-events-none"></div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              setError("");
              setSent(false);

              const form = e.target;
              const formData = new FormData(form);

              const payload = {
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
              };

              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(payload),
                });

                const data = await res.json();

                if (data.success) {
                  setLoading(false);
                  setSent(true);
                  form.reset();

                  setTimeout(() => {
                    setSent(false);
                  }, 5000);
                } else {
                  setLoading(false);
                  setError("Something went wrong. Please try again.");
                }
              } catch (error) {
                console.error("Contact form error:", error);
                setLoading(false);
                setError("Failed to send message. Please try again.");
              }
            }}
            className="grid gap-6"
          >
            <input
              ref={nameInputRef}
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="bg-neutral-800 border border-neutral-700 rounded-xl px-5 py-3 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/40 transition"
            />

            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="bg-neutral-800 border border-neutral-700 rounded-xl px-5 py-3 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/40 transition"
            />

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="4"
              className="bg-neutral-800 border border-neutral-700 rounded-xl px-5 py-3 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/40 transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-semibold py-3 rounded-xl transition active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 active:opacity-100 transition"></span>
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>

          {sent && (
            <div className="mt-4 text-green-400 text-sm animate-fadeIn">
              <p>Message sent successfully. I'll get back to you soon.</p>
              <p className="text-xs text-gray-500 mt-1">
                You can also reach me directly via email or LinkedIn below.
              </p>
            </div>
          )}
          {error && (
            <p className="mt-4 text-red-400 text-sm animate-fadeIn">
              {error}
            </p>
          )}

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-10">

            <a
              href="https://github.com/abraham3stack"
              target="_blank" rel="noopener noreferrer"
              className="p-3 bg-neutral-800 rounded-full hover:bg-green-500 hover:text-black transition transform hover:scale-110 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/abrahamogbu/"
              target="_blank" rel="noopener noreferrer"
              className="p-3 bg-neutral-800 rounded-full hover:bg-green-500 hover:text-black transition transform hover:scale-110 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
            >
              <LinkedinIcon size={20} />
            </a>

            <a
              href="mailto:abrahamogbu.dev@gmail.com"
              className="p-3 bg-neutral-800 rounded-full hover:bg-green-500 hover:text-black transition transform hover:scale-110 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
            >
              <Mail size={20} />
            </a>

          </div>
        </div>
      </div>
      <style jsx>{`
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.4s ease forwards;
}
`}</style>
    </section>
  );
}