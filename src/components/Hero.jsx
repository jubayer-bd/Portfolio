import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// Removed all react-icons imports

// No image import needed, as you confirmed the path works (assumes public folder access)

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* LEFT SIDE: Content and Buttons */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-slate-100">
          <TypeAnimation
            sequence={[
              "Building modern web apps with React and Next.js ⚛️",
              1500,
              "Crafting scalable backends with Node.js, Express and MongoDB 🛠️",
              1500,
              "Designing smooth UIs with Tailwind 💎",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="mt-6 text-slate-300 max-w-xl">
          I’m a Full-Stack Web Developer focused on creating clean user
          experiences and scalable backends.
        </p>

        <div className="mt-8 flex gap-3">
          <a
            href="#projects"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 font-semibold shadow hover:scale-105 transition"
          >
            View Projects
          </a>
          <a
            // FIX: Mailto link corrected with placeholder domain.
            href="https://drive.google.com/file/d/1Rsm1b5hnf6dK9fAO2A8WVE8ceZDarzgb/view" 
            className="px-4 py-2 rounded-md border border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:scale-105 transition"
          >
           Download Resume
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE: Profile Image (No Icons/Animations) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-full h-72 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-700/40 border border-slate-800 flex items-center justify-center shadow-lg relative overflow-hidden">
          <div className="relative text-center">
            
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-cyan-400/50 mx-auto shadow-xl">
              <img
                // Keeping original path as requested (must be in public folder)
                src="/218382681.jpeg" 
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
