import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { Github, ExternalLink, X, Layers, AlertCircle, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";

// --- DATA ---
const PROJECTS_DATA = [
  {
    _id: "1",
    title: "Digital Life Lessons",
    desc: "A full-stack EdTech platform featuring role-based access, premium content control, and PDF report generation.",
    tech: ["React", "Stripe", "Express", "MongoDB"],
    live: "https://digital-life-lessons-web.netlify.app/",
    repo: "https://github.com/jubayer-bd/Digital-Life-Lessons",
    image: "https://i.ibb.co.com/5XnnqJc1/digital-Life-Lesson.png",
    challenges: "Implementing complex role-based access control (RBAC) securely while handling Stripe webhooks for real-time premium status updates.",
    improvements: "Adding real-time chat between students and instructors and implementing AI-driven course recommendations.",
  },
  {
    _id: "2",
    title: "Utility Bills",
    desc: "A dashboard to manage, pay, and track utility bills with a modern UI and analytics.",
    tech: ["React", "Node.js", "MongoDB", "Recharts"],
    live: "https://utility-bills.vercel.app/",
    repo: "https://github.com/jubayer-bd/Utility_Bills_Client_Side",
    image: "https://i.ibb.co.com/yBRx9P1J/screenshot-20260105111154.png",
    challenges: "Visualizing data effectively using charts and ensuring distinct separation of user data in a multi-tenant architecture.",
    improvements: "Integration with real banking APIs for automated payments and SMS notifications for due dates.",
  },
  {
    _id: "3",
    title: "Shop Hub",
    desc: "A modern e-commerce app with cart functionality, wishlists, and secure authentication.",
    tech: ["Next.js", "Firebase", "MongoDB", "Stripe"],
    live: "https://shop-hub-coral.vercel.app/",
    repo: "https://github.com/jubayer-bd/SHOP-HUB",
    image: "https://i.ibb.co.com/Cx5QvW1/screenshot-20251226100528.png",
    challenges: "Optimizing image loading for thousands of products and managing global state for the shopping cart.",
    improvements: "Implementing server-side rendering (SSR) for better SEO and adding a dark mode toggle.",
  },
  {
    _id: "4",
    title: "Warm Paws",
    desc: "A responsive platform connecting pet owners with top-rated care services and winter tips.",
    tech: ["React", "Firebase", "Tailwind", "Node.js"],
    live: "https://pets-care-paws.netlify.app/",
    repo: "https://github.com/jubayer-bd/Warm-Paws",
    image: "https://i.ibb.co.com/MygJJ8f9/warm-paws.png",
    challenges: "Creating a seamless booking system that handles time-zone differences and conflicting schedules.",
    improvements: "Adding a verified review system for caregivers and a lost-and-found pet geolocation feature.",
  },
  // {
  //   _id: "5",
  //   title: "Task Master",
  //   desc: "A Kanban-style project management tool with drag-and-drop capabilities.",
  //   tech: ["React", "Redux", "DND-Kit", "Supabase"],
  //   live: "#",
  //   repo: "#",
  //   image: "https://i.ibb.co.com/5XnnqJc1/digital-Life-Lesson.png",
  //   challenges: "Handling complex drag-and-drop state persistence across different columns.",
  //   improvements: "Adding team collaboration features via WebSockets.",
  // },
];

// --- COMPONENT: PROJECT CARD ---
const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${project._id}`}
      onClick={() => onClick(project)}
      className="group relative flex flex-col h-full w-full bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          layoutId={`image-${project._id}`}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-5">
        <motion.h3 
          layoutId={`title-${project._id}`}
          className="text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors"
        >
          {project.title}
        </motion.h3>
        <p className="text-slate-400 text-sm line-clamp-2 mb-4">
          {project.desc}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.slice(0, 3).map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-500/20 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- COMPONENT: DETAILS MODAL ---
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div
        layoutId={`card-${project._id}`}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-red-500/80 transition-all z-20"
        >
          <X size={20} />
        </button>

        {/* Modal Image */}
        <div className="relative h-64 md:h-80 w-full flex-shrink-0">
          <motion.img
            layoutId={`image-${project._id}`}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <motion.h2 layoutId={`title-${project._id}`} className="text-3xl md:text-4xl font-bold text-white mb-2">
              {project.title}
            </motion.h2>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 space-y-8 bg-slate-900">
          {/* Description */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center gap-2">
              <Layers size={18} /> About Project
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {project.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
              <h4 className="text-base font-semibold text-red-300 mb-3 flex items-center gap-2">
                <AlertCircle size={18} /> Challenges
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                {project.challenges}
              </p>
            </div>
            <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
              <h4 className="text-base font-semibold text-green-300 mb-3 flex items-center gap-2">
                <Lightbulb size={18} /> Future Plans
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                {project.improvements}
              </p>
            </div>
          </div>

          {/* Links Footer */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-800 mt-auto">
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-lg font-bold transition-all shadow-lg shadow-cyan-900/20">
              <ExternalLink size={18} /> Live Demo
            </a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg font-medium border border-slate-700 transition-all">
              <Github size={18} /> Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- COMPONENT: SLIDER ---
const ProjectSlider = ({ projects, onProjectClick }) => {
  const containerRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Calculate scrolling limits
  const checkScroll = () => {
    if (containerRef.current) {
      setMaxScroll(containerRef.current.scrollWidth - containerRef.current.clientWidth);
      setScrollX(containerRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const slide = (shift) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: shift, behavior: "smooth" });
      // Update state after animation estimate
      setTimeout(checkScroll, 300); 
    }
  };

  return (
    <div className="relative group">
      {/* Left Arrow */}
      {scrollX > 10 && (
        <button
          onClick={() => slide(-400)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-40 p-3 bg-slate-800/90 border border-slate-600 text-cyan-400 rounded-full shadow-xl hover:bg-slate-700 transition-all hidden md:block"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Right Arrow */}
      {scrollX < maxScroll - 10 && (
        <button
          onClick={() => slide(400)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-40 p-3 bg-slate-800/90 border border-slate-600 text-cyan-400 rounded-full shadow-xl hover:bg-slate-700 transition-all hidden md:block"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Slider Container */}
      {/* SNAP SCROLLING logic added for native 'facebook-like' feel */}
      <div
        ref={containerRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project) => (
          <div
            key={project._id}
            className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
          >
            <ProjectCard project={project} onClick={onProjectClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- MAIN SECTION ---
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden ">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96  rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96  rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 mb-4 border border-cyan-500/20 bg-cyan-500/5 rounded-full">
            <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg">
            A selection of my recent work, available for you to explore. 
            Swipe to see more.
          </p>
        </motion.div>

        {/* Slider Logic */}
        <ProjectSlider projects={PROJECTS_DATA} onProjectClick={setSelectedProject} />
        
      </div>

      {/* Modal Popup (Outside the overflow container to prevent clipping) */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}