import { Link } from "react-router";
import { useDarkMode } from "../context/DarkModeContext";
import DarkModeToggler from "./DarkModeToggler";
import SearchButton from "./SearchButton";
import { useSelector } from "react-redux";
import { AppState } from "../user/store";

function Header() {
  const username = useSelector((state: AppState) => state.user.username);
  const { darkMode } = useDarkMode();
  return (
    <header className="sticky top-10 z-50 bg-gray-100 max-w-[90%] mx-auto shadow backdrop-blur-sm py-2 backdrop-filter supports-[backdrop-filter]:bg-background/60 dark:bg-zinc-900 rounded-2xl shadow-indigo-900/50">
      <div className="mx-auto h-16 flex items-center justify-between px-12">
        <Link to={username === "" ? "/" : "/dashboard"}>
          <img
            src={darkMode ? "/logo_dark.png" : "/logo.svg"}
            alt=""
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex items-center gap-4">
          <SearchButton />
          <DarkModeToggler />
        </div>
      </div>
    </header>
  );
}

export default Header;
