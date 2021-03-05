import { useEffect, useState } from "react";

export function useOnScreen(ref: any, rootMargin = "-300px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(entry.isIntersecting);
          observer.unobserve(ref.current);
        }
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
  }, []);

  return isIntersecting;
}

export function useWindowsSize(size: string) {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    if (window.matchMedia(size).matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, []);

  useEffect(() => {
    function IsSmallWindowsSize() {
      if (window.matchMedia(size).matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    }

    window.addEventListener("resize", IsSmallWindowsSize);

    return () => {
      window.removeEventListener("resize", IsSmallWindowsSize);
    };
  }, [isSmallScreen]);
  return isSmallScreen;
}
