import { useEffect, useRef } from "react";
import { Splide } from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useScrollTo } from "../../hooks/useScrollTo";

gsap.registerPlugin(SplitText);

function Header() {
  const splideRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
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

  // スクロールナビ
  const scrollToElement = useScrollTo();

  const handleMenuClick = (targetId: string) => {
    scrollToElement(targetId);
  };

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

      {/* グローバルメニュー */}
      <div className="absolute z-40 w-11/12 h-44 flex justify-between items-start left-[4%] mt-3">
        {/* ロゴ画像 */}
        <div
          ref={logoRef}
          className="w-24 aspect-[2/3] h-auto -translate-y-2.5"
        >
          <img
            className="w-full h-full object-contain"
            src="/images/logo.png"
            alt=""
          />
        </div>

        {/* ナビ（リンク） */}
        <div
          ref={navLinksRef}
          className="translate-y-4 z-40"
        >
          <ul className="flex gap-7 mt-7">
            <li
              className="text-2xl cursor-pointer  hover:text-gray-500"
              onClick={() => handleMenuClick("message")}
            >
              Message
            </li>
            <li
              className="text-2xl cursor-pointer  hover:text-gray-500"
              onClick={() => handleMenuClick("menu")}
            >
              Menu
            </li>
            <li
              className="text-2xl cursor-pointer  hover:text-gray-500"
              onClick={() => handleMenuClick("access")}
            >
              Access
            </li>
          </ul>
        </div>
      </div>

      {/* content */}
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
    </header>
  );
}

export default Header;
