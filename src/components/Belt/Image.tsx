import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ImageProps = {
  image: string;
  animationValue: number;
};

function Image({ image, animationValue }: ImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(imageRef.current, {
      autoAlpha: 0,
      y: 100,
      x: animationValue,
      duration: 1,
      filter: "blur(30px)",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 60%",
      },
    });
  });

  return (
    <div
      ref={imageRef}
      className="w-full h-full"
    >
      <img
        className="w-full h-full object-cover"
        src={`/images/${image}`}
        alt=""
      />
    </div>
  );
}

export default Image;
