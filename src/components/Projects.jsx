import React, { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  useEffect(() => {
    fetch("https://portfolio-server-teal-one.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  });
  // const projects = [
  //   {
  //     title: "Utility Bills",
  //     desc: "A complete full-stack web application built with the MERN Stack that allows users to manage, pay, and track their utility bills from one place — all with a modern UI and smooth experience.",
  //     tech: ["React", "Node.js", "MongoDB", "Express"],
  //     live: "https://utility-bills-cfa.netlify.app/",
  //     repo: "https://github.com/jubayer-bd/Utility_Bills_Client_Side",
  //   },
  //   {
  //     title: "Warm Paws",
  //     desc: "WarmPaws is a responsive React web application that helps pet owners find top-rated pet care services and winter care tips to keep their furry friends healthy and happy.",
  //     tech: ["React", "Firebase", "Tailwind"],
  //     live: "https://pets-care-paws.netlify.app/",
  //     repo: "https://github.com/jubayer-bd/Warm-Paws",
  //   },
  //   {
  //     title: "Portfolio",
  //     desc: "My personal portfolio built with React and Tailwind, showcasing my skills and work.",
  //     tech: ["React", "Tailwind", "Framer Motion"],
  //     live: "https://portfolio-md-jubayer-hossain.netlify.app/",
  //     repo: "https://github.com/jubayer-bd/Portfolio",
  //   },
  // ];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
      {/* Title animation */}
      <motion.h3
        className="text-2xl md:text-3xl font-semibold text-slate-100 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🚀 Selected Projects
      </motion.h3>

      {/* Project cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="group bg-slate-800/50 border border-slate-700 rounded-xl p-5 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg text-slate-100 group-hover:text-cyan-400 transition">
              {p.title}
            </h4>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              {p.desc}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs text-slate-300 bg-slate-700/40 border border-slate-600 px-2 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-5 flex items-center gap-4">
              <motion.a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition"
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub /> <span>Code</span>
              </motion.a>

              <motion.a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition"
                whileHover={{ scale: 1.1 }}
              >
                <FaExternalLinkAlt /> <span>Live</span>
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
