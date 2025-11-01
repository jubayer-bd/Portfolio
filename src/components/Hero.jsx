import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaReact, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiNodeDotJs } from "react-icons/si";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-slate-100">
          <TypeAnimation
            sequence={[
              "Building modern web apps with React ⚛️",
              1500,
              "Crafting scalable backends with Node.js 🚀",
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
            href="mailto:jubayer.dev.bd"
            className="px-4 py-2 rounded-md border border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:scale-105 transition"
          >
            Hire Me
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-full h-72 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-700/40 border border-slate-800 flex items-center justify-center shadow-lg relative overflow-hidden">
          <div className="relative text-center">
            <motion.div
              className="absolute inset-0 blur-2xl bg-gradient-to-tr from-teal-500 to-cyan-400 opacity-40 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />

            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-cyan-400/50 mx-auto shadow-xl">
              <img
                src="/circle.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Static Icons Around Profile */}
            <motion.div
              className="absolute inset-0 w-60 h-60 md:w-72 md:h-72 mx-auto flex justify-center items-center pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity }}
            >
              <FaReact className="absolute text-cyan-400 text-2xl" style={{ transform: 'rotate(0deg) translateY(-120px) rotate(0deg)' }} />
              <SiNodeDotJs className="absolute text-green-500 text-2xl" style={{ transform: 'rotate(51.4deg) translateY(-120px) rotate(-51.4deg)' }} />
              <SiTailwindcss className="absolute text-sky-400 text-2xl" style={{ transform: 'rotate(102.8deg) translateY(-120px) rotate(-102.8deg)' }} />
              <SiFirebase className="absolute text-yellow-400 text-2xl" style={{ transform: 'rotate(154.2deg) translateY(-120px) rotate(-154.2deg)' }} />
              <SiMongodb className="absolute text-emerald-400 text-2xl" style={{ transform: 'rotate(205.7deg) translateY(-120px) rotate(-205.7deg)' }} />
              <FaGitAlt className="absolute text-orange-500 text-2xl" style={{ transform: 'rotate(257.1deg) translateY(-120px) rotate(-257.1deg)' }} />
              <FaCss3Alt className="absolute text-blue-500 text-2xl" style={{ transform: 'rotate(308.5deg) translateY(-120px) rotate(-308.5deg)' }} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
