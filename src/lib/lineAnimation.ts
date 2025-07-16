import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

type lineAnimationProps = {
  ref: React.RefObject<HTMLElement | null>;
  element: string;
  type: string;
  autoAlpha?: number;
  y?: number;
  stagger?: number;
  duration?: number;
  start?: string;
};

export const lineAnimation = ({
  ref,
  element,
  type,
  autoAlpha = 0,
  y = 50,
  stagger = 0.15,
  duration = 0.5,
  start = "top 60%",
}: lineAnimationProps) => {
  if (!ref.current) {
    return;
  }

  const animation = new SplitText(ref.current.querySelectorAll(element), {
    type: type,
  });

  let animationItem;
  if (type === "lines") {
    animationItem = animation.lines;
  } else if (type === "words") {
    animationItem = animation.words;
  } else if (type === "chars") {
    animationItem = animation.chars;
  } else {
    animationItem = animation.lines;
  }

  gsap.from(animationItem, {
    autoAlpha: autoAlpha,
    y: y,
    stagger: stagger,
    duration: duration,
    scrollTrigger: {
      trigger: ref.current,
      start: start,
    },
  });
};
