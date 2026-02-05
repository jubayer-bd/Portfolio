import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* LEFT: Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: -40 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {/* Small intro badge */}
        <motion.span
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
        >
          👋 Hello, I’m a Full-Stack Developer
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-4xl sm:text-5xl font-bold leading-tight text-slate-100"
        >
          I build{" "}
          <span className="relative text-cyan-400">
            scalable & user-focused
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400/60 rounded" />
          </span>{" "}
          web applications
        </motion.h1>

        {/* Animated role text */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="mt-5 text-lg text-slate-300"
        >
          <TypeAnimation
            sequence={[
              "React & Next.js Frontend Engineering",
              1500,
              "Node.js, Express & MongoDB Backends",
              1500,
              "Modern UI with Tailwind CSS",
              1500,
            ]}
            speed={55}
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="mt-6 max-w-xl text-slate-400 leading-relaxed"
        >
          I focus on building clean, maintainable products that solve real
          problems—balancing performance, usability, and scalability.
          Comfortable working independently or as part of a team.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-teal-400 
                       text-slate-900 font-semibold shadow-lg 
                       hover:scale-105 hover:shadow-cyan-500/30 transition"
          >
            View Projects
          </a>

          <a
            href="https://drive.google.com/file/d/1VWEWRyxCL91XqemAgsaTbu8HMOoCsxD0/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-md border border-slate-700 
                       text-slate-300 hover:bg-slate-800/60 
                       hover:scale-105 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT: Profile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-80 rounded-2xl bg-gradient-to-br 
                     from-slate-800/60 to-slate-700/40 
                     border border-slate-800 shadow-xl 
                     flex items-center justify-center"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden 
                          border-4 border-cyan-400/40 shadow-2xl">
            <img
              src="/218382681.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
