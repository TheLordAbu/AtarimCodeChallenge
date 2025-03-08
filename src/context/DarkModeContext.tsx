/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

interface DarkModeProviderProps {
  children: ReactNode;
}
const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(function () {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
