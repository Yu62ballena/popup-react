import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useFontReady } from "../../hooks/useFontReady";

gsap.registerPlugin(SplitText);

type HeroProps = {
  dateRef?: React.RefObject<HTMLParagraphElement | null>;
};

function Hero({ dateRef }: HeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isFontReady = useFontReady();

  useGSAP(
    () => {
      if (!isFontReady || !titleRef.current) {
        return;
      }

      // 最初に要素を非表示にする
      gsap.set(titleRef.current, { autoAlpha: 0 });

      const titleAnimation = new SplitText(titleRef.current, { type: "chars" });
      const chars = titleAnimation.chars;

      // アニメーション開始時に親要素を表示し、文字をアニメーション
      const tl = gsap.timeline();

      tl.set(titleRef.current, { autoAlpha: 1 }).from(chars, {
        autoAlpha: 0,
        y: 50,
        stagger: 0.08,
        ease: "elastic.out(1,0.3)",
        duration: 1,
      });
    },
    {
      dependencies: [isFontReady],
      scope: titleRef,
    }
  );

  return (
    <div
      className="absolute z-30 flex items-center
      justify-around flex-col w-full h-11/12 font-first-view"
    >
      <div>
        <h1
          ref={titleRef}
          className="mt-28 sm:mt-24 text-[20vw] sm:text-[16vw] md:text-[8.5vw] text-center leading-tight font-bold h-fit"
          style={{ visibility: "hidden" }}
        >
          <span className="text-[17vw] sm:text-[16vw] md:text-[8vw]">
            HongKong
          </span>
          <br className="sp-br" />
          <span className="text-stroke">
            {" "}
            Swe<span className="animate-e inline-block">e</span>ts
          </span>
          <br className="sp-br" />
          <div className="flex flex-col md:flex-row items-center md:items-baseline">
            <span>
              Pop-up <br className="pc-none sp-br" />
              Store
            </span>
            <span className="text-3xl md:text-2xl ml-7">
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
        className="text-3xl sm:text-5xl font-first-date"
      >
        5/20 ~ 5/31
      </p>
    </div>
  );
}

export default Hero;
