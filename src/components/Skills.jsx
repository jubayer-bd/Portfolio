import React from "react";

// ---- FA Icons ----
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";

// ---- SI Icons ----
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiDaisyui,
  SiReactquery,
  SiJsonwebtokens,
  SiAxios,
  SiGreensock,
  // SiJspdf,
} from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { TbBellRinging } from "react-icons/tb";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    // ---------- Frontend ----------
    { name: "React.js", icon: <FaReact className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-300" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    // { name: "DaisyUI", icon: <SiDaisyui className="text-purple-400" /> },

    // ---------- Backend ----------
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    // { name: "REST APIs", icon: <GrRest className="text-blue-300" /> },
    { name: "JWT Auth", icon: <SiJsonwebtokens className="text-red-400" /> },

    // ---------- Tools & Platforms ----------
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
    // { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Axios", icon: <SiAxios className="text-blue-400" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },

    // ---------- Libraries & Utilities ----------
    { name: "TanStack Query", icon: <SiReactquery className="text-red-400" /> },
    // {
    //   name: "React Hot Toast",
    //   icon: <TbBellRinging className="text-yellow-300" />,
    // },
    { name: "GSAP", icon: <SiGreensock className="text-green-400" /> },
    // { name: "jsPDF", icon: <FaFilePdf className="text-blue-400" /> },

    // ---------- Soft Skills ----------
    { name: "Problem Solving", icon: <span className="text-white">🧩</span> },
    { name: "Communication", icon: <span className="text-white">💬</span> },
    { name: "Teamwork", icon: <span className="text-white">🤝</span> },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-3xl font-bold text-center mb-10 text-white">
        My <span className="text-sky-600">Skills</span>
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-xl p-5 flex flex-col items-center justify-center shadow-md hover:shadow-sky-500/20 transition-all duration-300"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm text-gray-200">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
