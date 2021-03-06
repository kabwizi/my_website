import { useEffect, useState } from "react";

export function useOnScreen(
  ref: React.MutableRefObject<HTMLDivElement | null>,
  rootMargin: string = "-300px",
  oneTime: boolean = true
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (ref.current) {
          if (oneTime) {
            if (entry.isIntersecting) {
              setIntersecting(entry.isIntersecting);
            }
          } else {
            setIntersecting(entry.isIntersecting);
          }
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
      if (ref.current) {
        observer.unobserve(ref.current);
      }
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
