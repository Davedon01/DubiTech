"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* Animation variants (same system used everywhere) */
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

const projects = [
  {
    title: "Agatone Poultry Farm",
    description:
      "A modern poultry farm platform featuring product categories, cart system, and smooth UI interactions built for performance and scalability.",
    image: "/projects/poultry.png",
    tech: ["React", "Tailwind", "Context API"],
    link: "#",
  },
  {
    title: "E-Commerce Store",
    description:
      "A fast, responsive e-commerce frontend with animated cart interactions and a clean, conversion-focused UX.",
    image: "/projects/ecommerce.png",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    title: "Marketing Landing Page",
    description:
      "A high-conversion landing page optimized for ads, SEO, and brand awareness campaigns.",
    image: "/projects/marketing.png",
    tech: ["Next.js", "SEO", "Tailwind"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 bg-white dark:bg-slate-900 overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-50/40 to-transparent dark:from-slate-800/40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold
            bg-blue-100 text-blue-700
            dark:bg-blue-900/40 dark:text-blue-300"
          >
            Portfolio
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Projects That Showcase <br className="hidden sm:block" />
            Skill, Speed & Strategy
          </h2>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A selection of real-world projects where I combined
            frontend engineering, UI design, and digital marketing
            to deliver fast, engaging, and scalable solutions.
          </p>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                group rounded-2xl overflow-hidden
                bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                shadow-sm hover:shadow-xl
                transition-all hover:-translate-y-1
              "
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={false}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="
                    object-cover
                    group-hover:scale-105
                    transition-transform duration-500
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        text-xs px-3 py-1 rounded-full
                        bg-slate-100 text-slate-700
                        dark:bg-slate-700 dark:text-slate-200
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <a
                    href={project.link}
                    className="
                      inline-flex items-center gap-2
                      text-sm font-semibold
                      text-blue-600 dark:text-blue-400
                      hover:underline
                    "
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </motion.div>

        {/* FOOTER CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Want a Project Like These?
          </h3>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Let’s build something fast, modern, and conversion-focused
            for your brand or business.
          </p>

          <a
            href="#contact"
            className="
              inline-block px-8 py-4 rounded-full
              bg-linear-to-r from-blue-600 to-purple-600
              text-white font-semibold shadow-lg
              hover:scale-105 transition
            "
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
