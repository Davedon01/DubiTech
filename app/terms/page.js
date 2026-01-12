"use client";

import { motion } from "framer-motion";
import LegalLayout from "@/Components/LegalLayout";

export default function Terms() {
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
        <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          Terms & Conditions
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Terms and Conditions for Using DubiTech Services
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          These Terms and Conditions govern the use of DubiTech's website and services. By accessing or using our site, you agree to comply with these terms.
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
            Acceptance of Terms
          </h3>
          <p className="leading-relaxed">
            By using our website and services, you agree to these Terms and Conditions. If you do not agree, please refrain from using our services.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
            Intellectual Property
          </h3>
          <p className="leading-relaxed">
            All content, design, code, and media on DubiTech's website are the property of DubiTech and protected under copyright and intellectual property laws. You may not reproduce or distribute any content without explicit permission.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
            User Responsibilities
          </h3>
          <p className="leading-relaxed">
            Users are expected to use the website responsibly, without attempting to harm, misuse, or disrupt the site. Illegal activities or unauthorized access are strictly prohibited.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
            Limitation of Liability
          </h3>
          <p className="leading-relaxed">
            DubiTech is not liable for any damages, losses, or issues arising from the use of our website or services. Users assume all risks associated with using our platform.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
            Modifications to Terms
          </h3>
          <p className="leading-relaxed">
            DubiTech may update these Terms and Conditions at any time. Continued use of the website after updates constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
            Governing Law
          </h3>
          <p className="leading-relaxed">
            These Terms are governed by the laws of Nigeria. Any disputes will be subject to the exclusive jurisdiction of Nigerian courts.
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
          Need Assistance?
        </h3>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
          If you have any questions about these Terms and Conditions, feel free to reach out to us.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 ease-out
                hover:shadow-[0_0_25px_rgba(139,92,246,0.8)]"
        >
          Contact Us
        </a>
      </motion.div>
    </LegalLayout>
  );
}
