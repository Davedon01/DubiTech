"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Megaphone,
  BarChart3,
} from "lucide-react";

/* Animation variants (same as About) */
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

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "High-performance, responsive web applications built with React, Next.js, and Tailwind CSS — optimized for speed, scalability, and user experience.",
    },
    {
      icon: Layout,
      title: "UI / UX Design",
      description:
        "Modern, clean, and conversion-focused interfaces that guide users naturally and improve engagement across all devices.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "Strategic marketing solutions including SEO, content optimization, and ad-ready landing pages designed to attract and convert.",
    },
    {
      icon: BarChart3,
      title: "Brand Growth & Strategy",
      description:
        "Data-driven decisions, performance tracking, and growth-focused strategies to help brands scale online effectively.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-28 bg-white dark:bg-slate-900 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-purple-50/40 to-transparent dark:from-purple-950/30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER — slides in from LEFT */}
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
            bg-purple-100 text-purple-700
            dark:bg-purple-900/40 dark:text-purple-300"
          >
            What We Do
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            Services Designed to <br className="hidden sm:block" />
            Grow Your Digital Presence
          </h2>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            DubiTech delivers modern digital solutions that combine
            <strong> design</strong>, <strong>technology</strong>, and
            <strong> strategy</strong> — built to convert users into customers.
          </p>
        </motion.div>

        {/* SERVICES GRID — slides in from RIGHT */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group p-8 rounded-2xl
                bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-xl
                  bg-linear-to-r from-blue-600 to-purple-600 text-white mb-6"
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* CTA — fade up */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Build Something Powerful?
          </h3>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Whether you’re launching a brand, scaling a product, or running ads,
            DubiTech is ready to help you stand out and convert.
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full
            bg-linear-to-r from-blue-600 to-purple-600
            text-white font-semibold shadow-lg
            hover:scale-105 transition"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
