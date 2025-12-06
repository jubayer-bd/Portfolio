import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

// 1. Skeleton Loader Component (Displayed while fetching)
const ProjectSkeleton = () => (
  <div className="h-full bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 animate-pulse flex flex-col">
    <div className="w-full h-48 bg-slate-700/50 rounded-lg mb-4"></div>
    <div className="h-6 w-3/4 bg-slate-700/50 rounded mb-2"></div>
    <div className="flex-grow space-y-2">
        <div className="h-3 w-full bg-slate-700/30 rounded"></div>
        <div className="h-3 w-5/6 bg-slate-700/30 rounded"></div>
    </div>
    <div className="mt-4 flex gap-2">
        <div className="h-8 w-16 bg-slate-700/50 rounded-full"></div>
        <div className="h-8 w-16 bg-slate-700/50 rounded-full"></div>
    </div>
  </div>
);

// 2. The Polished Project Card
const ProjectCard = ({ p, i }) => {
  return (
    <motion.article
      className="group flex flex-col h-full bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: i * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden">
        {p.image ? (
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full   transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
        ) : (
            // Fallback if no image
            <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                <FaCode className="text-4xl text-slate-600" />
            </div>
        )}
        {/* Overlay gradient to make text pop if we moved it up, or just for mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content Body */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex justify-between items-start mb-3">
            <h4 className="font-bold text-xl text-slate-100 group-hover:text-cyan-400 transition-colors">
            {p.title}
            </h4>
            {/* Optional: Add a subtle icon or year here if available */}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-6 line-clamp-3">
          {p.desc}
        </p>

        {/* Tech Stack - Compact Grid */}
        <div className="flex flex-wrap gap-2 mb-6">
          {p.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-wider font-semibold text-cyan-300 bg-cyan-900/10 border border-cyan-500/20 px-2 py-1 rounded-[4px]"
            >
              {t}
            </span>
          ))}
          {p.tech.length > 4 && (
              <span className="text-[10px] text-slate-500 px-2 py-1">+ {p.tech.length - 4}</span>
          )}
        </div>

        {/* Footer / Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50 mt-auto">
          <motion.a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group/link"
            whileHover={{ x: 2 }}
          >
            <FaGithub className="text-lg group-hover/link:text-cyan-400 transition-colors" /> Code
          </motion.a>

          <div className="flex-grow"></div> {/* Spacer */}

          <motion.a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-900 bg-cyan-400 hover:bg-cyan-300 px-4 py-2 rounded-lg transition-colors shadow-lg shadow-cyan-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo <FaExternalLinkAlt className="text-xs" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://portfolio-server-teal-one.vercel.app/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
          setProjects(data);
          setLoading(false);
      })
      .catch((error) => {
          console.error("Error fetching projects:", error);
          setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Decor (Glows) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">
                Featured Projects
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {loading ? (
                // Show 3 skeletons while loading
                [...Array(3)].map((_, i) => <ProjectSkeleton key={i} />)
            ) : projects.length > 0 ? (
              projects.map((p, i) => (
                <ProjectCard key={p._id || p.title} p={p} i={i} />
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-slate-500">
                <p>No projects found.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}