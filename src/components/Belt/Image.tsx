import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ImageProps = {
  image: string;
  animationValue: number;
  alt: string;
  width: number;
  height: number;
};

function Image({ image, animationValue, alt, width, height }: ImageProps) {
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
      <picture>
        <source
          srcSet={`./images/${image}`}
          type="image/webp"
        />
        <img
          className="w-full h-full object-cover object-[center_58%]"
          src={`./images/${image.replace(/\.webp$/i, ".jpg")}`}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
        />
      </picture>
    </div>
  );
}

export default Image;
