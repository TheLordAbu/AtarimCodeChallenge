import { useEffect, useRef, RefObject } from "react";

export default function useOutsideClick(
  handler: () => void, // Type for handler
  listenCapturing: boolean = true // Default value and type for listenCapturing
): RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement | null>(null); // Ref typed as HTMLElement or null

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      // Ensure ref is not null and that the click occurred outside the element
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);
    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
}
