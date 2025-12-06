import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import SmoothScroll from "./components/SmoothScroll";

export default function Portfolio() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { scrollYProgress } = useScroll();

  // Smooth gradient transitions without overflow
  const bgGradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(135deg, #0f172a, #1e293b, #0d9488)",
      "linear-gradient(135deg, #0f172a, #0d9488, #1e40af)",
      "linear-gradient(135deg, #1e293b, #0f172a, #0891b2)",
    ]
  );

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen text-slate-100 antialiased overflow-x-hidden">
      
      {/* 🚀 Smooth Scroll (Lenis) */}
      <SmoothScroll />

      {/* 🌈 Smooth, fixed gradient background (no overflow issue) */}
      <motion.div
        className="fixed inset-0 -z-10 will-change-transform"
        style={{ background: bgGradient }}
      />

      <Header />

      <motion.main
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="space-y-12 md:space-y-20"
      >
        {/* Hero */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Hero />
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Projects />
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Skills />
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Contact />
        </motion.div>
      </motion.main>

      <Footer />

      {/* ⬆️ Scroll-To-Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            key="scroll-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 p-3 md:p-4 rounded-full 
              bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 shadow-lg 
              hover:scale-110 transition"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
