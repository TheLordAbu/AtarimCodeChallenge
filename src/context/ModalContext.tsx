import {
  cloneElement,
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import Button from "../UI/Button";
import useOutsideClick from "../hooks/useOutsideClick";

interface ModalProps {
  children: ReactNode;
}

interface ModalContextProps {
  openName: string;
  close: () => void;
  open: (name: string) => void;
}

interface OpenProps {
  children: ReactElement;
  opens: string;
}

interface WindowProps {
  children: ReactElement;
  name: string;
}

interface CustomProps {
  onClick?: () => void;
  onCloseModal?: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  openName: "",
  close: () => {},
  open: () => {},
});

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = (name: string) => setOpenName(name);
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }: OpenProps) {
  const { open } = useContext(ModalContext);
  return cloneElement(children as ReactElement<CustomProps>, {
    onClick: () => open(opens),
  });
}

function Window({ children, name }: WindowProps) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close) as React.RefObject<HTMLDivElement>;
  if (name !== openName) return null;
  return createPortal(
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-black/50 dark:bg-zinc-600/50 z-50 blur-sm"></div>
      <div
        className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-gray-100 rounded shadow z-60 sm:px-12 py-6 px-4 lg:w-[750px] w-[90%] backdrop-blur-sm backdrop-filter supports-[backdrop-filter]:bg-background/60 dark:bg-zinc-900 shadow-indigo-900/50"
        ref={ref}
      >
        <Button
          onClick={close}
          className="absolute top-6 right-1 hidden sm:block"
        >
          <HiXMark className="w-12 h-6" />
        </Button>
        <div className="">
          {cloneElement(children as ReactElement<CustomProps>, {
            onCloseModal: close,
          })}
        </div>
      </div>
    </>,
    document.body
  );
}

export function useModal() {
  const { close, open } = useContext(ModalContext);
  return { closeModal: close, openModal: open };
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
