"use client";

import { motion } from "framer-motion";
import LegalLayout from "@/Components/LegalLayout";

export default function Privacy() {
  const slideLeft = { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } };
  const slideRight = { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } };
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  return (
    <LegalLayout>
      {/* HEADER */}
      <motion.div
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
          Privacy Policy
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Your Privacy Matters to DubiTech
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          This Privacy Policy outlines how DubiTech collects, uses, and protects the personal information of our users. Your data is handled with utmost care to ensure transparency and trust.
        </p>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-16 space-y-12 max-w-4xl mx-auto text-slate-700 dark:text-slate-300"
      >
        <section>
          <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
            Information We Collect
          </h3>
          <p className="leading-relaxed">
            We may collect personal information such as your name, email address, and any other information you provide when contacting us. We also automatically collect non-identifiable data to improve our services.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
            How We Use Your Information
          </h3>
          <p className="leading-relaxed">
            The information collected is used to provide our services, respond to inquiries, improve our website, and communicate important updates. We do not sell or share your personal data with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
            Cookies & Tracking
          </h3>
          <p className="leading-relaxed">
            Our website uses cookies and similar technologies to enhance user experience, analyze traffic, and customize content. You can manage cookies through your browser settings at any time.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
            Your Rights
          </h3>
          <p className="leading-relaxed">
            You have the right to access, correct, or delete your personal data. For any requests regarding your information, please contact us via the email provided in the footer.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
            Changes to This Policy
          </h3>
          <p className="leading-relaxed">
            DubiTech may update this Privacy Policy from time to time. Changes will be communicated via our website, and continued use of our services constitutes acceptance of these updates.
          </p>
        </section>
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
          Have Questions About Your Privacy?
        </h3>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
          Reach out to us, and we’ll be happy to clarify any concerns about your personal data.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 rounded-full bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 ease-out
                hover:shadow-[0_0_25px_rgba(139,92,246,0.8)]"
        >
          Contact Us
        </a>
      </motion.div>
    </LegalLayout>
  );
}
