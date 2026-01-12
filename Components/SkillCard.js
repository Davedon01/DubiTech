"use client";

import { motion } from "framer-motion";

export default function SkillCard({
  name,
  icon: Icon,
  color,
  onLearnMore,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
      className="
        group p-4 rounded-2xl
        bg-slate-50 dark:bg-slate-900
        shadow-sm hover:shadow-xl
        border border-slate-200/50 dark:border-slate-700/50
        transition-all duration-300
        flex flex-col items-center justify-between
      "
    >
      {/* ICON */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="
          mb-3 p-2 rounded-xl
          bg-white dark:bg-slate-800
          shadow-inner
        "
      >
        <Icon className={`text-3xl ${color}`} />
      </motion.div>

      {/* NAME */}
      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 text-center mb-2">
        {name}
      </p>

      {/* LEARN MORE */}
      <button
        onClick={onLearnMore}
        className="
          text-xs font-medium
          text-blue-600 dark:text-blue-400
          hover:underline
          transition
        "
      >
        Learn more →
      </button>
    </motion.div>
  );
}
