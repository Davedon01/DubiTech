"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* Reusable animation variants */
const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git & GitHub",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-white dark:bg-slate-900 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-50/40 to-transparent dark:from-blue-950/30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE — slides in from LEFT */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <Image
                src="/Avatar-DubiTech.webp" // replace with brand image
                alt="DubiTech Founder"
                width={320}
                height={320}
                className="rounded-3xl shadow-2xl"
              />

              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl
                bg-blue-600 text-white text-sm font-semibold shadow-lg"
              >
                DubiTech
              </div>
            </div>
          </motion.div>

          {/* TEXT — slides in from RIGHT */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-sm font-semibold
              bg-blue-100 text-blue-700
              dark:bg-blue-900/40 dark:text-blue-300"
            >
              About DubiTech
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Building Digital Experiences <br className="hidden sm:block" />
              That Drive Real Results
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>DubiTech</strong> is a modern digital brand focused on crafting
              high-performance web experiences and strategic digital solutions.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We blend <strong>frontend engineering</strong>, clean UI/UX,
              and <strong>digital marketing strategy</strong> to help brands grow,
              convert users, and scale online.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-7 py-3 rounded-full bg-linear-to-r from-blue-600 to-purple-600
                text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-full border border-slate-300 dark:border-slate-700
                text-slate-800 dark:text-slate-200 font-semibold
                hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Work With Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* SKILLS — fade + rise */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Core Skills & Expertise
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-4 py-3 rounded-xl text-center font-medium
                bg-white dark:bg-slate-800
                text-slate-700 dark:text-slate-200
                shadow-sm hover:shadow-md hover:-translate-y-1 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
