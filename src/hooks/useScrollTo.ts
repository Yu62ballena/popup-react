import { useCallback } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

type ScrollToOptions = {
  duration?: number;
  offsetY?: number;
  ease?: string;
};

export const useScrollTo = () => {
  const scrollToElement = useCallback(
    (targetId: string, options: ScrollToOptions = {}) => {
      const { duration = 0.7, offsetY = 40, ease = "power2.inOut" } = options;

      gsap.to(window, {
        duration,
        scrollTo: {
          y: `#${targetId}`,
          offsetY,
        },
        ease,
      });
    },
    []
  );

  return scrollToElement;
};
