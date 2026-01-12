import { motion, AnimatePresence } from "framer-motion";

export default function SkillModal({ skill, onClose }) {
  return (
    <AnimatePresence>
      {skill && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md
                     flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* MODAL CARD */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="
              max-w-lg w-full rounded-3xl
              bg-white dark:bg-slate-900
              p-8 shadow-2xl
            "
          >
            {/* HEADER */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800">
                <skill.icon className={`text-4xl ${skill.color}`} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {skill.name}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Proficiency: {skill.level}%
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {skill.description}
            </p>

            {/* PROGRESS BAR */}
            <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`h-full ${skill.barColor}`}
              />
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="
                w-full py-3 rounded-full
                bg-linear-to-r from-blue-600 to-purple-600
                text-white font-semibold
                transition-all duration-300
                hover:shadow-[0_0_25px_rgba(139,92,246,0.8)]
                hover:scale-[1.02]
              "
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
