"use client";
import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Main({ children }) {
  const { state } = useTheme();

  useEffect(() => {
    console.log("Theme changed:", state.theme);
    document.body.classList.toggle("dark-theme", state.theme === "dark");
  }, [state.theme]);

  return (
    <html lang="en">
      <body
        // className={
        //   state.theme === "light"
        //     ? "bg-blue-200 text-black m-0 "
        //     : "bg-gray-800 text-white m-0"
        // } 
      >
        {children}
      </body>
    </html>
  );
}
