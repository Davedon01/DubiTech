"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SkillCard from "@/Components/SkillCard";
import SkillModal from "@/Components/SkillModal";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaSearch,
  FaBullhorn,
  FaPalette,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    {
      name: "HTML",
      icon: FaHtml5,
      color: "text-orange-500",
      barColor: "bg-orange-500",
      description:
        "Semantic, accessible, and SEO friendly HTML markup that forms a solid foundation for modern web applications.",
      level: 95,
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
      color: "text-blue-500",
      barColor: "bg-blue-500",
      description:
        "Responsive layouts, modern CSS techniques, animations, and pixel perfect UI styling.",
      level: 92,
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "text-yellow-400",
      barColor: "bg-yellow-400",
      description:
        "ES6+, async logic, DOM manipulation, performance focused and maintainable code.",
      level: 90,
    },
    {
      name: "React",
      icon: FaReact,
      color: "text-cyan-400",
      barColor: "bg-cyan-400",
      description:
        "Component-driven architecture, hooks, reusable UI patterns, and scalable apps.",
      level: 88,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-slate-800 dark:text-white",
      barColor: "bg-slate-800 dark:bg-white",
      description:
        "Server-side rendering, SEO optimization, App Router, and production ready setups.",
      level: 85,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-sky-400",
      barColor: "bg-sky-400",
      description:
        "Utility-first CSS for fast, consistent, and scalable UI development.",
      level: 92,
    },
    {
      name: "Git & GitHub",
      icon: FaGitAlt,
      color: "text-red-500",
      barColor: "bg-red-500",
      description:
        "Version control, branching strategies, collaboration, and clean commit history.",
      level: 85,
    },
    {
      name: "UI / UX Design",
      icon: FaPalette,
      color: "text-purple-500",
      barColor: "bg-purple-500",
      description:
        "User-centered design, wireframing, accessibility, and intuitive experiences.",
      level: 80,
    },
    {
      name: "Digital Marketing",
      icon: FaBullhorn,
      color: "text-pink-500",
      barColor: "bg-pink-500",
      description:
        "Brand visibility, conversion-focused strategies, and audience engagement.",
      level: 82,
    },
    {
      name: "SEO Optimization",
      icon: FaSearch,
      color: "text-green-500",
      barColor: "bg-green-500",
      description:
        "Search ranking, performance tuning, and technical SEO best practices.",
      level: 82,
    },
  ];

  return (
    <>
      {/* MAIN CONTENT */}
      <section
        id="about"
        className={`relative py-20 bg-white dark:bg-slate-900 transition ${
          activeSkill ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* ABOUT HEADER */}
          <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
            <Image
              src="/Avatar-DubiTech.webp"
              alt="DubiTech Founder"
              width={320}
              height={320}
              priority
              className="rounded-3xl shadow-2xl mx-auto"
            />

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Building Digital Experiences That Drive Results
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                DubiTech blends frontend engineering, UI/UX design,
                and digital strategy to help brands grow online.
              </p>
            </div>
          </div>

          {/* SKILLS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-10">
              Core Skills & Expertise
            </h3>

            <div className="max-w-5xl mx-auto rounded-3xl p-6 bg-white dark:bg-slate-800 shadow-">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    {...skill}
                    onLearnMore={() => setActiveSkill(skill)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <SkillModal
        skill={activeSkill}
        onClose={() => setActiveSkill(null)}
      />
    </>
  );
}
