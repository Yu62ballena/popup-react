import { useEffect, useRef } from "react";
import { Splide } from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import LogoNavigation from "./LogoNavigation";
import Hero from "./Hero";

gsap.registerPlugin(SplitText);

function Header() {
  const splideRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLParagraphElement>(null);

  // splideの初期化
  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: "fade",
        rewind: true,
        autoplay: true,
        interval: 5000,
        arrows: false,
        pagination: true,
        speed: 4000,
        pauseOnHover: false,
      });

      splide.mount();

      return () => {
        splide.destroy();
      };
    }
  }, []);

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
      <div
        ref={splideRef}
        className="splide absolute top-0 left-0 h-full w-full z-20"
        aria-label="main-bg-slide"
      >
        <div className="splide__track w-full h-full">
          <ul className="splide__list w-full h-full">
            <li className="splide__slide w-full h-full">
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src="/images/0425_012.jpg"
                  alt="ホーローバン"
                />
              </div>
            </li>
            <li className="splide__slide w-full h-full">
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src="/images/0425_009.jpg"
                  alt="エッグタルト"
                />
              </div>
            </li>
            <li className="splide__slide w-full h-full">
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src="/images/0425_011.jpg"
                  alt="マーラーガオ"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* splide ここまで */}

      <LogoNavigation
        logoRef={logoRef}
        navLinksRef={navLinksRef}
      />

      {/* content */}
      <Hero 
        dateRef={dateRef}
      />
    </header>
  );
}

export default Header;
