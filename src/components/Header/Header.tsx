import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import LogoNavigation from "./LogoNavigation";
import Hero from "./Hero";
import SplideBackgroundSlider from "./SplideBackgroundSlider";

gsap.registerPlugin(SplitText);

function Header() {
  const splideRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLParagraphElement>(null);

  // ふわっと現れるアニメーション
  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        !splideRef.current ||
        !logoRef.current ||
        !navLinksRef.current ||
        !dateRef.current
      ) {
        return;
      }
      const heroAnimation = gsap.timeline();

      heroAnimation
        .from(splideRef.current, { autoAlpha: 0, duration: 3.0 })
        .from(logoRef.current, { autoAlpha: 0, y: -100, duration: 0.8 }, ">-2")
        .from(
          navLinksRef.current.querySelectorAll("li"),
          { autoAlpha: 0, y: -100, duration: 0.8, stagger: 0.2 },
          ">-0.5"
        )
        .from(dateRef.current, { autoAlpha: 0, duration: 0.8, y: 100 }, "<");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* splide */}
      <SplideBackgroundSlider splideRef={splideRef} />

      {/* ロゴ・ナビ */}
      <LogoNavigation
        logoRef={logoRef}
        navLinksRef={navLinksRef}
      />

      {/* content */}
      <Hero dateRef={dateRef} />
    </header>
  );
}

export default Header;
