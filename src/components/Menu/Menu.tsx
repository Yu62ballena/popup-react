import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { menuItems } from "../../constants/menuItems";

import MenuCard from "./MenuCard";
import SectionTitle from "../Common/SectionTitle";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Menu() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // メニューカードのアニメーション

    if (!cardsRef.current) {
      return;
    }

    const menuCards = gsap.utils.toArray(cardsRef.current.children);

    gsap.from(menuCards, {
      autoAlpha: 0,
      duration: 0.7,
      y: 100,
      ease: "back.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 60%",
      },
    });
  });

  return (
    <section
      className="w-full mt-48"
      id="menu"
    >
      <SectionTitle title="menu" />

      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 gap-16 mx-auto w-11/12 md:w-4/5"
      >
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
