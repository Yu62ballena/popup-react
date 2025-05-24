import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

type HeroProps = {
  dateRef?: React.RefObject<HTMLParagraphElement | null>;
};

function Hero({ dateRef }: HeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  // titleAnimation
  useEffect(() => {
    if (titleRef.current) {
      const titleAnimation = new SplitText(titleRef.current, { type: "chars" });
      const chars = titleAnimation.chars;

      gsap.from(chars, {
        autoAlpha: 0,
        y: 50,
        stagger: 0.08,
        ease: "elastic.out(1,0.3)",
        duration: 1,
      });

      return () => {
        titleAnimation.revert();
      };
    }
  }, []);

  return (
    <div
      className="absolute z-30 flex items-center
      justify-around flex-col w-full h-11/12 font-first-view"
    >
      <div>
        <h1
          ref={titleRef}
          className="mt-24 text-[8vw] leading-tight font-bold h-fit"
        >
          HongKong
          <br className="sp-br" />
          <span className="text-stroke">
            {" "}
            Swe<span className="animate-e inline-block">e</span>ts
          </span>
          <br className="sp-br" />
          <div className="flex items-baseline">
            <span>
              Pop-up <br className="pc-none sp-br" />
              Store
            </span>
            <span className="text-3xl ml-7">
              produced by He
              <span className="text-pink inline-block animate-i">i</span>ge
              <span className="text-pink inline-block animate-i">i</span>
            </span>
          </div>
        </h1>
      </div>
      <p className="sp-none"></p>
      <p
        ref={dateRef}
        className="text-5xl font-first-date"
      >
        5/20 ~ 5/31
      </p>
    </div>
  );
}

export default Hero;
