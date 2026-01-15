"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* Animations */
const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const toastAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // { type, message }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mojvozbw", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setToast({ type: "success", message: "Your message has been sent 🎉" });
        form.reset();
      } else {
        setToast({ type: "error", message: "MESSAGE ERROR ❌" });
      }
    } catch {
      setToast({ type: "error", message: "MESSAGE ERROR ❌" });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 4000);
    }
  }

  return (
    <section
      id="contact"
      className="relative py-20 bg-white dark:bg-slate-900 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-50/40 to-transparent dark:from-slate-800/40" />

      {/* TOAST */}
      <AnimatePresence>
        {toast && (
          <motion.div
            variants={toastAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-xl shadow-xl text-sm font-semibold ${
              toast.type === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            Contact
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Let’s Work Together
          </h2>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
            Have a project in mind or need a modern, high-converting website?
            Send a message and let’s build something impactful together.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto rounded-3xl bg-white/70 dark:bg-slate-800/80 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="grid gap-6">

            {/* Honeypot */}
            <input type="text" name="_gotcha" className="hidden" />

            {/* Name */}
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="mt-1 w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@email.com"
                  className="mt-1 w-full px-4 py-3 rounded-xl bg-white/80 text-slate-700 dark:text-slate-300 dark:bg-slate-900 border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-purple-500/50"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Phone Number
                </label>
                <div className="mt-1 flex gap-2">
                  <select
                    name="country_code"
                    className="px-3 py-3 rounded-xl bg-white/80 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-black/10 dark:border-white/10 text-sm focus:ring-2 focus:ring-blue-500/50"
                  >
                    <option value="+234">🇳🇬 +234</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                  </select>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="801 234 5678"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/80 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="mt-1 w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-black/10 dark:border-white/10 resize-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.04 }}
              whileTap={{ scale: loading ? 1 : 0.96 }}
              className={`w-full px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 ease-out
                hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-linear-to-r from-blue-600 to-purple-600 hover:brightness-110"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
