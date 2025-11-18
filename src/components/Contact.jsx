import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
      {/* Title */}
      <motion.h3
        className="text-2xl md:text-3xl font-semibold text-slate-100 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ✉️ Get In Touch
      </motion.h3>

      <motion.p
        className="mt-3 text-center text-slate-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Want to collaborate, hire me, or just say hi? I’d love to hear from you.
      </motion.p>

      {/* Contact Card */}
      <motion.div
        className="mt-8 bg-slate-800/50 border border-slate-700 rounded-lg p-8 max-w-md mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center gap-4">
          <motion.a
            href="mailto:jubayer.dev.bd@gmail.com"
            className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope className="text-xl" />
            <span>jubayer.dev.bd@gmail.com</span>
          </motion.a>

          <motion.a
            href="https://github.com/jubayer-bd"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub className="text-xl" />
            <span>GitHub Profile</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
