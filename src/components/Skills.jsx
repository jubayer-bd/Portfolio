import React from "react";
import { motion } from "framer-motion";

// ---- Lucide Icons (For Categories & Generic Items) ----
import {
  Code2,
  Server,
  Wrench,
  BrainCircuit,
  Database,
  Terminal,
  Cpu,
  Globe,
} from "lucide-react";

// ---- Brand Icons (React Icons) ----
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiPostman,
  SiAxios,
  SiGreensock,
  SiJsonwebtokens,
  SiReactquery,
} from "react-icons/si";

/* ---------------- Data Structure ---------------- */
const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "GSAP", icon: <SiGreensock className="text-green-400" /> },
      {
        name: "TanStack Query",
        icon: <SiReactquery className="text-red-500" />,
      },
    ],
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-slate-200" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens className="text-pink-500" /> },
      { name: "REST APIs", icon: <Server className="text-blue-300" /> }, // Used Lucide for generic
    ],
  },
  {
    title: "Tools & Workflow",
    icon: <Terminal className="w-6 h-6" />,
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Axios", icon: <SiAxios className="text-purple-400" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      { name: "VS Code", icon: <Code2 className="text-blue-400" /> },
    ],
  },
  {
    title: "Professional Skills",
    icon: <BrainCircuit className="w-6 h-6" />,
    skills: [
      { name: "Problem Solving", icon: <Cpu className="text-teal-400" /> }, // Lucide
      { name: "Communication", icon: <Globe className="text-indigo-400" /> }, // Lucide
      { name: "Team Work", icon: <Wrench className="text-amber-400" /> }, // Lucide
    ],
  },
];

/* ---------------- Animation Variants ---------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

/* ---------------- Component ---------------- */
export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden "
    >
      {/* Background Decoration (Matching Projects Component) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Cpu className="text-cyan-500" size={24} />
            <span className="text-cyan-500 font-medium tracking-wider text-sm uppercase">
              Technical Proficiency
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            My{" "}
            <span className=" text-cyan-400">
              Tech Stack
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            A curated list of technologies and tools I use to build scalable,
            high-performance web applications.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-slate-900/40 backdrop-blur-sm  rounded-3xl p-8 hover:border-slate-700 transition-colors duration-300"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-cyan-950/30 rounded-xl text-cyan-400 border border-cyan-500/20">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-100">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(30, 41, 59, 0.8)",
                    }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl 
                               bg-slate-800/40   
                               hover:border-cyan-500/30 hover:shadow-[0_0_15px_-5px_rgba(6,182,212,0.15)] 
                               transition-all duration-300 group cursor-default"
                  >
                    <div className="text-3xl mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-200 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
