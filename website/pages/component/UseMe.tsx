import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function UseMe({
  direction,
  position,
  bgColor,
  textColor,
}: {
  direction: "LEFT" | "RIGHT";
  position: string;
  bgColor: string;
  textColor: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
  const onScreen = useOnScreen(ref, "-400px 100px -300px 100px");

  return (
    <AnimatePresence>
      <div className="bg-red-700" ref={ref}>
        {onScreen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${bgColor} ${textColor} absolute w-28 h-8 flex justify-center items-center text-white text-xs font-semibold opacity-60  ${
              direction === "RIGHT"
                ? "rounded-r-full rounded-t-full"
                : "rounded-l-full rounded-t-full"
            } ${position}`}
          >
            Use me
          </motion.div>
        ) : null}
      </div>
    </AnimatePresence>
  );
  // Hook
  function useOnScreen(ref: any, rootMargin = "0px") {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          if (entry.isIntersecting) setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(ref.current);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
  }
}

export default UseMe;
