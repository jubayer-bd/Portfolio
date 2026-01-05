import React from "react";
import { motion } from "framer-motion";

export default function About() {
  // Animation variants for text staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden ">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT COLUMN: The Narrative (5 Points Coverage) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20 mb-4">
              ✨ Who I Am
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 leading-tight">
              More than just <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                lines of code.
              </span>
            </h2>
          </motion.div>

          {/* 1. The Journey */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200 flex items-center gap-2">
              <span className="text-cyan-400">01.</span> The Journey
            </h3>
            <p className="text-slate-400 leading-relaxed">
              My programming odyssey began with a simple question:
              <span className="italic text-slate-300">
                {" "}
                "How does this actually work?"
              </span>
              . What started as tweaking HTML/CSS to customize gaming forums
              quickly spiraled into a deep obsession with JavaScript. Today, I
              build full-stack applications from scratch, having transitioned
              from simple scripts to complex architectures using{" "}
              <span className="text-cyan-400">React, Node.js, and MongoDB</span>
              .
            </p>
          </motion.div>

          {/* 2. The Work I Enjoy */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200 flex items-center gap-2">
              <span className="text-purple-400">02.</span> What Drives Me
            </h3>
            <p className="text-slate-400 leading-relaxed">
              I don't just write code; I build
              <span className="text-slate-200 font-medium"> experiences</span>.
              I thrive on projects that challenge me to bridge the gap between
              <span className="text-purple-400">
                {" "}
                complex backend logic
              </span>{" "}
              and
              <span className="text-purple-400">
                {" "}
                intuitive frontend design
              </span>
              . There is a unique satisfaction in optimizing an API response
              time or perfecting a micro-interaction that makes a user smile.
            </p>
          </motion.div>

          {/* 3. Hobbies & Personality */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200 flex items-center gap-2">
              <span className="text-green-400">03.</span> Life Outside Code
            </h3>
            <p className="text-slate-400 leading-relaxed">
              When I step away from the keyboard, I believe in resetting my
              mind. You’ll likely find me{" "}
              <span className="text-slate-200">playing sports</span> to stay
              active, exploring the latest in{" "}
              <span className="text-slate-200">tech trends</span>, or
              experimenting with creative ideas. I believe that a well-rounded
              life fuels better problem-solving, bringing a fresh perspective to
              every project I touch.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Personality Grid (Visualizing the points) */}
        <div className="relative pl-0 lg:pl-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Card 1: Tech Stack */}
            <div className="col-span-2 p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    ></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-100">Current Stack</h4>
              </div>
              <p className="text-sm text-slate-400">
                MERN (MongoDB, Express, React, Node) & Next.js
              </p>
            </div>

            {/* Card 2: Hobbies */}
            <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-100">Hobbies</h4>
              </div>
              <p className="text-sm text-slate-400">
                Sports, Gaming & Tech Content
              </p>
            </div>

            {/* Card 3: Personality/Location */}
            <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-100">Mindset</h4>
              </div>
              <p className="text-sm text-slate-400">
                Growth-oriented & Curious
              </p>
            </div>

            {/* Card 4: Quote/Philosophy */}
            <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition duration-300">
              <p className="text-slate-300 italic font-serif text-lg">
                "Consistency is the code to success."
              </p>
              <p className="text-right text-xs text-slate-500 mt-2">
                — My Motto
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
