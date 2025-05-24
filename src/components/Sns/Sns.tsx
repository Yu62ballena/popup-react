import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Sns() {
  const snsRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!snsRef.current) {
      return;
    }

    gsap.from(snsRef.current, {
      autoAlpha: 0,
      y: 50,
      scrollTrigger: {
        trigger: snsRef.current,
        start: "top 100%",
      },
    });
  });

  return (
    <section ref={snsRef} className="text-center">
      <h3 className="text-2xl mb-7">- Follow Us -</h3>
      <a
        className="mb-12"
        href="https://www.instagram.com/heigei_ginza/"
      >
        <div className="mx-auto py-1 px-2.5 w-fit flex justify-center items-center text-pink border-4 border-pink mb-20 animate-sns">
          <FontAwesomeIcon
            className="text-5xl mr-2.5"
            icon={faInstagram}
          />
          <p className="text-2xl">喜記 銀座店</p>
        </div>
      </a>
    </section>
  );
}

export default Sns;
