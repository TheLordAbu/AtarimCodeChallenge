import { BoxProps } from "../utils/UITypes";

function Box({ children, className }: BoxProps) {
  // prettier-ignore
  const base = "rounded shadow bg-gray-100 dark:bg-zinc-700/50 dark:shadow-indigo-700/50";
  return <div className={`${base} ${className}`}>{children}</div>;
}

export default Box;
