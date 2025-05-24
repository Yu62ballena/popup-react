import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

import SectionTitle from "../Common/SectionTitle";
import {
  faCookieBite,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import StoreInfo from "./StoreInfo";
import GoogleMaps from "./GoogleMaps";

function Access() {
  const storeInfoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!storeInfoRef.current) {
      return;
    }

    const icons = storeInfoRef.current.querySelectorAll("svg");
    const headings = new SplitText(storeInfoRef.current.querySelectorAll("h3"), {type: 'chars'});
    const paragraphs = new SplitText(storeInfoRef.current.querySelectorAll("p"), {type: 'chars'});

    const allElements = [...icons, ...headings.chars, ...paragraphs.chars];

    const timeline = gsap.timeline({
      scrollTrigger: storeInfoRef.current,
      start: "top 60%",
    })

    timeline.fromTo(
      allElements,
      {
        autoAlpha: 0,
        rotation: -90,
        transformOrigin: "0% 100%",
        filter: "blur(5px)",
      },
      {
        autoAlpha: 1,
        rotation: 0,
        stagger: 0.02,
        duration: 0.3,
        ease: "power2.out",
        filter: "blur(0px)",
      }
    );
  });

  return (
    <section
      className="mb-24 overflow-hidden"
      id="access"
    >
      <SectionTitle title="access" />

      <div className="flex w-4/5 justify-between gap-5 mx-auto">
        <div
          ref={storeInfoRef}
          className="w-1/3 text-2xl"
        >
          <StoreInfo
            icon={faCookieBite}
            className="text-amber-700"
            title="香港スイーツ"
            title2ndLine="PopUp Store"
            content="〒104-0061"
            content2="東京都中央区銀座5−7−10"
            content3="EXITMELSA 1F"
          />
          <StoreInfo
            icon={faCalendarDays}
            className="text-blue-500"
            content="2025年5月21日〜31日"
            style={{ animationDelay: "0.5s" }}
          />
          <StoreInfo
            icon={faClock}
            className="text-green-500"
            content="11:00〜なくなり次第終了"
            content2="(最終日17:00まで)"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="w-2/3 h-[500px]">
          <GoogleMaps
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827850900953!2d139.76366397678207!3d35.68124122656649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be66cc3b051%3A0x96498ba7f4c036c1!2z44Kk44Kw44K444OD44OI44Oh44Or44K1!5e0!3m2!1sja!2sjp!4v1747291882320!5m2!1sja!2sjp"
            title="香港スイーツ Pop-up Store の場所を示すGoogle Maps"
          />
        </div>
      </div>
    </section>
  );
}

export default Access;
