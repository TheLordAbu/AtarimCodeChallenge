import { ReactNode } from "react";

export interface BoxProps {
  children: React.ReactNode;
  className?: string;
  type?: string;
}

export interface ButtonData {
  type?: string;
  children?: ReactNode;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
}
