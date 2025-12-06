import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
// npm install @emailjs/browser
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Replace these with your actual EmailJS credentials
    // Sign up at https://www.emailjs.com/
    const serviceID = "service_glrozra";
    const templateID = "template_jnrnk6j";
    const publicKey = "azXlJDCeZOiV2yktw";

    emailjs
      .sendForm(serviceID, templateID, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setFormStatus("success");
          e.target.reset(); // Clear form
        },
        (error) => {
          setFormStatus("error");
          setErrorMessage("Failed to send message. Please try again later.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h3
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h3>
          <motion.p
            className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm currently available for freelance work or full-time
            opportunities.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h4 className="text-2xl font-bold text-slate-100 border-l-4 border-teal-500 pl-4">
              Contact Information
            </h4>

            <div className="space-y-6">
              <ContactItem
                icon={<FaEnvelope />}
                label="Email"
                value="jubayer.dev.bd@gmail.com"
                href="mailto:jubayer.dev.bd@gmail.com"
                color="hover:text-teal-400"
              />
              <ContactItem
                icon={<FaGithub />}
                label="GitHub"
                value="github.com/jubayer-bd"
                href="https://github.com/jubayer-bd"
                color="hover:text-white"
              />
              <ContactItem
                icon={<FaLinkedin />}
                label="LinkedIn"
                value="linkedin.com/in/dev-jubayer"
                href="https://www.linkedin.com/in/dev-jubayer/"
                color="hover:text-blue-400"
              />
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 md:p-10 rounded-2xl shadow-2xl"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name" // Required for EmailJS
                  id="user_name"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all placeholder-slate-600"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email" // Required for EmailJS
                  id="user_email"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all placeholder-slate-600"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message" // Required for EmailJS
                  id="message"
                  rows="4"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all placeholder-slate-600 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              {/* Status Messages */}
              {formStatus === "error" && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}
              {formStatus === "success" && (
                <p className="text-green-400 text-sm">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={
                  formStatus === "submitting" || formStatus === "success"
                }
                className={`w-full py-4 rounded-lg font-bold text-white shadow-lg flex items-center justify-center gap-2 transition-all ${
                  formStatus === "success"
                    ? "bg-green-600"
                    : formStatus === "error"
                    ? "bg-red-500"
                    : "bg-gradient-to-r from-teal-500 to-blue-600 hover:shadow-teal-500/25"
                }`}
              >
                {formStatus === "submitting" ? (
                  "Sending..."
                ) : formStatus === "success" ? (
                  "Sent!"
                ) : (
                  <>
                    Send Message <FaPaperPlane className="text-sm" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 transition-all hover:bg-slate-800 hover:border-slate-600 group`}
    >
      <div
        className={`mt-1 text-2xl text-slate-400 transition-colors ${color} group-hover:scale-110`}
      >
        {icon}
      </div>
      <div>
        <h5 className="text-sm font-medium text-slate-400 uppercase tracking-wide">
          {label}
        </h5>
        <span className="text-slate-100 font-medium group-hover:text-white transition-colors">
          {value}
        </span>
      </div>
    </a>
  );
}
