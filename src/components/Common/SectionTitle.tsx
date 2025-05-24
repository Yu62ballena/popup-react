import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useFontReady } from "../../hooks/useFontReady";
gsap.registerPlugin(ScrollTrigger, SplitText);

type SectionTitleProps = {
  title: string;
  className?: string;
};

function SectionTitle({ title, className = "" }: SectionTitleProps) {
  const titleRef = useRef(null);
  const isFontReady = useFontReady();

  useGSAP(() => {
    if (!isFontReady || !titleRef) {
      return;
    }

    const titleAnimation = new SplitText(titleRef.current, { type: "chars" });
    const titleChars = titleAnimation.chars;

    gsap.from(titleChars, {
      autoAlpha: 0,
      y: 50,
      stagger: 0.1,
      ease: "back.out",
      duration: 0.5,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 60%",
      },
    });
  }, {dependencies: [isFontReady]});

  return (
    <h2
      ref={titleRef}
      className={`text-6xl mb-20 text-center font-bold ${className}`}
    >
      {title}
    </h2>
  );
}

export default SectionTitle;
