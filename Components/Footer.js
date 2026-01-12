"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

/* Animation variant for fade up */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/"; // Show sticky CTA only on homepage

  return (
    <footer className="relative overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-50/40 to-transparent dark:from-slate-800/40" />

      {/* Footer Content */}
      <div className="relative z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-black/10 dark:border-white/10">

        {/* Main Grid */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid gap-16 md:grid-cols-3"
        >

          {/* BRAND */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/DubiTech-Logo.webp"
                alt="DubiTech Logo"
                width={42}
                height={42}
                className="rounded-full"
              />
              <span className="text-xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                DubiTech
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              DubiTech is a frontend-focused digital brand specializing in
              modern <strong>Next.js</strong>, <strong>React</strong>, and
              <strong> Tailwind CSS</strong> solutions. Building fast,
              scalable, and conversion-driven web experiences.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 text-xl text-slate-600 dark:text-slate-400">
              <a href="https://github.com/Davedon01?tab=repositories" target="_blank" className="hover:text-black dark:hover:text-white transition"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/dubi-tech-4ba1753a2/" target="_blank" className="hover:text-blue-600 transition"><FaLinkedin /></a>
              <a href="https://wa.me/2349036130600" target="_blank" className="hover:text-green-500 transition"><FaWhatsapp /></a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Navigation</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              {["Home", "About", "Projects", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  {isHome ? (
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-slate-900 dark:hover:text-white transition"
                    >
                      {item}
                    </Link>
                  ) : (
                    <Link
                      href={`/#${item.toLowerCase()}`}
                      className="hover:text-slate-900 dark:hover:text-white transition"
                    >
                      {item}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT & LEGAL */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
              <li>Email: <span className="ml-2 text-slate-900 dark:text-slate-200">dubitech0@gmail.com</span></li>
              <li>Location: <span className="ml-2 text-slate-900 dark:text-slate-200">Nigeria</span></li>
            </ul>

            {/* LEGAL LINKS */}
            <div className="mt-6 flex gap-4 text-sm">
              <Link href="/Privacy" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">Terms</Link>
            </div>
          </div>
        </motion.div>

        {/* ================= STICKY CTA ================= */}
        {isHome && (
          <div className="bg-linear-to-r from-blue-600 to-purple-600">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-white"
            >
              <span className="text-sm md:text-base font-medium">
                Need a fast, modern website that converts?
              </span>
              <Link
                href="#contact"
                className="px-6 py-2 rounded-xl bg-white text-slate-900 text-sm font-semibold hover:scale-105 transition"
              >
                Let’s Talk
              </Link>
            </motion.div>
          </div>
        )}

        {/* BOTTOM BAR */}
        <div className="border-t border-black/10 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
            <span>© {new Date().getFullYear()} DubiTech. All rights reserved.</span>
            <span>Frontend Developer • Next.js • Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
