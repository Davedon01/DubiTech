"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

/* Animation variants (same system used across your site) */
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

export default function Testimonials() {
  /* Load Elfsight script safely */
  useEffect(() => {
    if (!document.querySelector("#elfsight-script")) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      script.id = "elfsight-script";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-white dark:bg-slate-900 overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-purple-50/40 to-transparent dark:from-slate-800/40" />

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
            className="
              inline-block px-4 py-1 rounded-full text-sm font-semibold
              bg-purple-100 text-purple-700
              dark:bg-purple-900/40 dark:text-purple-300
            "
          >
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Trusted by Clients <br className="hidden sm:block" />
            Across Businesses
          </h2>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Real feedback from clients and partners who’ve worked with
            <span className="font-semibold text-slate-900 dark:text-white">
              {" "}DubiTech
            </span>
            . These reviews reflect our commitment to quality,
            performance, and results.
          </p>
        </motion.div>

        {/* REVIEWS EMBED */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            mt-20 rounded-2xl p-6 md:p-10
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
            shadow-lg
          "
        >
          {/* Elfsight Google Reviews */}
          <div
            className="elfsight-app-1f2b3b87-154a-4a65-8163-9c2b33e9d091"
            data-elfsight-app-lazy
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Work With DubiTech?
          </h3>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Join the list of satisfied clients. Let’s build something
            fast, modern, and conversion-focused for your brand.
          </p>

          <a
            href="#contact"
            className="
              inline-block px-8 py-4 rounded-full
              bg-linear-to-r from-purple-600 to-blue-600
              text-white font-semibold shadow-lg
              hover:scale-105 transition
            "
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
