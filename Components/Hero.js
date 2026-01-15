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
        min-h-screen
        flex items-start md:items-center
        justify-center
        pt-24 md:pt-0
        px-6
        bg-white dark:bg-slate-950
        text-slate-900 dark:text-slate-100
        transition-colors duration-300
      "
    >
      <div
        className="
          max-w-6xl w-full
          grid grid-cols-1 md:grid-cols-2
          gap-14 items-center
        "
      >
        {/* AVATAR — SHOW FIRST ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-end md:order-2"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="
              relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80
              rounded-full overflow-hidden
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

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-center md:text-left md:order-1"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              DubiTech
            </span>
          </h1>

          {/* ROLE */}
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

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row md:justify-start gap-4 justify-center">
            <a
              href="#projects"
              className="
                px-6 py-3 rounded-lg font-medium
                bg-linear-to-r from-blue-500 to-purple-600 text-white
                transition-all duration-300
                hover:shadow-[0_0_25px_rgba(139,92,246,0.8)]
                hover:scale-105
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                px-6 py-3 rounded-lg font-medium
                border border-slate-300 dark:border-slate-600
                text-slate-700 dark:text-slate-200
                hover:bg-slate-100 dark:hover:bg-slate-800
                transition-all duration-300
                hover:scale-105
              "
            >
              Contact Me
            </a>
          </div>

          {/* SOCIALS */}
          <div className="mt-8 flex gap-6 justify-center md:justify-start text-2xl text-slate-500 dark:text-slate-400">
            <a href="https://github.com/Davedon01" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/dubi-tech-4ba1753a2/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/2349036130600" target="_blank">
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
