import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import React from "react";


export default function ThemeSwitch() {
     const { theme, toggleTheme } = useTheme();
     console.log("Current theme:", theme);
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="px-3 py-2 rounded-full
                bg-gray-200 dark:bg-gray-700
                text-sm font-medium transition"
    >
      {theme === "light" ? <Moon /> : <Sun className="text-gray-200" />}
    </button>
  );
}
