import { BoxProps } from "../utils/UITypes";

function BoxRow({ children, type }: BoxProps) {
  return <div className="flex gap-2 items-center">{children}</div>;
}

export default BoxRow;
