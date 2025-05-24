import SpinCircle from "./SpinCircle";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const storeNameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const footerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
      },
    });

    footerAnimation
      .from(storeNameRef.current, {
        autoAlpha: 0,
        scale: 3,
        duration: 0.5,
        filter: "blur(20px)",
      })
      .from(
        imageRef.current,
        {
          autoAlpha: 0,
          scale: 3,
          duration: 0.8,
          filter: "blur(20px)",
        },
        "-=0.4"
      );
  });

  return (
    <footer
      ref={footerRef}
      className="w-full h-64 bg-pink-200 flex flex-col justify-center items-center overflow-hidden"
    >
      <div
        ref={storeNameRef}
        className="flex items-center mb-5"
      >
        <SpinCircle />
        <div className="h-10 mx-5 mb-5">
          <p className="text-xl font-bold leading-relaxed text-center">
            HongKong Sweets <br className="pc-none sp-br" />
            Pop-up Store
          </p>
          <p className="text-xl font-bold leading-relaxed text-center">
            produced by Heigei
          </p>
        </div>
        <SpinCircle style={{ animationDelay: "1s" }} />
      </div>
      <div
        ref={imageRef}
        className="w-20 h-20"
      >
        <img
          className="w-full h-full"
          src="images/heigei-logo.png"
          alt="店舗ロゴ"
        />
      </div>
    </footer>
  );
}

export default Footer;
