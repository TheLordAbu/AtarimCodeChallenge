import { ReactNode } from "react";

interface SearchGroupProps {
  children?: ReactNode;
  heading: string;
}
function SearchGroup({ children, heading }: SearchGroupProps) {
  return (
    <>
      <h2 className="dark:text-gray-400 border-b pb-1 mb-2 dark">{heading}</h2>
      <ul className="flex flex-col gap-2">{children}</ul>
    </>
  );
}

export default SearchGroup;
