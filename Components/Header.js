"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { usePathname, useRouter } from "next/navigation";

export default function Header({ scrollToSection, refs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";

  /* ---------------- NAV LINKS ---------------- */
  const navLinks = [
    { label: "Home", ref: refs?.homeRef, path: "/" },
    { label: "About", ref: refs?.aboutRef, path: "/" },
    { label: "Services", ref: refs?.servicesRef, path: "/" },
    { label: "Projects", ref: refs?.projectsRef, path: "/" },
    { label: "Testimonials", ref: refs?.testimonialsRef, path: "/" },
  ];

  /* ---------------- SCROLL BEHAVIOR ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 40);
      setHidden(current > lastScrollY.current && current > 120);

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- NAV CLICK ---------------- */
  const handleNavClick = (link) => {
    setIsMenuOpen(false);

    if (isHome && link.ref) {
      scrollToSection?.(link.ref);
    } else {
      const hash = link.ref ? `#${link.label.toLowerCase()}` : "";
      router.push(link.path + hash);
    }
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-120%" : "0%" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-4 left-0 right-0 z-50 px-4"
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          {/* LOGO */}
          <motion.div
            animate={{ scale: scrolled ? 0.95 : 1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full
              bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl
              border border-black/10 dark:border-white/10"
          >
            <Image
              src="/DubiTech-Logo.webp"
              alt="DubiTech Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="text-lg font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              DubiTech
            </span>
          </motion.div>

          {/* DESKTOP NAV */}
          <nav
            className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full
              bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl
              border border-black/10 dark:border-white/10
              text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="hover:text-black dark:hover:text-white transition"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="px-3 py-2 rounded-full
                bg-gray-200 dark:bg-gray-700
                text-sm font-medium transition"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setIsMenuOpen(false);
                if (isHome && refs?.contactRef) {
                  scrollToSection?.(refs.contactRef);
                } else {
                  router.push("/#contact");
                }
              }}
              className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold"
            >
              Contact Us
            </motion.button>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="px-3 py-2 rounded-full
                bg-gray-200 dark:bg-gray-700
                text-sm font-medium"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="px-4 py-2 rounded-xl
                bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl
                border border-black/10 dark:border-white/10
                text-xl text-slate-800 dark:text-slate-200"
            >
              ☰
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/70 z-40 md:hidden"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm z-50
                bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl
                border-l border-black/10 dark:border-white/10
                shadow-2xl flex flex-col"
            >
              <div className="p-6 text-center">
                <span className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  DubiTech
                </span>
              </div>

              <div className="flex justify-center mb-4">
                <button
                  onClick={toggleTheme}
                  className="px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700"
                >
                  {theme === "light" ? "🌙" : "☀️"}
                </button>
              </div>

              <nav className="flex flex-col gap-6 px-6 text-slate-800 dark:text-slate-200">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className="text-lg font-medium hover:text-black dark:hover:text-white"
                  >
                    {link.label}
                  </button>
                ))}

                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (isHome && refs?.contactRef) {
                      scrollToSection?.(refs.contactRef);
                    } else {
                      router.push("/#contact");
                    }
                  }}
                  className="mt-6 w-full px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold"
                >
                  Contact Us
                </button>
              </nav>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 px-3 py-2 rounded-lg bg-black/20 text-white"
              >
                ✕
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
