"use client"

import { useTheme } from "@/context/ThemeContext";

// Definera contexten
export default function ThemeToggleButton() {
    
  const { state, dispatch } = useTheme();

  function toggleTheme() {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "TOGGLE_THEME", theme: newTheme });
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-300 hover:bg-gray-400"
    >
      Toggle Theme
    </button>
  );
}
