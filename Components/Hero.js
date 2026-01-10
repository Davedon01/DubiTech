"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import avatar from "@/public/Avatar-DubiTech.webp";
import { useEffect, useState } from "react";

const roles = ["Frontend Developer", "Digital Marketer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        min-h-screen flex items-center justify-center px-6
        bg-white dark:bg-slate-950
        text-slate-900 dark:text-slate-100
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl w-full grid grid-cols-1 mt-10 md:grid-cols-2 gap-14 items-center">

        {/* LEFT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              DubiTech
            </span>
          </h1>

          {/* Rotating Role */}
          <motion.h2
            key={roles[roleIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 text-xl md:text-2xl text-slate-600 dark:text-slate-400"
          >
            {roles[roleIndex]}
          </motion.h2>

          <p className="mt-5 text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0">
            I design and build fast, responsive, and conversion-focused web
            applications, while helping brands grow through strategic digital
            marketing and performance-driven design.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
            <a
              href="#projects"
              className="
                px-6 py-3 rounded-lg font-medium
                bg-blue-600 text-white
                hover:bg-blue-700 transition
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                px-6 py-3 rounded-lg font-medium
                border border-slate-300 dark:border-slate-600
                hover:bg-slate-100 dark:hover:bg-slate-800
                transition
              "
            >
              Contact Me
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex gap-6 justify-center md:justify-start text-2xl text-slate-500 dark:text-slate-400">
            <a href="https://github.com/Davedon01?tab=repositories" target="_blank" className="hover:text-black dark:hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/dubi-tech-4ba1753a2/" target="_blank" className="hover:text-blue-600 transition">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/2349036130600" target="_blank" className="hover:text-green-500 transition">
              <FaWhatsapp />
            </a>
          </div>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto md:mx-0">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                10+
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Projects
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                5+
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Clients
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                2+
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Years Learning
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: AVATAR */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="
              relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
              border-4 border-blue-500 shadow-xl
            "
          >
            <Image
              src={avatar}
              alt="DubiTech Avatar"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
