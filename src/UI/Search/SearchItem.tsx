import { ReactNode } from "react";
import { MdControlPoint } from "react-icons/md";

interface SearchItemTypes {
  key: any;
  onClick: () => void;
  children: ReactNode;
}
function SearchItem({ children, onClick }: SearchItemTypes) {
  return (
    <li
      className="sm:p-3 py-3 px-1 bg-gray-200 dark:bg-zinc-700/50 rounded text-md font-semibold cursor-pointer hover:bg-gray-300 dark:hover:bg-zinc-600/50 dark:text-gray-400 flex items-center"
      onClick={onClick}
    >
      <MdControlPoint className="h-6 w-6 mr-2 md:mr-4" />
      {children}
    </li>
  );
}

export default SearchItem;
