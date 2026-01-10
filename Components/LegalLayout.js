"use client";

import { motion } from "framer-motion";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function LegalLayout({ title, children }) {
  const slideLeft = { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } };
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Legal Content */}
      <section className="relative py-28 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Section Header */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
              {title}
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              {title}
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mt-16 space-y-12 text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            {children}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}
