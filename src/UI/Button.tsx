import { ReactNode } from "react";

interface ButtonData {
  type?: string;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
}

// prettier-ignore
function Button({ type, children, onClick, disabled, icon, className }: ButtonData) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`"px-12 py-3 flex items-center rounded-md cursor-pointer dark:bg-zinc-900" ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}

export default Button;
