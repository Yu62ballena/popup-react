import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

import SectionTitle from "../Common/SectionTitle";

import StoreInfo from "./StoreInfo";
import GoogleMaps from "./GoogleMaps";
import { storeInfos } from "../../constants/storeInfos";
import { useFontReady } from "../../hooks/useFontReady";

function Access() {
  const storeInfoRef = useRef<HTMLDivElement>(null);
  const isFontReady = useFontReady();

  useGSAP(
    () => {
      if (!isFontReady || !storeInfoRef.current) {
        return;
      }

      const icons = storeInfoRef.current.querySelectorAll("svg");
      const headings = new SplitText(
        storeInfoRef.current.querySelectorAll("h3"),
        { type: "chars" }
      );
      const paragraphs = new SplitText(
        storeInfoRef.current.querySelectorAll("p"),
        { type: "chars" }
      );

      const allElements = [...icons, ...headings.chars, ...paragraphs.chars];

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: storeInfoRef.current,
          start: "top 60%",
        },
      });

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
    },
    { dependencies: [isFontReady] }
  );

  return (
    <section
      className="mb-48 overflow-hidden"
      id="access"
    >
      <SectionTitle title="access" />

      <div className="flex flex-col md:flex-row w-11/12 md:w-4/5 justify-between gap-5 mx-auto">
        <div
          ref={storeInfoRef}
          className="w-fit sm:w-3/5 md:w-1/3 text-2xl sm:mx-auto md:mx-0"
        >
          {storeInfos.map((info) => (
            <StoreInfo
              key={info.id}
              {...info}
            />
          ))}
        </div>

        <div className="w-11/12 md:w-2/3 mx-auto md:mx-0 h-80 sm:h-[500px]">
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
