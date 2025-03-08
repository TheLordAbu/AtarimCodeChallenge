import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeToggler = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={toggleDarkMode}
      className={`cursor-pointer transition-transform duration-500 ${
        darkMode ? "rotate-180" : "rotate-0"
      }`}
    >
      {darkMode ? (
        <span className="flex items-center gap-2">
          <MdOutlineNightlight className="text-indigo-600" />
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <MdOutlineLightMode className="text-indigo-700" />
        </span>
      )}
    </button>
  );
};

export default DarkModeToggler;
