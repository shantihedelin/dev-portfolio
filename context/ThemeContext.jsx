"use client"

import { createContext, useContext, useReducer } from "react";

// Skapa en context
const ThemeContext = createContext();

const initialState = { theme: "light" };

// Definera actions
function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: action.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
}

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
