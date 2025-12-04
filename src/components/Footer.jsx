import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-slate-800/60 mt-20 py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center text-slate-400 text-sm space-y-3">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-slate-200">
            Md. Jubayer Hossain
          </span>{" "}
          — Full-Stack Web Developer
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 text-lg">
          <motion.a
            href="mailto:jubayer.dev.bd@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="hover:text-teal-400 transition"
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="https://github.com/jubayer-bd"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/dev-jubayer/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
